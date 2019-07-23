let galleries = document.querySelectorAll('.gallery');


galleries.forEach(function(gallery) {
    let littleImages = gallery.children;
    for (let i = 1; i < littleImages.length; i++) {
        //finding a main image
        littleImages[i].addEventListener( "click" , function() {
            this.parentElement.previousElementSibling.src = this.src;
        });
    }
});