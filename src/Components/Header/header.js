import htmlToElements from "../../utils/htmlToElements";
import Header from "./header.html";


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
headerPage.parentElement.classList.add('stop');
});
navList.addEventListener('click',() => {
    navList.classList.remove('visible');
    navList.classList.add('hide');
    burger.classList.toggle('turn');
    fog.classList.remove('see');
    headerPage.parentElement.classList.remove('stop');
});

export default headerPage;