var app = new Vue({

    el: '#app',
  
    data: {
       search: '',
       rom: []
    },
    mounted() {
        axios
            .get('https://sundsvalls-rom.herokuapp.com/drinks')
            .then(response => (this.rom  = response.data.map(drinks => {
                drinks.visible = true;
                return drinks;
            })))
    },
    computed: {
      filteredRoms() {
        return this.rom.filter(rom => {
           return rom.brand.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
      }
    }
  
  })