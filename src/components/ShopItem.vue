<template>
  <div class="product-container">
    <img 
      :src="imgPath" 
      alt="Monkey NFT"
      width="350"
      height="350" 
    />
    <h3 class="product-container__title">{{ name }}</h3>
    <h4 class="product-container__subtitle">
      Yacht Club
    </h4>
    <div>
      <span>Amount:</span>
      <button @click="decreaseItem">-</button>
      <span id="buy-amount">{{ count }}</span>
      <button @click="addItem">+</button>
    </div>
    <div class="product-container__price">
      <span>Price: &nbsp;&nbsp;</span>
      <span id="total-price">{{ totalPrice }}</span>
    </div>
    <slot name="actions" v-bind="{ count }" />
  </div>
</template>

<script>
  export default {
    name: 'ShopItem',
    props: {
      name: {
        type: String,
        required: true
      },
      imgPath: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        count: 1
      };
    },
    computed: {
      totalPrice() {
        return this.count * this.price;
      }
    },
    methods: {
      addItem() {
        this.count += 1;
      },
      decreaseItem() {
        if (this.count > 1) {
          this.count -= 1;
        }
      }
    }
  };
</script>
