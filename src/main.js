// Header 스크롤 시 투명 -> 다크

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
})

// Home 섹션에서 아래로 스크롤 시 점점 투명해짐

const home  = document.querySelector('.home__container');
const homeHeight = home.offsetHeight

document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
})


// Arrow up  처음에 투명에서 아래로 내리면 생김

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
})

// 모바일 NavBar 토글버튼

const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click' , ()=>{
    navbarMenu.classList.toggle('open');
})

// 모바일 navbar 클릭 시 자동으로 메뉴 닫음

navbarMenu.addEventListener('click' , ()=>{
    navbarMenu.classList.remove('open');
})