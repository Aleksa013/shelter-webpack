import htmlToElements from "../../utils/htmlToElements";
import Header from "./header.html";

const headerPage = htmlToElements(Header);
const burger = headerPage.querySelector('.nav-burger'),
      navList= headerPage.querySelector('.nav-list');


burger.addEventListener('click',()=>{
navList.classList.toggle('visible');
navList.classList.toggle('hide');
burger.classList.toggle('turn');
});
console.log(burger);
export default headerPage;