<template>
    <div>
        <div class="auth-inner">
        <form @submit.prevent="handleSubmit">

            <div class="form-group">
                <label>Deck name</label><br>
                <input type="deck_name" class="form-control" v-model="deck_name" placeholder="Deck name"/>
            </div><br>

            <button class="btn btn-primary btn-block">Create</button>
            <div class="btn btn-danger" role="alert" v-if="error">
             {{error}}
            </div>

        </form>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import routes from './../router/index.js';

    export default {
    name: 'Create_deck',
    data() {
        return {
            user: '',
            error: '',
            deck_name: ''
        }
    },
    methods: {
        async handleSubmit() {
            try{
                const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/${this.user}/dashboard`, {
                deck_name: this.deck_name,
                });
                this.$router.push({ path: '/dashboard' })
                
            } catch(e){
                this.error = e.response.data.message;
            }
        }
    },
    async created() {
        this.user = sessionStorage.getItem('user');
    }
  }
</script>
