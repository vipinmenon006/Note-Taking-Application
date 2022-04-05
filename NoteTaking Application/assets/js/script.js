let container3 = document.querySelector('.container-3');
let container2= document.querySelector('.container-2');
let addBtn = document.querySelector('#add-btn');
let closeBtn = document.querySelector('#close-btn');
let i = 0 ;

closeBtn.addEventListener('click',()=>{
    typeNote();
})
addBtn.addEventListener('click',()=>{
    createNote();
})

function typeNote(){
    if(container3.style.display=="none"){
        container3.style.display="block"
    }
    else{
        container3.style.display="none"
    }
}

function createNote(){
    let node=document.querySelector('#note');
    nodeTxt=node.value;
    let divEle=document.createElement('div');
    let pEle=document.createElement('p');
    divEle.classList.add('box')
    pEle.innerHTML=nodeTxt;

    pEle.setAttribute("style", "background: rgb(179, 179, 179); height: 277px; width: 260px; box-sizing: border-box; padding: 40px 25px 25px 25px; border: none; border-radius: 10px; box-sizing: 0 0 7px rgba(0, 0, 0, 0.15");
    divEle.appendChild(pEle);
    container2.appendChild(divEle);
    node.value='';
    console.log(divEle);
    divEle.addEventListener('mouseenter',()=>{
        divEle.style.transform='scale(1.1)'
    });
    divEle.addEventListener('mouseleave',()=>{
        divEle.style.transform='scale(1)'
    });
    divEle.addEventListener('dblclick',()=>{
        divEle.remove();
    });
    
    
}
