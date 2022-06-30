var header = document.getElementById('header');
var navHeader = document.getElementById('navHeader');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar(){
  showSidebar = !showSidebar;
  if(showSidebar){
    navHeader.style.marginLeft = '-10vw';
    navHeader.style.animationName = 'showSidebar';
    content.style.filter = 'blur(2px)';
  }
  else {
    navHeader.style.marginLeft = '-100vw';
    navHeader.style.animationName = '';
    content.style.filter = '';
  }
}

function closeSidebar(){
  if(showSidebar){
    toggleSidebar();
  }
}

window.addEventListener('resize', function(event){
  if(window.innerWidth > 760 && showSidebar){
    toggleSidebar();
  }
})
