import BtnComp from "../Button/button";

const CardComp= function(elem,name,linkImage){
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <img src=${linkImage} class="card-image" alt=${name} ></img>
    <h3 class="card-name">${name}</h3>
    <div ></div>
     `;
    const cardBtn = card.querySelector('div');
    console.log(cardBtn);
    BtnComp(cardBtn ,'Learn more', 'card-button', 'card-button-text', '#');
    elem.appendChild(card);

};

export default CardComp;