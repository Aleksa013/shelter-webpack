import htmlToElements from '../../utils/htmlToElements';
import OurPets from './ourPetsMain.html';
import CardComp from '../Card/card';
import Katty from'../../asset/resourse/images/pets-katrine.png';
import Jen from '../../asset/resourse/images/pets-jennifer.png';
import Woody from '../../asset/resourse/images/pets-woody.png';
import Sofia from '../../asset/resourse/images/pets-sophia.png';
import Timmy from '../../asset/resourse/images/pets-timmy.png';
import Charly from '../../asset/resourse/images/pets-charly.png';
import Scarlet from '../../asset/resourse/images/pets-scarlet.png';
import Freddie from '../../asset/resourse/images/pets-freddie.png';

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