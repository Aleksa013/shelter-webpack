import htmlToElements from "../../utils/htmlToElements";
import NotOnly from './not_only.html';
import headerPage from "../Header/header";
import BtnComp from "../Button/button";
import '../../styles/style.scss';
import '../../styles/header_main.scss';
import '../../styles/not_only.scss';
import Puppy from '../../asset/start-screen-puppy.png';
import BackgroungOnly from '../../asset/start-screen-gradient-background.jpg';


const NotOnlyComponent = htmlToElements(NotOnly);
const notOnlyBtn= NotOnlyComponent.querySelector('.btn-cont');
// const imagePuppy = NotOnlyComponent.querySelector('.not-only-puppy');
const headerMain = NotOnlyComponent.querySelector('header');
headerMain.append(headerPage);

// console.log(notOnlyBtn);
BtnComp(notOnlyBtn,'Make a friend','button-primary','button-primary-text','#ourFriends');

export default NotOnlyComponent;

