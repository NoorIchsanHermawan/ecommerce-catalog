<template>
  <div>
    <header>
      <a href="/" class="logo">E-Commerce</a>
      <div class="inner-main-nav" id="main-nav">
        <ul>
          <li><router-link to="/Mens">Men</router-link></li>
          <li><router-link to="/Womens">Women</router-link></li>
          <li><router-link to="/Discover">Discover</router-link></li>
          <li><router-link to="/">Flash Sale</router-link></li>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-regular fa-user"></i>
          <i class="fa-solid fa-bag-shopping" id="cart-icon" data-quantity="0"></i>
        </ul>
      </div>
      <div class="bx bx-menu" id="menu-icon" @click="toggleMenu"></div>
    </header>
  </div>
</template>

<script>
import { toggleMenu } from '@/assets/javascript/navbar.js';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  methods: {
    toggleMenu() {
      toggleMenu(); // Gunakan fungsi yang telah diimpor
    },
  },
};
</script>

<style scoped src="@/assets/css/main.css"></style>
