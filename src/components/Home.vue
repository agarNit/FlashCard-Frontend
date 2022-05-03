<template>
    <div >
      <div class="auth-inner">
        <h3>Welcome to FlashCard!</h3>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Home',
    computed: {
      ...mapGetters(['user']),
      ...mapGetters(['token'])
    },
  }
</script>
