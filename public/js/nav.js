const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
        <img src="img/HanadiLogo.svg" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search product, category">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="img/user.png" alt=""></a>
            <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="link-container">
        <li class="link-items"><a href="#" class="link">home</a></li>
        <li class="link-items"><a href="#" class="link">clothing</a></li>
        <li class="link-items"><a href="#" class="link">shoes</a></li>
        <li class="link-items"><a href="#" class="link">beauty</a></li>
        <li class="link-items"><a href="#" class="link">accessories</a></li>
    </ul>
    `;
}

createNav();
