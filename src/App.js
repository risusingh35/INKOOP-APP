import "./styles.css";

export default function App() {
  return (
    <div class="row">
      <div class="col1">
        <div class="toggle-bar">
          <i class="fas fa-bars fa-2x"></i>
          <a class="nav-tog" href="#Loren">
            Lorem
          </a>
          <i class="fas fa-shopping-cart fa-2x"></i>
        </div>
        <div class="nav-left">
          <h1 class="nav-haeading">Lorem, ipsum.</h1>
          <ul>
            <li>
              <a href="#home" class="red-line">
                <span class="inner-text">About</span>
              </a>
            </li>
            <li>
              <a href="#contact">Service</a>
            </li>
            <li>
              <a href="#about">Cuisine</a>
            </li>
            <li>
              <a href="#home">Gallery</a>
            </li>
            <li>
              <a href="#news">Contact</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">Book</a>
            </li>
          </ul>
          <button class="cart-btn">Cart</button>
        </div>
      </div>

      <div class="col2-row1">
        <h1>What are you having for lunch?</h1>
      </div>

      <div class="col2-row2">
        <div class="food-pic">
          <picture class="fpic">
            <img src="./img/burger.jfif" alt="" />
            <p class="ftext">Delicious Burger</p>
          </picture>
          <picture class="fpic">
            <img src="./img/pizza.jfif" alt="" />
            <p class="ftext">Cheez Pizaa</p>
          </picture>

          <picture class="fpic">
            <img src="./img/noodle.jfif" alt="" />
            <p class="ftext">Noodle Butter</p>
          </picture>

          <picture class="fpic">
            <img src="./img/download.jfif" alt="" />
            <p class="ftext">Dry Manchurian</p>
          </picture>
          <picture class="fpic">
            <img src="./img/nachose.jfif" alt="" />
            <p class="ftext">Loaded Nachos</p>
          </picture>
        </div>
      </div>

      <div class="col3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, mollitia
        quisquam similique repellendus quidem.
        <hr />
      </div>
    </div>
  );
}
