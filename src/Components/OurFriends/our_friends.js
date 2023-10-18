import htmlToElements from '../../utils/htmlToElements';
import Our from './our_friends.html';
import CardComp from '../Card/card';
import BtnComp from '../Button/button';
import createSet from '../../js/carousel';
import pets from '../../pets.json';
import '../../styles/our.scss';
import '../../styles/card.scss';


const OurFriends = htmlToElements(Our);
const cardsBlock = OurFriends.querySelector('.our_friends-cards');
const nextBtn = OurFriends.querySelector('.our_friends-button_next'),
      prevBtn = OurFriends.querySelector('.our_friends-button_pre');
const btnOur = OurFriends.querySelector('.our_friends-button');

const setNow =[];

createSet(setNow, pets);
document.addEventListener('DOMContentLoaded', () =>{
   setNow.map(item =>{
    CardComp(cardsBlock, pets[item]['name'], pets[item]['img']);
   })
  
});















BtnComp(btnOur, 'Get to know the rest', 'button-primary','button-primary-text','../../ourPets.html');



export default OurFriends;