const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'These are new and super cute.',
      image: './assets/images/socks_green.jpg',
      inventory: 100,
      onSale: true,
    }
  },
})
