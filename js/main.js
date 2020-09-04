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