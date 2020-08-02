document.addEventListener("DOMContentLoaded", function() {
  var content = new Vue({
    el: "#login-section",
    delimiters: ["[[", "]]"],
    name: "login",
    data: {
      test: "Hello World",
      username: "",
      password: ""
    },
    methods: {
      login: function login(event) {
        var self = this;
        if (self.username != "" && self.password != "") {
          axios.post('https://shop-store-backend.herokuapp.com/login', {
            "username": this.username,
            "password": this.password
          }).then(function(response) {
            console.log(response.data);
          }).catch(function(error) {
            console.log(error);
          });
        }
        else{
        	alert("Please Fill")
        }
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