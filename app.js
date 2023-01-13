const bars = document.querySelector('.bars');
const resNav = document.querySelector('.resNav');
const resNavClose = document.querySelector('.resNav-close')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const bgModal = document.querySelector('.bg-modal')
const modal = document.querySelector('.modal')

bars.addEventListener('click', ()=>{
    resNav.classList.toggle('showNav');
})

resNavClose.addEventListener('click', ()=>{
    resNav.classList.remove('showNav');
})

open.addEventListener('click', function(){
    bgModal.style.cssText =`
    display: block;
    `
    modal.classList.add('showModal')
    
})

close.addEventListener('click', function(){
    bgModal.style.cssText =`
    display: none;
    `
    modal.classList.remove('showModal')
   
})