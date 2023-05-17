<template>
  <div id="app">
    <Nav/>
    <div class="auth-wrapper">
        <router-view />
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import Nav from './components/Nav.vue'

  export default {
    name: 'App',
    components: {
      Nav
    },
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Erica+One&family=Farsan&display=swap');

  h1,h2,h3,h4,h5,h6,label,span {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

  body,html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }

  #app {
    text-align: center;
  }

  .navbar-light {
    background-color: #425266;
    box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
  }

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    box-sizing: border-box;
    font-family: "lato", sans-serif;
    background-color: #53637F;
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
  }

  .auth-inner {
    width: 450px;
    margin: auto;
    background: lightblue;
    box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    border: 1px solid grey;
    transition: all .3s;
  }

  .auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
  }

  .auth-wrapper h3 {
    text-align: center;
    line-height: 1;
    padding-bottom: 20px;
  }

  .custom-control-label {
    font-weight: 400;
  }


a {
  text-align: center;
  text-decoration: none;
}

h1 {
  margin-left: 40px;
}

p {
  text-align: center;
  font-size: 20px;
}

div {
  overflow: auto;
}

.card_name {
  font-size: 30px;
  padding-bottom: 15px;
}

.dash_update, .dash_delete {
  display:inline-block;
  margin-top: 10px;
  margin-left: 5px;
  margin-right:5px;
  border: none;
  background-color: grey;
  color: #ffffff;;
  border-radius: 6px;
  cursor: pointer;
}

._update, ._delete {
  display:inline-block;
  margin-top: 10px;
  margin-left: 25px;
  margin-right:2px;
  border: none;
  background-color: grey;
  color: #ffffff;;
  border-radius: 6px;
  cursor: pointer;
}

a {
  color: rgb(107, 81, 15);
}

.no_deck{
  text-align: center;
  color: grey;
}

.deck_text {
  font-size: 20px;
  font-style:oblique;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:rgb(44, 17, 56);
}

.dashboard {
  margin-top: 80px;
  margin-left: 40px;
  font-size: 50px;
  font-family:Georgia, 'Times New Roman', Times, serif;
}

@media only screen and (max-width: 768px) {
  .auth-inner {
    width: 80%;
  }

  .card {
    width: 40%;
  }
}

</style>
