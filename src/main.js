import './styles/style.scss';
import './styles/header.scss';
import './styles/header_main.scss';

import headerPage from './Components/Header/header';
import NotOnlyComponent from './Components/Not_only_people/not_only';
import AboutComponent from './Components/About/about';
import OurFriends from './Components/OurFriends/our_friends';
import HelpOur from './Components/Help/help';
import DonationEl from './Components/Donation/donation';
import Footer from './Components/Footer/footer';

const container = document.querySelector('.container');

// container.appendChild(headerPage);
container.appendChild(NotOnlyComponent);
container.appendChild(AboutComponent);
container.appendChild(OurFriends);
container.appendChild(HelpOur);
container.appendChild(DonationEl);
container.appendChild(Footer);


export default container;
