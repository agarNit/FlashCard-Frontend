<template>
  <div>
	<nav class="navbar navbar-expand navbar-light fixed-top">
    

    <b-button  v-b-toggle.sidebar-footer class="navbar-brand btn" v-if="user" style="color:#ffffff"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></b-button>
    <b-sidebar width='100px' id="sidebar-footer" bg-variant="dark" aria-label="Sidebar with custom footer" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h5 id="sidebar-no-header-title" style="color:#ffffff">Menu</h5><br><br><br>
          <nav >
            <b-nav vertical class="d-flex bg-dark text-light align-items-center" >
              <b-button @click="download_pdf" title="Download PDF"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg></b-button><br>
              <b-button @click="export_pdf" title="Export PDF"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg></b-button><br>
              <b-button @click="delete_account" class="btn btn-danger" title="Delete Account"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></b-button>
            </b-nav>
          </nav>
        </div>
      </template>
      <template #footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center py-4">
          <b-button class="btn btn-info" size="sm" @click="hide">Close</b-button>
          
        </div>
      </template>
    </b-sidebar>
    
    <router-link to="/dashboard" @click.native="onClick" class="navbar-brand" v-if="user && cards" style="color:#ffffff"><span class="text"> &emsp;&emsp;</span>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/></svg></router-link>
      

    <div class="container">
      <router-link to="/" class="navbar-brand" v-if="!user" style="color:#ffffff" >Home</router-link>
      <router-link to="/dashboard" class="navbar-brand" v-if="user && !cards" style="color:#ffffff">Hi, {{user}} </router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto" v-if="!user">
          <li class="nav-item">
            <router-link to="/login" class="nav-link" style="color:#ffffff">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link" style="color:#ffffff">SignUp</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto" v-if="user">
          <li class="nav-item" v-if="!cards">
            <router-link to="/create_deck" class="nav-link" style="color:#ffffff">Create Deck</router-link>
          </li>
          <li class="nav-item" v-if="cards">
            <router-link to="/create_card" class="nav-link" style="color:#ffffff">Create Card</router-link>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" @click="handleClick" class="nav-link btn btn-success" style="color:#ffffff"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16"><path d="M7.5 1v7h1V1h-1z"/><path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/></svg><span class="text"> Logout</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
   import {mapGetters} from 'vuex';
   import axios from 'axios';
   import routes from './../router/index.js';


  export default {
    name: 'Nav',
    data() {
      return {
        user: sessionStorage.getItem('user'),
        cards: sessionStorage.getItem('cards'),
      }
    },
    methods: {
      handleClick() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
                this.$router.push({ path: '/login' })
        location.reload()
      },
      onClick() {
        sessionStorage.removeItem('deck_id')
        sessionStorage.removeItem('deck_name')
        sessionStorage.removeItem('cards')
        sessionStorage.setItem('reloaded', 'true')
        location.reload();
        
      },
      async download_pdf() {
        await axios({url: `${process.env.VUE_APP_BASE_URL}/${sessionStorage.getItem('user')}/export`, method: 'GET',responseType: 'blob',
        }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          console.log(fileURL)
          var fileLink = document.createElement('a');
          console.log(fileLink)
          fileLink.href = fileURL;
          console.log(fileLink.href)
          fileLink.setAttribute('download', sessionStorage.getItem('user') + ".pdf");
          console.log(fileLink)
          document.body.appendChild(fileLink);
          fileLink.click();
        });
      }, 
      async export_pdf() {
        try{
          await axios.get(`${process.env.VUE_APP_BASE_URL}/send/${sessionStorage.getItem('user')}`);
          alert("PDF report successfully sent to mail !")
        }
        catch(e){
          alert("Download PDF to export.")
        }
      },
      async delete_account() {
          await axios.get(`${process.env.VUE_APP_BASE_URL}/${sessionStorage.getItem('user')}/signout`);
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
          this.$router.push({ path: '/signup' })
      }
    },

  }
</script>

<style>

.btn {
  margin-left: 20px;
}

</style>
