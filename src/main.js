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