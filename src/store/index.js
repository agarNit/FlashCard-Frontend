import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    user: '',
    cards: '',
    token: '',
    deck: '',
    deck_id: ''
}

const store = new Vuex.Store({
    state,
    getters: {
        user: (state) => {
            return state.user;
        },
        cards: (state) => {
            return state.cards;
        },
        token: (state) => {
            return state.token;
        },
        deck: (state) => {
            return state.deck;
        },
        deck_id: (state) => {
            return state.deck_id;
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user);
        },
        cards(context, cards) {
            context.commit('cards', cards);
        },
        token(context, token) {
            context.commit('token', token);
        },
        deck(context, deck) {
            context.commit('deck', deck);
        },
        deck_id(context, deck_id) {
            context.commit('deck_id', deck_id);
        }
    },
    mutations: {
        user(state, user) {
            state.user = user;
        },
        cards(state, cards) {
            state.cards = cards;
        },
        token(state, token) {
            state.token = token;
        },
        deck(state, deck) {
            state.deck = deck;
        },
        deck_id(state, deck_id) {
            state.deck_id = deck_id;
        }
    }
});

export default store;