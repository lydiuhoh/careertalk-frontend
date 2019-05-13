import axios from 'axios';

const GET_FAIRS_URL = process.env.NODE_ENV === 'development'
  ? `${process.env.INT_API_URL}/v2/careerfairs`
  : `${process.env.API_URL}/v2/careerfairs`;

export default {
  Query: {
    getFair: async () => {
      const { data: { fairs } } = await axios(GET_FAIRS_URL);

      return fairs;
    }
  }
};
