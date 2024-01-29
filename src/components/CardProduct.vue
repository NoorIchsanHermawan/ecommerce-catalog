<!-- CardProduct.vue -->
<template>
    <div class="card">
      <img :src="product.image" class="card-img-top" alt="Product Image">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text"><strong>${{ product.price }}</strong></p>
        <p class="card-text">Category: {{ product.category }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
   .card {
    max-width: 100%;
    height: auto;
    margin: 0 auto 50px;
    transition: transform 0.3s ease-in-out;
   }
   .card:hover {
    transform: scale(1.05);
   }

   .card-img-top {
      max-width: 25%;
      height: auto;
    }

    .card-body {
  padding: 15px;
    }
    .card-title {
      font-size: 1.2em;
      margin-bottom: 10px;
    }
    .card-text {
      font-size: 1em;
      margin-bottom: 5px;
    }
    strong {
      color: #e44d26;
}
  </style>
  