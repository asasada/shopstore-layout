let basket = document.getElementById('basket');

document.getElementById('basket-link').onclick = function () {
    basket.style.display = "block";
};

document.getElementById('close-basket').onclick = function () {
    basket.style.display = "none";
};
