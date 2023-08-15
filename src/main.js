import './styles/style.scss';
import './styles/header_main.scss';

import NotOnlyComponent from './Components/Not_only_people/not_only';
import AboutComponent from './Components/About/about';
import OurFriends from './Components/OurFriends/our_friends';
import HelpOur from './Components/Help/help';
import DonationEl from './Components/Donation/donation';

const container = document.querySelector('.container');

container.appendChild(NotOnlyComponent);
container.appendChild(AboutComponent);
container.appendChild(OurFriends);
container.appendChild(HelpOur);
container.appendChild(DonationEl);
console.log(NotOnlyComponent);
