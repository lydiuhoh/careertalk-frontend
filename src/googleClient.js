export const getGoogleClientId = () => {
  let googleClientId = null;
  if (process.env.NODE_ENV === 'production') {
    googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  } else {
    const AppConfig = require('./config.json');
    googleClientId = AppConfig.GOOGLE_CLIENT_ID;
  }
  return googleClientId;
};
