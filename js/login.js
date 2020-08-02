document.addEventListener("DOMContentLoaded", function() {
  var content = new Vue({
    el: "#login-section",
    delimiters: ["[[", "]]"],
    name: "login",
    data: {
      test: "Hello World",
      username:"",
      password:""

    },
    methods: {
      login: function login(event) {
        alert("\nusername:"+this.username+"\nPassword:"+this.password);
      }
    },
    created: function created() {
      /*  axios.get('json/filter.json').then(function(response) {
          
        });*/
    },
    mounted: function mounted() {},
    updated: function updated() {}
  });
});