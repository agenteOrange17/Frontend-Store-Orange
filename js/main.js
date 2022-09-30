document.querySelectorAll('.button-cart').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('loading')) {

        button.classList.add('loading');

        setTimeout(() => button.classList.remove('loading'), 3700);

    }
    e.preventDefault();
}));



//Toggle Menu
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.onclick = () =>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide")
    body.classList.add("disabled");    
    
}
closeBtn.onclick = () =>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide")
    
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}



//Seccion de producto
const ProductImg = document.getElementById("ProductImg");
const SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function()
{
    ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function()
{
    ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function()
{
    ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function()
{
    ProductImg.src = SmallImg[3].src;
}
SmallImg[4].onclick = function()
{
    ProductImg.src = SmallImg[4].src;
}

