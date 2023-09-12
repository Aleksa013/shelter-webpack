import htmlToElements from "../../utils/htmlToElements";
import Header from "./header.html";
// import container from "../../main";
// import containerPage from "../../ourPets";

const headerPage = htmlToElements(Header);
const burger = headerPage.querySelector('.nav-burger'),
      navBlock = headerPage.querySelector('.nav'),
      navList= headerPage.querySelector('.nav-list'),
      fog= headerPage.querySelector('.fog');


burger.addEventListener('click',()=>{
navList.classList.toggle('visible');
navList.classList.toggle('hide');
burger.classList.toggle('turn');
fog.classList.add('see');
// container.classList.add('stop');
});
navList.addEventListener('click',()=>{
navList.classList.remove('visible');
navList.classList.add('hide');
burger.classList.toggle('turn');
fog.classList.remove('see');
// container.classList.remove('stop');
});
console.log(burger);
export default headerPage;