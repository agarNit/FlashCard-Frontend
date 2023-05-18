<template>
    <div>
        <div class="auth-inner">
        <form @submit.prevent="handleSubmit">
            <h3>SignUp</h3>

            <div class="form-group">
                <label>Username</label>
                <input type="name" class="form-control" v-model="name" placeholder="Username"/>
            </div>
            <br>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="email" placeholder="Email"/>
            </div>
            <br>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password" autocomplete="off"/>
            </div>
            <br>

            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" v-model="confirm_password" placeholder="Password" autocomplete="off"/>
            </div>

            <br>


            <button class="btn btn-primary btn-block">Signup</button>
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
    name: 'Signup',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            error: ''
        }
    },
    methods: {
        async handleSubmit() {
            try{
                const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/signup`, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password
                });
                this.$router.push({ path: '/login' })
            } catch(e){
                this.error = e.response.data.message;
            }
        }
    }
  }
</script>
