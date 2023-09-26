import htmlToElements from '../../utils/htmlToElements';
import Our from './our_friends.html';
import CardComp from '../Card/card';
import BtnComp from '../Button/button';
import {createSet, createAnotherSet} from '../../js/carousel';
import pets from '../../pets.json';
import '../../styles/our.scss';
import '../../styles/card.scss';


const OurFriends = htmlToElements(Our);
const cards = OurFriends.querySelector('.our_friends-cards');
const nextBtn = OurFriends.querySelector('.our_friends-button_next'),
    prevBtn = OurFriends.querySelector('.our_friends-button_pre');
const btnOur = OurFriends.querySelector('.our_friends-button');
const setNow =[],
      setNext =[],
      setPast=[];
createSet(setNow, pets);
createAnotherSet(setNext, setNow, pets);
createAnotherSet(setPast, setNow, pets);
console.log(setNow);
const createCards = (set) =>{
set.forEach((item)=>{
CardComp(cards, pets[item].name, pets[item].img);
}
);
}
document.addEventListener('load',createCards(setNow));
nextBtn.addEventListener('click', createCards(setNext));
prevBtn.addEventListener('click', createCards(setPast));



BtnComp(btnOur, 'Get to know the rest', 'button-primary','button-primary-text','../../ourPets.html');



export default OurFriends;