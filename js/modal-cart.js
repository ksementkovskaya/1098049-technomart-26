var cartlink=document.querySelector(".buy"),cartpopup=document.querySelector(".modal-added-cart"),cartclose=cartpopup.querySelector(".modal-close");cartlink.addEventListener("click",function(e){e.preventDefault(),cartpopup.classList.add("modal-show")}),cartclose.addEventListener("click",function(e){e.preventDefault(),cartpopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&cartpopup.classList.contains("modal-show")&&(e.preventDefault(),cartpopup.classList.remove("modal-show"))});