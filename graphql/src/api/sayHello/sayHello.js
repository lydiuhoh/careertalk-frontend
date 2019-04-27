export default {
  Query: {
    sayHello: (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      return 'Hello';
    }
  }
};
