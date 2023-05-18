<template>
    <div>
        <div class="auth-inner">
        <form @submit.prevent="handleSubmit">

            <div class="alert alert-danger" role="alert" v-if="error">
                {{error}}
            </div>

            <div class="form-group">
                <label>Card Front</label><br>
                <input type="card_front" class="form-control" v-model="card_front" placeholder="Card Front"/>
            </div><br>

            <div class="form-group">
                <label>Card Back</label><br>
                <input type="card_back" class="form-control" v-model="card_back" placeholder="Card Back"/>
            </div><br>

            <button class="btn btn-primary btn-block">Update</button>

        </form>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import routes from './../router/index.js';

    export default {
    name: 'Update_card',
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
                const response = await axios.put(`${process.env.VUE_APP_BASE_URL}/${sessionStorage.getItem('deck_id')}/${sessionStorage.getItem('card_front')}/update`, {
                card_front: this.card_front, card_back: this.card_back
                });
                this.$router.push({ path: '/cards' })
                sessionStorage.removeItem('card_front')
            } catch(e){
                this.error = "Some error occured.";
            }
        }
    },
   
  }
</script>
