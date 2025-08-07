let items = document.querySelectorAll('.slider .list .item');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let productTab = document.querySelectorAll('.product-tab .slider')
let nxt = document.querySelectorAll('.product-tab .next');
let prv = document.querySelectorAll('.product-tab .prev')

let countItem = items.length;
let itemActive = 0;

productTab.forEach((item, i) => {
  let productContainer = item.getBoundingClientRect();
  let productContainerWidth = productContainer.width;
})
next.onclick = function(){
  itemActive = itemActive + 1;
  if (itemActive => countItem){
    itemActive = 0;
  }
  showSlider();
};
function showSlider(){
  let itemACtiveOld =  items['.active'];
  itemACtiveOld.classList.remove('active');
}
function showSidebar(){
  let sideBar = document.querySelector('.header .header-2 .logo .menu-list');
  sideBar.style.visibility = 'visible'
}
function hideSidebar(){
  let hideSidebar = document.querySelector('.header .header-2 .logo .menu-list');
  hideSidebar.style.visibility = 'hidden';
}
function showList(){
  let showList = document.querySelector('.header .header-2 .search ul');
  showList.style.visibility = 'visible';
}
function body(){
  let hideList = document.querySelector('.header .header-2 .search ul');
  hideList.style.visibility = 'hidden';
}