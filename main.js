const tabItems= document.querySelectorAll('tab-items');
const tabContentItems= document.querySelectorAll('tab-content-item');

//select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab contents
  const tabContentItems= document.querySelector('#$(this.id)-content');
  //add showclass
  tabContentItems.classList.add('show');
}
 function removeBorder(){
     tabItems.forEach(item => item.classList.remove('tab-border'))
 }

 function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}
//listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));