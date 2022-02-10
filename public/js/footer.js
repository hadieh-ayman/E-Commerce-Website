const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <div class="footer-logo-container">
      <img class="logo" src="img/HanadiLogo.svg" alt="" />
      <p class="footer-title">About Us</p>
      <p class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        suscipit mollitia velit animi distinctio rerum reiciendis,
        voluptatum molestiae possimus aspernatur sunt magni sequi doloremque
        adipisci accusamus excepturi voluptatibus tempore numquam quia.
        Laudantium, tempore beatae! Veritatis, iure praesentium. Aliquid,
        labore repellendus.
      </p>
    </div>
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">Clothing</li>
        <li><a href="#" class="footer-links">Outerwear</a></li>
        <li><a href="#" class="footer-links">Blouses</a></li>
        <li><a href="#" class="footer-links">Sweatshirts</a></li>
        <li><a href="#" class="footer-links">Dresses</a></li>
        <li><a href="#" class="footer-links">Jeans</a></li>
        <li><a href="#" class="footer-links">Pants</a></li>
        <li><a href="#" class="footer-links">Skirts</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">Accessories</li>
        <li><a href="#" class="footer-links">Hats</a></li>
        <li><a href="#" class="footer-links">Jewelry</a></li>
        <li><a href="#" class="footer-links">Hair Accessories</a></li>
        <li><a href="#" class="footer-links">Belts</a></li>
        <li><a href="#" class="footer-links">socks</a></li>
        <li><a href="#" class="footer-links">scarves</a></li>
        <li><a href="#" class="footer-links">glasses</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">Misc</li>
        <li><a href="#" class="footer-links">Shoes</a></li>
        <li><a href="#" class="footer-links">Bags</a></li>
        <li><a href="#" class="footer-links">Makeup</a></li>
        <li><a href="#" class="footer-links">nails</a></li>
      </ul>
    </div>
  </div>
  <p class="contact">Email: hanadihelp@Hanadi.com</p>
  <p class="contact">Tel: +974 7742 9274</p>
  <p class="contact">Fax: +974 86 34 972 986</p>
  <div class="social-container">
    <div>
      <a href="#" class="social-link">terms of use</a>
      <a href="#" class="social-link">Privacy Policy</a>
      <a href="#" class="social-link">FAQ</a>
    </div>
    <div>
      <a href="#" class="social-link">instagram</a>
      <a href="#" class="social-link">facebook</a>
      <a href="#" class="social-link">twitter</a>
    </div>
  </div>
  <p class="footer-credit">ⓒ 2022. HANADI ALL rights reserved.</p>
    `;
}

createFooter();