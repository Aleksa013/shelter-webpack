import htmlToElements from '../../utils/htmlToElements';
import Our from './our_friends.html';
import CardComp from '../Card/card';
import BtnComp from '../Button/button';
import '../../styles/our.scss';
import '../../styles/card.scss';
import Katty from'../../asset/pets-katrine.png';
import Jen from '../../asset/pets-jennifer.png';
import Woody from '../../asset/pets-woody.png';
import Arrow from '../../asset/Arrow.png';
const OurFriends = htmlToElements(Our);
const cards = OurFriends.querySelector('.our-cards');
const btnPre = OurFriends.querySelector('.our-button_pre');
const btnNext = OurFriends.querySelector('.our-button_next');
const btnOur = OurFriends.querySelector('.our-button');
BtnComp(btnPre, Arrow, 'our-pre-button', 'arrow-pre', "#");
CardComp(cards,'Katarine', Katty);
CardComp(cards,'Jennifer', Jen);
CardComp(cards,'Woody', Woody);


export default OurFriends;