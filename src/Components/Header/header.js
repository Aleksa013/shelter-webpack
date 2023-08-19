import htmlToElements from "../../utils/htmlToElements";
import Header from "./header.html";

const headerPage = htmlToElements(Header);
console.log(headerPage);

export default headerPage;