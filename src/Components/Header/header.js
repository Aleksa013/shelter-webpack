import htmlToElements from "../../utils/htmlToElements";
import Header from "./header.html";
import "../../styles/header_main.scss";
const headerPage = htmlToElements(Header);
console.log(headerPage);

export default headerPage;