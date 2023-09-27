import htmlToElements from '../../utils/htmlToElements';
import Our from './our_friends.html';
import CardComp from '../Card/card';
import BtnComp from '../Button/button';
import {createSet, createSetPast, createSetNext} from '../../js/carousel';
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
const setNext= createSetNext(setNow, pets);
const setPast= createSetPast(setNow, pets);

const createCards = (set) =>{
cardsBlock.innerHTML='';
set.forEach((item)=>{
   
CardComp(cardsBlock, pets[item].name, pets[item].img);
}
);
}



OurFriends.addEventListener('load',createCards(setNow));

OurFriends.addEventListener('click', (e)=>{
    
    const cards = document.querySelectorAll('.card');

    if (e.target.classList.contains('our_friends-button_next')){
    console.log(cards);
    setNow.splice(0,3, ...setNext)
    createCards(setNow);
    createSetNext(setNow, pets);
     console.log(setNow);
   
   }else if(e.target.classList.contains('our_friends-button_pre')){
    console.log(`setNow ${setNow}`);
    setNow.splice(0,3, ...setPast);
    createCards(setNow);
    createSetPast(setNow, pets);
     console.log(setNow);
   
   }
});




// nextBtn.addEventListener('click',()=>{
//    const setNext= createSetNext(setNow, pets);
//    const cards = document.querySelectorAll('.card');
//    console.log(cards);
//    setNow.splice(0,3, ...setNext)
//     updateCards(setNow);
//     console.log(setNow);
  
// });
// prevBtn.addEventListener('click',()=>{
//    const setPast= createSetPast(setNow, pets);
//    const cards = document.querySelectorAll('.card');
//     console.log(`setNow ${setNow}`);
//    setNow.splice(0,3, ...setPast)
//     console.log(setNow);
   
//     updateCards(setNow);
// })

// OurFriends.addEventListener('click', (e)=>{
//  const target = e.target;

// if(target.classList.contains('our_friends-button_next')){
//     setNow.forEach((item, index)=>{
//         item = setNext[index];
//     })
//     updateCards(setNow);
// }else if(target.classList.contains('our_friends-button_prev')){
//     console.log(setNow);
//     setNow.forEach((item, index)=>{
//         item = setPrev[index];
//     })
//     console.log(setNow);
//     updateCards(setNow);
// }
// });



BtnComp(btnOur, 'Get to know the rest', 'button-primary','button-primary-text','../../ourPets.html');



export default OurFriends;