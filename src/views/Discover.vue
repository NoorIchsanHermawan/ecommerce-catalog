<!-- eslint-disable vue/multi-word-component-names -->
<!-- Discover.vue -->
<template>
  <div>
    <Navbar />
  </div>
  <transition-group name="fade" mode="out-in">
    <div :key="loading" v-if="loading" class="loading-spinner">
      <div class="loading-text">Loading...</div>
    </div>
    <div v-else class="card-container">
      <CardProduct v-for="product in products" :key="product.id" :product="product" @click="goToProductDetail(product.id)" />
    </div>
  </transition-group>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import CardProduct from '@/components/CardProduct.vue';
import axios from 'axios';

export default {
  components: {
    Navbar,
    CardProduct
  },
  data() {
    return {
      products: [],
      loading: true 
    };
  },
  methods: {
    goToProductDetail(productId) {
      this.$router.push(`/product/${productId}`);
    }
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.products = response.data.map(product => ({
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          description: product.description,
          image: product.image
        }));
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.loading = false;
      });
  }
};
</script>

<style scoped>
.card-container {
  cursor: pointer;
  padding-top: 120px;
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; 
}

.loading-text {
  font-size: 30px;
  opacity: 0;
  animation: fadeIn 1s ease-out infinite alternate;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>


