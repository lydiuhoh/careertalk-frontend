/* eslint camelcase: "off" */

import axios from 'axios';
import jwt from 'jsonwebtoken';

const USER_URL = process.env.NODE_ENV === 'development' ? `${process.env.INT_API_URL}` : `${process.env.API_URL}`;

export default {
  Mutation: {
    userLogin: async (_, args) => {
      const { tokenId, googleId } = args;
      const VALIDATE_GOOGLE_TOKEN_URL = `${process.env.VALIDATE_GOOGLE}${tokenId}`;

      try {
        const {
          data: { email, given_name, family_name, picture, iss, aud }
        } = await axios(VALIDATE_GOOGLE_TOKEN_URL);

        // validate ISS
        if (iss !== 'accounts.google.com') {
          throw Error('Wrong issuer');
        }

        // validate AUD
        if (aud !== process.env.GOOGLE_CLIENT_ID) {
          throw Error('Token aud id does not match app.');
        }

        // check existing user: if not found, create new user
        const headers = {
          google_id: googleId,
          email,
          given_name,
          family_name,
          picture,
          job: 'student'
        };

        const { data: { user }, errors } = await axios.post(`${USER_URL}/v2/register/student/user`, undefined, { headers });

        if (!errors) {
          const userId = user.id;
          return jwt.sign({ userId }, process.env.JWT_SECRET);
        }
        throw Error(errors.message);
      } catch (error) {
        throw Error(error.message);
      }
    }
  }
};
