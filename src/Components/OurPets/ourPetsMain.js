import htmlToElements from '../../utils/htmlToElements';
import OurPets from './ourPetsMain.html';
import CardComp from '../Card/card';
import Katty from'../../asset/pets-katrine.png';
import Jen from '../../asset/pets-jennifer.png';
import Woody from '../../asset/pets-woody.png';
import Sofia from '../../asset/pets-sofia.png';
import Timmy from '../../asset/pets-timmy.png';
import Charly from '../../asset/pets-charly.png';
import Scarlet from '../../asset/pets-scarlet.png';
import Freddie from '../../asset/pets-freddie.png';

import '../../styles/ourPetsMain.scss';
import '../../styles/card.scss';

const OurPetsMain = htmlToElements(OurPets);
const containerCards =OurPetsMain.querySelector('.our-cards');


CardComp(containerCards,'Katrine',Katty);
CardComp(containerCards,'Jennifer',Jen);
CardComp(containerCards,'Woody',Woody);
CardComp(containerCards,'Sophia',Sofia);
CardComp(containerCards,'Timmy',Timmy);
CardComp(containerCards,'Charly',Charly);
CardComp(containerCards,'Scarlett',Scarlet);
CardComp(containerCards,'Freddie',Freddie);

export default OurPetsMain;