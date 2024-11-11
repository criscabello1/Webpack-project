import "./styles.css";
import { loadHomePage } from "./loadHomePage";
import { loadMenuPage } from "./loadMenuPage";
const homeBtn = document.querySelector('.home_btn')
const menuBtn = document.querySelector('.menu_btn')
const contactBtn = document.querySelector('.contact_btn')

loadHomePage();
homeBtn.addEventListener('click', loadHomePage) 
menuBtn.addEventListener('click', loadMenuPage) 