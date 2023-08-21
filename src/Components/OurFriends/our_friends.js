import htmlToElements from '../../utils/htmlToElements';
import Our from './our_friends.html';
import CardComp from '../Card/card';
import BtnComp from '../Button/button';
import '../../styles/our.scss';
import '../../styles/card.scss';
import Katty from'../../asset/pets-katrine.png';
import Jen from '../../asset/pets-jennifer.png';
import Woody from '../../asset/pets-woody.png';
const OurFriends = htmlToElements(Our);
const cards = OurFriends.querySelector('.our-cards');

const btnOur = OurFriends.querySelector('.our-button');

CardComp(cards,'Katrine', Katty);
CardComp(cards,'Jennifer', Jen);
CardComp(cards,'Woody', Woody);
BtnComp(btnOur, 'Get to know the rest', 'button-primary','button-primary-text','#');

export default OurFriends;