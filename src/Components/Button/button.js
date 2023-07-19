
const but = document.createElement('div');


const BtnComp= function(elem, text, classBtn, classText, link){
    but.classList.add('button',classBtn);
    but.innerHTML=`
    <span class= ${classText}>
    <a href=${link} class= "btn-link">${text} 
    </a>
    </span>
    `;
    elem.append(but);

};

export default BtnComp;