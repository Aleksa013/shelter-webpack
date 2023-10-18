import BtnComp from "../Button/button";

const CardComp= function(elem,name,linkImage){
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <img src=${linkImage} class="card-image" alt=${name}></img>
    <h3 class="card-name">${name}</h3>
    <div class="wrapper-btn" ></div>
     `;
    const petPic= card.querySelector('.card-image');
    const cardBtn = card.querySelector('.wrapper-btn');
   
    BtnComp(cardBtn ,'Learn more', 'card-button', 'card-button-text', '#');
    
    elem.appendChild(card);
    console.log(elem)
};

export default CardComp;