


const BtnComp= function(elem, text, classBtn, classText, link){
    const but = document.createElement('div');
    but.classList.add('button',classBtn);
    but.innerHTML=`
    <span class= ${classText}>
    <a href=${link} class= "btn-link">${text} 
    </a>
    </span>
    `;
    elem.appendChild(but);

};

export default BtnComp;