<template>
  <main class="content">
    <ShopItem 
      v-for="item in $options.$ITEMS" 
      :key="item.id" 
      :name="item.name"
      :price="item.price"
      :img-path="item.image"
      @onSelect="onSelectItem"
    >
      <template #actions="{ count }">
        <button 
          id="buy-button"
          type="button"
          class="product-container__buy-btn"
          @click="onSelectItem({ item, count })"
        >
          Buy
        </button>
      </template>
    </ShopItem>
  </main>
</template>

<script>
import { SHOP_ITEMS } from './config/shop-items';
import ShopItem from './components/ShopItem';

export default {
  name: 'App',
  components: {
    ShopItem
  },
  methods: {
    onSelectItem({ item, count }) {
      this.$router.push({ name: 'BuyPage', params: { itemId: item.id, count } });
    }
  },
  $ITEMS: SHOP_ITEMS
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
