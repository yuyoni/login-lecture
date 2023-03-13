// 서버의 중심 파일! 

//require 명령어로 express 모듈 설치하기
"use strict";

/* 모듈 */
const express = require("express");
//app이라는 변수에 express 실행
const app = express();

const PORT = 3000;

/* 라우팅 */
const home = require("./routes/home")

/* 앱세팅 */
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use는 미들웨어를 등록해주는 메서드

///www.js에서 쓰기위해 app 내보내주기
module.exports = app;