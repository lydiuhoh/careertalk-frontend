import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload, done) => {
  try {
    return done(null, payload.userId);
  } catch (error) {
    return done(error, false);
  }
};

export const isAuthenticated = request => {
  if (!request.userId) {
    throw Error('You need to login to perform this action');
  }
};

/**
 * Custom Callback
 * Reference: http://www.passportjs.org/docs/authenticate/
 */
export const authenticateJwt = (req, res, next) => passport.authenticate('jwt', { sessions: false }, (error, userId) => {
  if (userId) {
    req.userId = userId;
  }
  next();
})(req, res, next);

passport.use(new Strategy(JwtOptions, verifyUser));
passport.initialize();
