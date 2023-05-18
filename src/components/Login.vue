<template>
    <div>
        <div class="auth-inner">
        <form @submit.prevent="handleSubmit">
            
            <h3>Login</h3>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="email" placeholder="Email"/>
            </div>
            <br>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" autocomplete="off" placeholder="Password"/>
            </div><br>

            <button class="btn btn-primary btn-block" >Login</button>
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
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async handleSubmit() {
            try{
                const response = await axios.post(`https://flashcard-ms.onrender.com/login`, {
                email: this.email,
                password: this.password,
                });
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('reloaded', false);
                this.$router.push('/dashboard')
            } catch(e){
                this.error = e.response.data.message;
            } 
            
        },
    }
  }
</script>
