const { User } = require("./db/models")

const restoreUser = async (req, res, next) => {
    // Log the session object to the console
    // to assist with debugging.
    console.log(req.session);
  
    if (req.session.auth) {
      const { id } = req.session.auth;
  
      try {
        const user = await User.findByPk(id);
  
        if (user) {
          res.locals.authenticated = true;
          res.locals.user = user;
        //   console.log(res.locals)
          next();
        }
      } catch (err) {
        res.locals.authenticated = false;
        next(err);
      }
    } else {
      res.locals.authenticated = false;
      next();
    }
  };
  
  module.exports= {
      restoreUser
  }