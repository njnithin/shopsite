document.addEventListener("DOMContentLoaded", function() {
  var loginInstance, otherPages;
  loginInstance = new Vue({
    el: "#login-section",
    delimiters: ["[[", "]]"],
    name: "login",
    data: {
      test: "Hello World",
      username: "",
      password: "",
      shakeCard: false,
      loginError: false,
      emptyCheck: false,
      loaderFlag: false,
      notLoggedIn: true
    },
    methods: {
      login: function login(event) {
        var self = this;
        if (self.username != "" && self.password != "") {
          self.loaderFlag = true;
          axios.post('https://shop-store-backend.herokuapp.com/login', {
            "username": this.username,
            "password": this.password
          }).then(function(response) {
            var loginCard = document.querySelector(".login-card");
            if (response.data.status === "Success") self.notLoggedIn = false;
            else {
              self.shakeCard = true;
              self.loginError = true;
            }
            self.loaderFlag = false;
            removeShakeEffect();
          }).catch(function(error) {
            self.loaderFlag = false;
          });
        } else {
          self.emptyCheck = true;
          self.shakeCard = true;
          removeShakeEffect();
        }

        function removeShakeEffect() {
          setTimeout(function() {
            self.shakeCard = false;
            self.loginError = false;
            self.emptyCheck = false;

          }, 1500);
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
  otherPages = new Vue({
    el: "#other-pages",
    delimiters: ["[[", "]]"],
    name: "other-pages",
    data: {},
    computed: {
      noAccess: function() {
        return loginInstance.notLoggedIn;
      }
    },
    methods: {},
    created: function created() {},
    mounted: function mounted() {
    },
    updated: function updated() {}
  });
});