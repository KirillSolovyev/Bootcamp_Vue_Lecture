<template>
  <main class="content">
    <template v-if="!isLoading && item">
      <div>
        <h1 style="text-align: center; color: white;">
          Your ordered this item for ${{ totalPrice }}
        </h1>
        <ShopItem 
          :key="item.id" 
          :name="item.name"
          :price="item.price"
          :img-path="item.image"
        />
      </div>
    </template>
    <p v-else-if="isLoading">Loading ...</p>
    <p v-else>Item with id {{ itemId }} not found</p>
  </main>
</template>

<script>
  import commaNumber from 'comma-number';
  import { SHOP_ITEMS } from '../config/shop-items';
  import ShopItem from '../components/ShopItem';

  export default {
    name: 'BuyPage',
    components: {
      ShopItem
    },
    props: {
      itemId: {
        type: String,
        required: true
      },
      count: {
        type: [Number, String],
        required: true,
        validator: v => parseInt(v) > 0
      }
    },
    data() {
      return {
        timerId: null,
        item: null,
        isLoading: false
      };
    },
    computed: {
      totalPrice() {
        return commaNumber(this.item.price * this.count, ' ');
      },
    },
    mounted() {
      this.fetchItem();
    },
    beforeDestroy() {
      clearTimeout(this.timerId);
    },
    methods: {
      fetchItem() {
        this.isLoading = true;
        this.timerId = setTimeout(() => {
          this.item = this.getItem();
          this.isLoading = false;
        }, 2000);
      },
      getItem() {
        return SHOP_ITEMS.find(item => item.id === this.itemId);
      }
    }
  };
</script>