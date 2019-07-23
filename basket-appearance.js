let basket = document.getElementById('basket');

document.getElementById('basket-link').onclick = function () {
    //basket.style.display = "block";
    basket.style.right = "0";
};

document.getElementById('close-basket').onclick = function () {
    //basket.style.display = "none";
    basket.style.right = "-340px";
};
