let btnCard = document.querySelectorAll('.card__btn');
let modal = document.querySelector('.popup');
let modalClose = document.querySelector('.btn-close');


btnCard.forEach((item)=>{
    item.addEventListener('click', function(e){
        e.preventDefault;
        modal.classList.add('popup-active');
    })
});
modalClose.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.remove('popup-active');
})