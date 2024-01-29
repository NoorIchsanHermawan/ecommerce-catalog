<template>
    <section class="hero" id="home">
      <main class="content">
        <h1>You can Do Anything in a Dress</h1>
        <p>Best Outfit & Accesoris, We’ve got five years of Doing Things to prove it.</p>
        <router-link to="/Discover" class="cta1">Shopping</router-link>
      </main>
    </section>
  
    <section id="selection" class="genre">
      <div class="wrapper">
        <router-link to="/Womens" class="img-hover-zoom">
          <img src="../assets/images/cewe.jpg" alt="Men's Clothing">
          <div class="overlay-text">WOMEN</div>
        </router-link>
        <router-link to="Mens" class="img-hover-zoom2">
          <img src="../assets/images/cowo.jpg" alt="Women's Clothing">
          <div class="overlay-text">MEN</div>
        </router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Hero'
  }
  </script>
  
  <style scoped src="@/assets/css/main.css"></style>
  