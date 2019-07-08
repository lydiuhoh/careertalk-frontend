import { toast } from 'react-toastify';

import { GET_CACHED_EMPLOYERS } from './sharedQueries';

const notifySuccess = (message) => toast.success(message);

export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem('token'))
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem('token', token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      notifySuccess('🚀 Successfully signed in!');
      return null;
    },
    logUserOut: () => {
      localStorage.removeItem('token');
      notifySuccess('🚀 Successfully signed out!');
      return null;
    }
  },
  Query: {
    /**
     * Get employer list from cache
     */
    getEmployerListCache: (_, variables, { cache }) => {
      try {
        const { fairId, isUser } = variables;
        const result = cache.readQuery({
          query: GET_CACHED_EMPLOYERS,
          variables: {
            fairId,
            isUser
          }
        });

        // TODO: Filter result by filter params
        console.log(result);
        return result;
      } catch (error) {
        console.error(error);
      }

      return null;
    }
  }
};
