// 보여지는 섹션에 해당하는 상단바의 메뉴를 활성화
// ex) skill 섹션이 보여지면 상단 Navbar의 skill 버튼이 활성화
// 두 개의 섹션이 동시에 보여지면 가장 위의 섹션에 해당하는 버튼 활성화

// 하지만 맨 아래로 스크롤했을 때 work 도 보여지지만 가장 아래의 contact의 모든 섹션이 보여진다면
// section 버튼 활성화

const sectionIds = ['#home', '#about', '#skill', '#work', '#contact'];

const sections = sectionIds.map(id => document.querySelector(id));

const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));

const visibleSections = sectionIds.map(()=>false);

let activeNavItem = navItems[0];

const options = {
    rootMargin : '-20% 0px 0px 0px',
    threshold : [0, 0.95],
};

const observer = new IntersectionObserver(observerCallback, options);

sections.forEach(section => observer.observe(section));

function observerCallback(entries){
    let selectLastOne;
    entries.forEach(entry => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting; 
        
        selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.94
    })

    const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections);

    selectNavItem(navIndex);
    
}

function findFirstIntersecting(visibleSections){
    const index = visibleSections.indexOf(true);
    return index >= 0 ? index : 0;
}

function selectNavItem(index){
    const navItem = navItems[index];
    if(!navItem) return;
    
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
}