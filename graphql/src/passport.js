import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload, done) => {
  try {
    // console.log(payload); --> { googleId: '110219544438653200265', iat: 1556337009 }
    // TODO: get user from database by payload.id
    return done(null, payload); // for testing just attach payload
  } catch (error) {
    return done(error, false);
  }
};

export const isAuthenticated = request => {
  if (!request.user) {
    throw Error('You need to login to perform this action');
  }
};

/**
 * Custom Callback
 * Reference: http://www.passportjs.org/docs/authenticate/
 */
export const authenticateJwt = (req, res, next) => passport.authenticate('jwt', { sessions: false }, (error, user) => {
  if (user) {
    req.user = user;
  }
  next();
})(req, res, next);

passport.use(new Strategy(JwtOptions, verifyUser));
passport.initialize();
