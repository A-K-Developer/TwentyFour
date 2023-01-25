let navContainer = document.getElementsByClassName('slideNav')[0];
navContainer.classList.add('hide');
let burgerBtn = document.getElementById('burgerBtn')
let body = document.getElementsByTagName('body')[0]

function openBurgerMenu() {
    burgerBtn.classList.toggle('change');
    if (navContainer.classList.contains('hide')) {
        navContainer.classList.remove('hide');
        navContainer.classList.add('show');

    } else {
        navContainer.classList.add('hide');
        navContainer.classList.remove('show')
    }
}

let curSlide = 0;
const slides = document.querySelectorAll(".slide");
let maxSlide = slides.length - 1;
const nextSlide = document.querySelector(".galleryBtn-next");
nextSlide.addEventListener("click", function () {
    curSlide++;
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });

    nextSlide.addEventListener("click", function () {
        // check if current slide is the last and reset current slide
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });
    const prevSlide = document.querySelector(".galleryBtn-prev");

    // add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });

});
let articleContainer = document.getElementById('articleContainer');
let nameArr= ['Wonderful Copenhagen 2021','Amazing Copenhagen 2022','Incredible Copenhagen 2023','Cool Copenhagen 2024']
let imgArr = ['./assets/images/instagram-feed/instagram-image-1.png','./assets/images/instagram-feed/instagram-image-2.png','./assets/images/instagram-feed/instagram-image-3.png','./assets/images/instagram-feed/instagram-image-4.png','./assets/images/instagram-feed/instagram-image-5.png','./assets/images/instagram-feed/instagram-image-6.png']

let searchContainer = document.getElementById('searchContainer');
let articleCon = document.getElementById('articlesInSearch')
let secondPageArticle = createElement('div',articleContainer,'secondPageArticle','','',['hide'],'','')
let ArticleArr = [];

for(let i = 0; i < 8; i++){
    let container = createElement('div',articleContainer,'','','',['articleContainer'],'','');
    let img = createElement('img',container,'',['src',imgArr[i]],'',['articleImg'],'','');
    let detailsCon = createElement('div',container,'','','','','','')
    createElement('h3',detailsCon,'','','',['h3Tag'],'',nameArr[i]);
    createElement('p',detailsCon,'','','',['greyColor'],'','Piblished 12/07/2021');
    createElement('p',detailsCon,'','','','','','Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos ea, earum repellendus faceread obcaecati omnis! Quisquam quaerat quasi ut ipsum corporis blanditiis, exercitationem minus sapiente dignissimos laborum incidunt!');
    let btn = createElement('div',detailsCon,'','','',['btn','readMore'],'','Read more')
   
   
    
    var cloneArticle= createElement('div',articleCon,'','','',['cloneArticleContainer'],'','')
    createElement('h3',cloneArticle,'','','',['h3Tag'],'',nameArr[i]);
    createElement('p',cloneArticle,'','','',['greyColor'],'','Piblished 12/07/2021');
    createElement('p',cloneArticle,'','','','','','Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos ea, earum repellendus faceread obcaecati omnis! Quisquam quaerat quasi ut ipsum corporis blanditiis, exercitationem minus sapiente dignissimos laborum incidunt!');
    createElement('div',cloneArticle,'','','',['lineinSearchContainer'],'','')
    ArticleArr.push(cloneArticle)
    cloneArticle.addEventListener('click',()=>{
        let imArrSlice = imgArr[i].substring(imgArr[i].length,2)
        let imgslice = img.src.substring(img.src.length, 39)
        console.log(ArticleArr[i]);
        console.log(imgslice);
        console.log('hi');

        if(imArrSlice== imArrSlice){
            console.log(ArticleArr[i]);
            articlePage(body,img,cloneArticle)
        }
        
        
    })
    btn.addEventListener('click',()=>{
        articlePage(body,img,cloneArticle)

    })
}
let readMoreBtns = document.querySelectorAll('.readMore');
readMoreBtns.forEach(x => {
    
})
function articlePage(parent,img,article){
    
    createElement('div',parent,'','','',['grayLayout'],'','')
    img.classList.add('imgInSingleArticle')
    let articleContainer = createElement('div',parent,'singleArticle','','','','','')
    articleContainer.appendChild(img)
    article.classList.add('singleArticle')
    createElement('p',article,'','','','','','Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos ea, earum repellendus faceread obcaecati omnis! Quisquam quaerat quasi ut ipsum corporis blanditiis, exercitationem minus sapiente dignissimos laborum incidunt!');

    articleContainer.appendChild(article)
    
    /*Close button */
    let btnContainer = createElement('div',articleContainer,'btnCont','',['click',closeSingleArticle],'','','');
    createElement('div',btnContainer,'','','',['lineForX','lineForXleft'],'','');
    createElement('div',btnContainer,'','','',['lineForX',],'','');

}

function closeSingleArticle(){
    let singleArticle = document.getElementById('singleArticle');
    let grayLayout = document.querySelector('.grayLayout');

    singleArticle.remove()
    grayLayout.remove()
    
}
for(let k = 8;k < 16;k++){
    let container = createElement('div',secondPageArticle,'','','',['articleContainer'],'','');
    createElement('img',container,'',['src',imgArr[k]],'',['articleImg'],'','');
    createElement('h3',container,'','','',['h3Tag'],'',nameArr[k]);
    createElement('p',container,'','','',['greyColor'],'','Piblished 12/07/2021');
    createElement('p',container,'','','','','','Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos ea, earum repellendus faceread obcaecati omnis! Quisquam quaerat quasi ut ipsum corporis blanditiis, exercitationem minus sapiente dignissimos laborum incidunt!');
    createElement('div',container,'','','',['btn'],'','Read more')
    let cloneArticle= createElement('div',articleCon,'','','',['cloneArticleContainer'],'','')

    createElement('h3',cloneArticle,'','','',['h3Tag'],'',nameArr[k]);
    createElement('p',cloneArticle,'','','',['greyColor'],'','Piblished 12/07/2021');
    createElement('p',cloneArticle,'','','','','','Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos ea, earum repellendus faceread obcaecati omnis! Quisquam quaerat quasi ut ipsum corporis blanditiis, exercitationem minus sapiente dignissimos laborum incidunt!');
    createElement('div',cloneArticle,'','','',['lineinSearchContainer'],'','')
}

let searchBtn = document.getElementById('searchBtn');
let logo = document.getElementById('logoForMobile')
let searchBox = document.getElementById('searchInput');
let searchIconForWEb = document.querySelector('.searchForWeb');
searchIconForWEb.addEventListener('click',() => {
    if(articleCon.style.display == 'none'){
        articleCon.style.display= 'block';
        searchContainer.style.display = 'block'
    }else{
        
        console.log('here');
        burgerBtn.style.zIndex = 12;
        logo.style.zIndex = 12;
        articleCon.style.display= 'none';
        searchBtn.classList.toggle('spinSearch');
        if(window.innerWidth < 800){
            searchContainer.style.display = 'none'
        }
    }
})

searchBox.addEventListener('click', () => {
    articleCon.style.display = 'block';
    
})


searchBtn.addEventListener('click', () => {
    if(searchBtn.classList.contains('spinSearch')){
        burgerBtn.style.zIndex = 12;
        logo.style.zIndex = 12;
        console.log('here');
    }else{
        burgerBtn.style.zIndex = -2;
        logo.style.zIndex = -2;
        searchContainer.style.display='block'
        articleCon.style.display='block'
    }
    searchBtn.classList.toggle('spinSearch');
    searchContainer.classList.toggle('hide')
    
})

function search(){
    let input = document.getElementById('searchInput').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('cloneArticleContainer');
    
    for( i= 0; i < x.length ; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = 'none';
        }else{
            x[i].style.display = 'block';
        }
    }
}
function createElement(type, parent, id, attributeArr,
    eventListenerArr, classArr, action, context,) {

    let container = document.createElement(type);
    let [href, path] = attributeArr;

    if (context !== '') {
        container.textContent = context;
    }
    if (id !== '') {
        container.id = id;
    }
    if (href !== undefined && path !== undefined) {
        container.setAttribute(href, path)
    }
    while (classArr.length > 0 && classArr !== '') {
        container.classList.add(classArr.shift())
    }

    if (eventListenerArr !== '') {
        let event = eventListenerArr.shift();

        while (eventListenerArr.length > 0) {
            container.addEventListener(event, eventListenerArr[0]);
            eventListenerArr.shift();
        }
    }

    if (action == 'push') {
        parent.push(container)
    } else {
        parent.appendChild(container)
    }

    return container
}