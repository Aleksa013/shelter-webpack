import htmlToElements from '../../utils/htmlToElements';
import Our from './our_friends.html';
import CardComp from '../Card/card';
import BtnComp from '../Button/button';
import createSet from '../../js/carousel';
import pets from '../../pets.json';
import '../../styles/our.scss';
import '../../styles/card.scss';

import Katty from "../../asset/resourse/images/pets-katrine.png";
import Jen from '../../asset/resourse/images/pets-jennifer.png';
import Woody from '../../asset/resourse/images/pets-woody.png';
const OurFriends = htmlToElements(Our);
const cards = OurFriends.querySelector('.our_friends-cards');

const btnOur = OurFriends.querySelector('.our_friends-button');
const setNow = [];
createSet(setNow);
console.log(setNow);
const createCards = (set) =>{
set.forEach((item)=>{
CardComp(cards, pets[item].name, pets[item].img);
}
);
}

createCards(setNow);


BtnComp(btnOur, 'Get to know the rest', 'button-primary','button-primary-text','../../ourPets.html');



export default OurFriends;