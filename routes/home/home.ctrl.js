"use strict";

const home = (req, res)=> {
    res.render("home/index");
};

const login = (req,res) =>{
    res.render("home/login");
};

/*
이렇게 하는거는 이크마스크립트 문법이고

funtion home(req, res){
    res.render("home/index");
};

랑 똑같은거임
*/

//hello 와 login을 index.js에서 사용해야하므로 module을 바깥으로 빼주는 작업 추가
module.exports = {
    home,
    login,
};
