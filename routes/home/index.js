"use strict";

//앱설정
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

//get방식으로 경로지정해주기 , "/" - 경로 ,브라우저에게 요청받은 값 파라미터,  () => {} 콜백함수 지정
router.get("/", ctrl.home)
//login 경로도 만들어주기
router.get("/login", ctrl.login)

module.exports = router;