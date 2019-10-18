var cartlink = document.querySelector(".buy");

var cartpopup = document.querySelector(".modal-added-cart");

var cartclose = cartpopup.querySelector(".modal-close");

cartlink.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartpopup.classList.add("modal-show");
});

cartclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartpopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (cartpopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartpopup.classList.remove("modal-show");
    }
  }
});
