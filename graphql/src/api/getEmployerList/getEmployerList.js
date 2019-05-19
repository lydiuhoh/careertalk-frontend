import axios from 'axios';

const GET_EMPLOYERS_URL = process.env.NODE_ENV === 'development' ? `${process.env.INT_API_URL}` : `${process.env.API_URL}`;

export default {
  Query: {
    getEmployerList: async (_, args, { request, isAuthenticated }) => {
      // const { fairId, isUser } = args;
      const URL = 'https://careertalk-integration.herokuapp.com/v2/1/anon_user/employers';

      // if (isUser) {
      //   isAuthenticated(request);
      //   URL = `${GET_EMPLOYERS_URL}/v2/${fairId}/employers`;
      // } else {
      //   URL = `${GET_EMPLOYERS_URL}/v2/${fairId}/anon_user/employers`;
      // }

      const { data: { companies } } = await axios(URL);

      return companies;
    }
  }
};
