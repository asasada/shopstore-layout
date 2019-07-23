let galleries = document.querySelectorAll('.gallery');


galleries.forEach(function(gallery) {
    let littleImages = gallery.children;
    for (let i = 1; i < littleImages.length; i++) {
        if (littleImages[i].tagName === "IMG") {
            littleImages[i].addEventListener("click", function () {
                this.parentElement.previousElementSibling.src = this.src;
            });
        }
    }
});

function leftScroll(gallery) {

    gallery.style.justifyContent = "flex-start";
}

function rightScroll(gallery) {
    gallery.style.justifyContent = "flex-end";
}

