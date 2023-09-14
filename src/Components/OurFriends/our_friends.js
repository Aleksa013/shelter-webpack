import htmlToElements from '../../utils/htmlToElements';
import Our from './our_friends.html';
import CardComp from '../Card/card';
import BtnComp from '../Button/button';
import '../../styles/our.scss';
import '../../styles/card.scss';
import Katty from'../../asset/resourse/images/pets-katrine.png';
import Jen from '../../asset/resourse/images/pets-jennifer.png';
import Woody from '../../asset/resourse/images/pets-woody.png';
const OurFriends = htmlToElements(Our);
const cards = OurFriends.querySelector('.our_friends-cards');

const btnOur = OurFriends.querySelector('.our_friends-button');

CardComp(cards,'Katrine', Katty);
CardComp(cards,'Jennifer', Jen);
CardComp(cards,'Woody', Woody);
BtnComp(btnOur, 'Get to know the rest', 'button-primary','button-primary-text','../../ourPets.html');

export default OurFriends;