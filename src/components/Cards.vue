<template>
  <div>
    <div v-if="!cards">
        <h1 class="no_deck">No cards found. Create cards.</h1>
    </div>
    <div v-if="cards" class="container">
      <div class="card border-primary text-center" v-for="card in cards">
        <div v-show="!card.state" class="card-header" @click="send2(deck.deck_id)"><h4>{{card.card_front}}</h4></div>
        <div v-show="card.state" class="card-header"><h4>{{card.card_back}}</h4></div>
        <div class="card-body text-primary">
          <h5 class="card-title deck_text">Card Score: {{card.card_score}}</h5>
          <router-link to="/update_card" @click.native="send(card.card_front)"><input type="submit" class="dash_update" v-show="!card.state" value="Update"></router-link>
            <a href="javascript:void(0)" @click="del(card.card_front,card.deck_id)"><input type="submit" class="dash_update" v-show="!card.state" value="Delete"></a>
            <button class="dash_update" v-show="!card.state" @click="card.state=!card.state">Answer</button>
            <button class="dash_update" v-show="card.state" @click="flip_easy(card,card.card_id)">Easy</button>
            <button class="dash_update" v-show="card.state" @click="flip_medium(card,card.card_id)">Medium</button>
            <button class="dash_update" v-show="card.state" @click="flip_difficult(card,card.card_id)">Difficult</button> 
        </div>
        <div class="card-footer">
          <small class="text-muted ">Last reviewed on {{card.card_last_review_time}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
  import axios from 'axios';
  export default {
    name: 'Cards',
    computed: {
      
    },
    data() {
        return {
            cards: '',
        }
    },
    methods: {
      del(card_front,deck_id) {
        const response = axios.delete(`${process.env.VUE_APP_BASE_URL}/${deck_id}/${card_front}/delete`);
        this.cards = response
        location.reload()
        
      },
      send(card_front) {
        sessionStorage.setItem('card_front', card_front)
      },
      flip_easy(card, card_id) {
        card.state=!card.state
        const response = axios.get(`${process.env.VUE_APP_BASE_URL}/cards/${card_id}/easy`);
        location.reload()
      },
      flip_medium(card, card_id) {
        card.state=!card.state
        const response = axios.get(`${process.env.VUE_APP_BASE_URL}/cards/${card_id}/medium`);
        location.reload()
      },
      flip_difficult(card, card_id) {
        card.state=!card.state
        const response = axios.get(`${process.env.VUE_APP_BASE_URL}/cards/${card_id}/difficult`);
        location.reload()
      }
    },
    async created() {
      const res = await axios.get(`${process.env.VUE_APP_BASE_URL}/${sessionStorage.getItem('user')}/${sessionStorage.getItem('deck_id')}/cards`);
      this.cards = res.data.cards;
      sessionStorage.setItem('cards', this.cards);
      const reloaded = sessionStorage.getItem('reloaded');
      if (reloaded !== 'false') {
          sessionStorage.setItem('reloaded', 'false');
          location.reload();
      } 
    }
  }
</script>
