import './styles/style.scss';
import './styles/header.scss';
import './styles/header_ourPets.scss';

import headerPage from './Components/Header/header';
import OurPetsMain from './Components/OurPets/ourPetsMain';
import Footer from './Components/Footer/footer';

const container = document.querySelector('.container');

container.appendChild(headerPage);
container.appendChild(OurPetsMain);
container.appendChild(Footer);

export default containerPage;