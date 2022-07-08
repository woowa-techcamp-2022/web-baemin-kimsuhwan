const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const a1db = require("a1-database");
const wrap = require("./public/src/wrapper");
const path = require("path");

//set, use...
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret: "asdfasffdas",
    name: "session-baemin",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 5,
    },
  })
);

app.get("/", (req, res) => {
  if (req.session && req.session.email !== undefined) {
    res.render("Mainpage", { message: `반갑습니다.${req.session.email}님` });
  } else {
    res.render("Mainpage", { message: "로그인해주세요." });
  }
});

app.get("/login", (req, res) => {
  if (req.session.isloggined) {
    res.redirect("/");
  } else {
    res.render("Loginpage");
  }
});

app.get("/signup", (req, res) => {
  res.render("Signuppage");
});

app.get("/signup_phone", (req, res) => {
  res.render("Signuppage_phone");
});

app.get("/signup_email", (req, res) => {
  res.render("Signuppage_email");
});
app.post(
  "/login",
  wrap(async (req, res, next) => {
    const email = req.body.email;
    const db = await a1db.get("db/user.db");
    //DB의 email에 따른 pw가 존재하는지 && pw가 일치하는지 확인.

    if (await db.exists((user) => user.email === email)) {
      //로그인 성공. 현재 정보를 session에 저장하여 로그인 유지
      req.session.email = email;
      req.session.isloggined = true;
      req.session.save(function () {
        res.redirect("/");
      });
    } else {
      //로그인 실패. 없는 회원정보이기에 fail을 보내줌.
      res.redirect("/login");
    }
  })
);

app.post(
  "/signup",
  wrap(async (req, res, next) => {
    const { id, pw } = req.body;
    const db = await a1db.get("db/user.db");
    await db.save({ email: id, pw: pw });
    res.redirect("/");
  })
);

module.exports = app;
