"use strict";

const app = require("../app");

const PORT = 3000;

//listen 명령어로 서버 띄우기
// 3000번 포트로 열어달라, 콜백함수 넘기기 () =>{} arrow function 사용)
app.listen(PORT,() => {
    console.log("서버 가동!");
} );