<template>
    <div>
        <div class="auth-inner">
        <form @submit.prevent="handleSubmit">

            <div class="alert alert-danger" role="alert" v-if="error">
                {{error}}
            </div>

            <div class="form-group">
                <label>Deck name</label><br>
                <input type="deck_name" class="form-control" v-model="deck_name" placeholder="Deck name"/>
            </div><br>

            <button class="btn btn-primary btn-block">Update</button>

        </form>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    import axios from 'axios';
    import routes from './../router/index.js';

    export default {
    name: 'Update_deck',
    data() {
        return {
            error: ''
        }
    },
    computed: {
        ...mapGetters(['deck']),
        ...mapGetters(['user']),
    },
    methods: {
        async handleSubmit() {
            try{
                const response = await axios.put(`${process.env.VUE_APP_BASE_URL}/${sessionStorage.getItem('user')}/dashboard/${sessionStorage.getItem('deck_name')}/update`, {
                deck_name: this.deck_name,
                });
                sessionStorage.removeItem('deck_name')
                this.$router.push({ path: '/dashboard' })
            } catch(e){
                this.error = "Some error occured.";
            }
        }
    },
   
  }
</script>
