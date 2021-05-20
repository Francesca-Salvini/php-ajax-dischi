/*jshint esversion: 6 */
/*jshint esversion: 9 */

var app = new Vue({
    el: '#root',

    data: {
      cds: [],
      genreSelected: ""
    },

    methods: {
        getDischi: function() {
            axios
            .get('http://localhost:8888/php-ajax-dischi/server.php', {
                params : {
                    genere: this.genreSelected
                }
            })
            .then( (response) => {
                this.cds = response.data;
            });
        }
    },

    mounted() {
        this.getDischi();
    }
});


