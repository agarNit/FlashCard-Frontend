<template>
    <div>
        <div class="auth-inner">
        <form @submit.prevent="handleSubmit">

            <div class="form-group">
                <label>Card Front</label><br>
                <input type="card_front" class="form-control" v-model="card_front" placeholder="Card Front"/>
            </div><br>

            <div class="form-group">
                <label>Card Back</label><br>
                <input type="card_back" class="form-control" v-model="card_back" placeholder="Card Back"/>
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
    name: 'Create_card',
    data() {
        return {
            card_front: '',
            card_back: '',
            error: ''
        }
    },
    methods: {
        async handleSubmit() {
            try{
                const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/${sessionStorage.getItem('user')}/${sessionStorage.getItem('deck_id')}/card`, {
                card_front: this.card_front,
                card_back: this.card_back
                });
                this.$router.push({ path: '/cards' })
            } catch(e){
                this.error = e.response.data.message
            }
        },
    },
    async created() {
           
        }
  }
</script>
