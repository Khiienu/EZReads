const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize } = require("./db/models");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const indexRouter = require("./routes/index");
const gamesRouter = require("./routes/games");
const systemsRouter = require("./routes/system");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const profileRouter = require("./routes/profile");
const searchRouter = require("./routes/search");
const {restoreUser} = require("./auth")

const app = express();

// view engine setup
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });


app.use(
  session({
    secret: "superSecret",
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();
app.use(restoreUser)
app.use("/", indexRouter);
app.use("/games", gamesRouter);
app.use("/systems", systemsRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);
app.use("/search", searchRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});



module.exports = app;
