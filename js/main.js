// NAVIGATION MENU
const listItems = document.querySelectorAll('.header__menu-item a');

function selectListItem(e) {
    unselectItem();
    this.classList.add('selected__page');
}

function unselectItem() {
    listItems.forEach(item => item.classList.remove('selected__page'));
}
listItems.forEach(item => item.addEventListener('click', selectListItem));
// NAVIGATION MENU END

// ASIDE NAVIGATION
const asideListItems = document.querySelectorAll('.list__items-item');

function aideSelectListItem(e) {
    aideUnselectItem();
    this.classList.add('item__selected');
}

function aideUnselectItem() {
    asideListItems.forEach(item => item.classList.remove('item__selected'));
}
asideListItems.forEach(item => item.addEventListener('click', aideSelectListItem));
// ASIDE NAVIGATION END


// hamburger
const hamburger = document.querySelector('.header__humbergermenu');
const menu = document.querySelector('.header__menu');
const close_ham = document.querySelector('.close__ham');
const menu_items = document.querySelectorAll('.header__menu-item');
const body = document.querySelector('body');

hamburger.addEventListener('click',()=> {
    menu.classList.toggle("header__menu-open");
    body.classList.toggle("noscroll");
});

close_ham.addEventListener('click',()=> {
    menu.classList.remove("header__menu-open");
    body.classList.remove("noscroll");
});


// search bar manipulation : max-width 767px
const search__icon = document.querySelector('.search__icon');
const header__top_search = document.querySelector('.header__top-search');
const header__search = document.querySelector('.header__search');
const search__close = document.querySelector('.search__close');
search__icon.addEventListener('click',()=> {
    header__top_search.classList.toggle("show_search-bar");
    header__search.classList.toggle("hide_search-icon");
});
search__close.addEventListener('click',()=> {
    header__top_search.classList.remove("show_search-bar");
    header__search.classList.remove("hide_search-icon");
});