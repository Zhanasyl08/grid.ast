<template>
  <div class="page">
    <div class="_container">
      <div class="main">
        <div class="filters">
          <button class="filters__btn">
            <span class="show">Show</span
            ><span class="hide"></span>&nbsp;Filters
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="black"
            >
              <path
                d="M3 8L21 8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 17H21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 5L17 11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 14L8 20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700"
        rel="stylesheet"
      />

      <div class="hero-section">
        <div class="card-grid">
          <router-link class="card">
            <div class="card__background card__background_imgfirst"></div>

            <div class="card__content">
              <p class="card__category">Интерьер</p>
              <h3 class="card__heading">Минималистичный дизайн</h3>
            </div>
          </router-link>
          <router-link class="card">
            <div class="card__background card__background_imgsecond"></div>

            <div class="card__content">
              <p class="card__category">Распродажи</p>
              <h3 class="card__heading">До 50% скидки акции</h3>
            </div>
          </router-link>
          <router-link class="card">
            <div class="card__background card__background_imgthird"></div>

            <div class="card__content">
              <p class="card__category">Материалы</p>
              <h3 class="card__heading">Хлопок Полиэстер Кулирка</h3>
            </div>
          </router-link>
          <router-link class="card">
            <div class="card__background card__background_imgfour"></div>

            <div class="card__content">
              <p class="card__category">Ассортимент</p>
              <h3 class="card__heading">Нефор Вип Абу</h3>
            </div>
          </router-link>
          <div></div>
        </div>
      </div>

      <div class="catalog">
        <div class="catalog_blocks">
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
          <div class="catalog_block">
            <img src="./assets/img/whiteshirt.jpeg" alt="" />
            <h3>Футболка</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
