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


class User{
 constructor(name, age){
 this.name = name;
 this._age = age;
 }


 #surname = "Ilchenko"
 say = ()=> {
   console.log(`Users name is ${this.name}  ${this.#surname}  and users age ${this.age}`);
 }

 get age(){
   return this._age;
 }

 set age(num) {
   num > 0 && num < 110 && typeof(num) == 'number'?
    this._age = num :
    console.log('Wrong data');

 }
}
const semen = new User('Semen', 9);
semen.age = 12;
console.log(semen.age);
semen.say();











BtnComp(btnOur, 'Get to know the rest', 'button-primary','button-primary-text','../../ourPets.html');



export default OurFriends;