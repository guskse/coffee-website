let navbar = document.querySelector(".navbar");
let cartItem = document.querySelector(".cart-items-container");
let searchForm = document.querySelector(".search-form");


//Menu Hamburguer Functionality
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

//Cart Button Functionality
document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

//Search Bar Functionality
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  cartItem.classList.remove("active");
  navbar.classList.remove("active");
};
