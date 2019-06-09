import { toast } from 'react-toastify';

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
  }
};
