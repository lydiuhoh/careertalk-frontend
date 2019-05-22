import axios from 'axios';

const GET_EMPLOYERS_URL = process.env.NODE_ENV === 'development' ? `${process.env.INT_API_URL}` : `${process.env.API_URL}`;

export default {
  Query: {
    getEmployerList: async (_, args, { request, isAuthenticated }) => {
      const { fairId, isUser } = args;
      let URL;
      let headers;

      if (isUser) {
        isAuthenticated(request);
        const { headers: { authorization }, userId } = request;
        headers = { Authorization: authorization, id: userId };

        URL = `${GET_EMPLOYERS_URL}/v2/${fairId}/employers`;
      } else {
        URL = `${GET_EMPLOYERS_URL}/v2/${fairId}/anon_user/employers`;
      }
      const { data: { companies }, errors } = await axios(URL, { headers });

      if (!errors) {
        return companies;
      }

      throw Error(errors.message);
    }
  }
};
