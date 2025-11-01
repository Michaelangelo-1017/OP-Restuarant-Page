import loadHomePage from './home-page-builder.js';
import loadMenuPage from './menu-page-builder.js';

import "./styles.css";
alert("index.js is working!");
//Variables
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

document.addEventListener("DOMContentLoaded", ()=>{loadHomePage()});
homeBtn.addEventListener("click",()=>{
    document.getElementById("content").innerHTML = '';
    loadHomePage();
})
menuBtn.addEventListener("click",()=>{
    document.getElementById("content").innerHTML = '';
    loadMenuPage();
})
aboutBtn.addEventListener("click",()=>{
    document.getElementById("content").innerHTML = '';
    loadHomePage();
})