<template>
  <div>
    <Navbar />
    <div
      v-if="loadingDetail"
      class="container"
      style="height: 70vh; display: flex; align-items: center; justify-content: center;"
    >
      <div class="skeleton-loader" style="width: 80%; height: 600px; border-radius: 8px;"></div>
    </div>
    <div v-else>
      <div
        :style="{
          'background': product.category === 'men\'s clothing' ? 'linear-gradient(#D6E6FF, #D6E6FF) 0% 0% / 100% 50%, white 0% 50% / 100% 50%' :
                        (product.category === 'women\'s clothing' ? 'linear-gradient(#FDE2FF, #FDE2FF) 0% 0% / 100% 50%, white 0% 50% / 100% 50%' :
                        'white'),
          'height': '70vh'
        }"
        class="container"
      >
        <div class="row">
          <div class="column">
            <div class="card">
              <div class="card-img-container">
                <img
                  v-if="!loading"
                  :src="product.image"
                  class="card-img-top"
                  alt="Product Image"
                />
                <div v-else class="skeleton-loader"></div>
              </div>
              <div class="card-body">
                <h5
                  class="card-title"
                  :style="{ color: (product.category === 'men\'s clothing') ? '#002772' : (product.category === 'women\'s clothing') ? '#720060' : 'inherit' }"
                >
                  {{ product.title }}
                </h5>
                <p class="card-category">Category: {{ product.category }}</p>
                <div class="rating-container">
                  <p class="rating-text">2.9/5</p>
                  <div :style="{ 
                      'background-color': (product.category === 'men\'s clothing') ? '#002772' : 
                                          (product.category === 'women\'s clothing') ? '#720060' : 
                                          (product.category === 'jewelery' || product.category === 'electronics') ? 'black' : ''
                    }" class="rating-circle colored"></div>
                                    <div :style="{ 
                      'background-color': (product.category === 'men\'s clothing') ? '#002772' : 
                                          (product.category === 'women\'s clothing') ? '#720060' : 
                                          (product.category === 'jewelery' || product.category === 'electronics') ? 'black' : ''
                    }" class="rating-circle colored"></div>
                                    <div :style="{ 
                      'background-color': (product.category === 'men\'s clothing') ? '#002772' : 
                                          (product.category === 'women\'s clothing') ? '#720060' : 
                                          (product.category === 'jewelery' || product.category === 'electronics') ? 'black' : ''
                    }" class="rating-circle colored"></div>
                  <div :style="{ 
                    'border': (product.category === 'men\'s clothing') ? '1px solid #002772' : 
                              (product.category === 'women\'s clothing') ? '1px solid #720060' : 
                              (product.category === 'jewelery' || product.category === 'electronics') ? '1px solid black' : '1px solid transparent'
                  }" class="rating-circle"></div>
                  <div :style="{ 
                    'border': (product.category === 'men\'s clothing') ? '1px solid #002772' : 
                              (product.category === 'women\'s clothing') ? '1px solid #720060' : 
                              (product.category === 'jewelery' || product.category === 'electronics') ? '1px solid black' : '1px solid transparent'
                  }" class="rating-circle"></div>
                </div>
                <p class="card-description">{{ product.description }}</p>
                <p :style="{ 
                    color: (product.category === 'men\'s clothing') ? '#002772' : 
                          (product.category === 'women\'s clothing') ? '#720060' : 
                          (product.category === 'jewelry' || product.category === 'electronics') ? 'black' : 'inherit' }" class="card-text">
                  <strong>${{ product.price }}</strong>
                </p>
                <button
                  href="#"
                  class="buy"
                  :style="{ 
                    backgroundColor: (product.category === 'men\'s clothing') ? '#002772' : 
                                      (product.category === 'women\'s clothing') ? '#720060' : 
                                      (product.category === 'jewelery' || product.category === 'electronics') ? 'black' : 
                                      'inherit',
                    border: (product.category === 'men\'s clothing') ? '1px solid #002772' : 
                            (product.category === 'women\'s clothing') ? '1px solid #720060' : 
                            (product.category === 'jewelery' || product.category === 'electronics') ? '1px solid black' : '1px solid transparent',
                  }"
                >
                  Buy Now
                </button>
                <button
                  @click="nextProduct"
                  class="btn btn-success"
                  :style="{ 
                    color: (product.category === 'men\'s clothing') ? '#002772' : 
                          (product.category === 'women\'s clothing') ? '#720060' : 
                          (product.category === 'jewelry' || product.category === 'electronics') ? 'black' : 'inherit', 
                    border: (product.category === 'men\'s clothing') ? '1px solid #002772' : 
                            (product.category === 'women\'s clothing') ? '1px solid #720060' : 
                            (product.category === 'jewelery' || product.category === 'electronics') ? '1px solid black' : '1px solid transparent',
                    backgroundColor: (product.category === 'men\'s clothing' || product.category === 'women\'s clothing') ? 'white' : 'inherit'
                  }"
                >
                  Next Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      product: {
        id: 0,
        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
      },
      loading: false,
      loadingDetail: false,
    };
  },
  methods: {
  nextProduct() {
    const totalProducts = 20;
    const nextProductId = (this.product.id % totalProducts) + 1;
    this.loading = true;

    this.$router.push({ name: 'product', params: { id: nextProductId } });

    axios.get(`https://fakestoreapi.com/products/${nextProductId}`)
      .then(response => {
        this.product = response.data;
        console.log('Next Product Details:', this.product);
      })
      .catch(error => {
        console.error('Error fetching next product details:', error);
      })
      .finally(() => {
        this.loading = false;
      });
  }
},

  mounted() {
    const productId = this.$route.params.id;
    this.loadingDetail = true;

    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        this.product = response.data;
        console.log('Product Details:', this.product);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      })
      .finally(() => {
        this.loadingDetail = false;
      });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 20rem;
}

.rating-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-left: 51rem;
}

.rating-circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 3px;
}

.rating-text {
  margin-right: 5px;
  font-size: 14px;
}

.card {
  position: relative;
  max-width: 80%;
  height: 600px;
  margin: 0 auto;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  display: flex;
}

.card-img-container {
  flex: 1;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-img-top {
  width: 80%;
  height: auto;
  object-fit: cover;
}

.card-body {
  flex: 2;
  padding: 55px;
  text-align: left;
  margin-left: 20px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: left;
  padding-bottom: 15px;
}

.card-category {
  font-size: 13px;
  text-align: left;
  position: absolute;
  border-bottom: 1px solid #DCDCDC;
  padding-bottom: 10px;
  width: 62%;
  box-sizing: border-box;
}

.card-description {
  font-size: 20px;
  text-align: left;
  margin-top: 50px;
  position: relative;
}

.buy,
.btn-success {
  font-size: 15px;
  position: absolute;
  bottom: 30px;
  cursor: pointer;
  margin-top: 10px;
  display: inline-block;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.card-text {
  font-size: 1.5em;
  margin-bottom: 5px;
  text-align: left;
  position: absolute;
  bottom: 60px;
  border-top: 1px solid #DCDCDC;
  padding-top: 10px;
  width: 62%;
  box-sizing: border-box;
}


.btn-success {
  padding: 5px 50px;
  border-radius: 5px;
  right: 39rem;
}

.buy {
  color: white;
  padding: 4.5px 55px;
  border-radius: 5px;
  margin-right: 20px;
}

.btn-success:hover,
.buy:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

.skeleton-loader {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media only screen and (max-width: 1600px) {
  .container {
    padding-top: 20rem;
  }

  .rating-container {
    padding-left: 40rem;
  }

  .card-body {
    margin-left: 0;
  }

  .card-title{
    font-size: 30px;
  }

  .card-description{
    font-size: 20px;
  }

  .btn-success {
  padding: 5px 40px;
  border-radius: 5px;
  right: 30rem;
}

.buy {
  color: white;
  padding: 5px 40px;
  border-radius: 5px;
  margin-right: 10px;
}
}

@media only screen and (max-width: 1200px) {
  .card {
    max-width: 90%;
  }

  .btn-success {
    right: 18rem;
  }
  .rating-container {
    padding-left: 30rem;
  }
}

@media only screen and (max-width: 992px) {
  .container {
    padding-top: 15rem;
  }
  .rating-container {
    padding-left: 28rem;
  }

  .card {
    max-width: 100%;
    height: 450px;
    border-radius: 0;
  }

  .card-body {
    margin-left: 0;
  }

  .btn-success {
    right: 10rem;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    padding-top: 20rem;
  }

  .card {
    max-width: 100%;
  }
  .rating-container {
    padding-left: 20rem;
  }

  .btn-success {
    right: 5rem;
  }
  .card-title{
    font-size: 25px;
  }

  .card-description{
    font-size: 15px;
  }
}

/* @media only screen and (max-width: 768px) {
  .container {
    padding-top: 10rem;
  }

  .card {
    max-width: 90%;
  }

  .card-body {
    margin-left: 10px;
  }

  .btn-success {
    right: 10%;
  }
} */

@media only screen and (max-width: 480px) {
  .container {
    padding-top: 20rem;
  }
  .rating-container {
    padding-left: 11rem;
  }
  .rating-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 3px;
}

.rating-text {
  margin-right: 5px;
  font-size: 10px;
}
  .card {
    max-width: 100%;
    height: 450px;
    border-radius: 0;
  }

  .card-body {
    margin-left: 0;
  }

  .btn-success {
    right: 5%;
  }

  .card-title{
    font-size: 15px;
  }

  .card-description{
    font-size: 10px;
  }

  .card-category{
    font-size: 10px;
  }

  .btn-success {
  padding: 5px 25px;
  border-radius: 5px;
  font-size: 10px;
  right: 50px;
}

.buy {
  color: white;
  padding: 5px 25px;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 10px;
}
} 
</style>