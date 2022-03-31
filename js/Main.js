const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');
showBtn.addEventListener('click',function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
         showBtn.innerHTML = ' <i class="bi bi-list"></i>';
    }else{
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class="bi bi-x"></i>';
    }
});

// lightBox 
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });