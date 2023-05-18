<template>
  <div v-if=!user class="auth-inner">
      <h3>Session Expired !!</h3>
      <p> Please relogin to view content.</p>
  </div>
  <div v-else-if="user">
    <div v-if="!decks">
        <h1 class="no_deck">No decks found. Create decks.</h1>
    </div>
    <div v-if="decks" class="container"> 
      <div class="card border-primary text-center" v-for="deck in decks">
        <div class="card-header" @click="send2(deck.deck_id)"><h5><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16"><path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/></svg>&ensp;{{deck.deck_name}}</h5></div>
        <div class="card-body text-primary">
          <h5 class="card-title deck_text">Deck Score: {{deck.deck_score}}</h5>
          <router-link to="/update_deck" @click="send1(deck.deck_name)"><input type="submit" class="dash_update" value="Update"></router-link>
          <a href="javascript:void(0)" @click="del(deck.deck_id)"><input type="submit" class="dash_update" value="Delete"></a>
          <a href="javascript:void(0)" @click="reset(deck.deck_id)"><input type="submit" class="dash_update" value="Reset"></a>
        </div>
        <div class="card-footer">
          <small class="text-muted ">Last reviewed on {{deck.deck_last_review_time}}</small>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import {mapGetters} from 'vuex';
  import axios from 'axios';
  import routes from './../router/index.js';

  export default {
    name: 'Dashboard',
    computed: {
      ...mapGetters(['deck_name']),
    },
    data() {
        return {
            decks: '',
            user: '',
            timestamp: ''
        }
    },
    methods: {
      del(deck_id) {
        const response1 = axios.delete(`https://flashcard-ms.onrender.com/${this.user}/dashboard/${deck_id}/delete`);
        this.decks = response1;
        location.reload()
      },
      reset(deck_id) {
        const response = axios.get(`https://flashcard-ms.onrender.com/decks/${deck_id}/reset`);
        location.reload()
      },
      send1(deck_name) {
        sessionStorage.setItem('deck_name', deck_name)
      },
      send2(deck_id) {
        sessionStorage.setItem('deck_id', deck_id)
        this.$router.push({ path: '/cards' })
        location.reload()
      }
    },
    async created() {
      try{
        const response = await axios.get(`https://flashcard-ms.onrender.com/user`, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': sessionStorage.getItem('token')
        }
        });
        this.user = response.data.name;
        sessionStorage.setItem('user', response.data.name);
        const res = await axios.get(`https://flashcard-ms.onrender.com/${this.user}/dashboard`);
        this.decks = res.data.decks; 
        const reloaded = sessionStorage.getItem('reloaded');
        if (reloaded !== 'true') {
            sessionStorage.setItem('reloaded', 'true');
            // location.reload()
        } 
      }
      catch(e){
        sessionStorage.removeItem('user');
        const reloaded = sessionStorage.getItem('reloaded');
        if (reloaded !== 'false') {
            sessionStorage.setItem('reloaded', 'false');
            // location.reload()
        } 
      }
    },
  }
</script>

<style>

.card {
  display: inline-block;
  background-color: rgb(206, 230, 175);
  width: 27%;
  margin-top: 60px;
  margin-right: 10px;
  margin-left: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 1);
  border: yellow;
}

.container::-webkit-scrollbar { 
    display: none; 
}

@media only screen and (max-width: 768px) {

  .card {
    width: 95%;
    margin-left: 20px;
    margin-top: 90px;
  }

  .container {
    width: 90%;
  }

  .text {
    display: none;
  }

  .text2 {
    margin-left: 0px;
  }

}

</style>
