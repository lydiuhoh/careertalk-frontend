/* eslint camelcase: "off" */

import axios from 'axios';
import jwt from 'jsonwebtoken';

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
        /**
        const checkUserOptions = {
          method: 'POST',
          headers: { googleId, email, given_name, family_name, picture },
          url: 'SEHO I NEED THIS ENDPOINT'
        };
        const user = await axios(checkUserOptions);

        if (user === 'Something went wrong') {
          throw Error('Checking existing user failed.. try again please');
        }
        */
      } catch {
        throw Error('Invalid Google Token. Please login again.');
      }

      // Or we can use user.id
      return jwt.sign({ googleId }, process.env.JWT_SECRET);
    }
  }
};
