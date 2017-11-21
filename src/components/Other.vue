<template>
  <div>
    <h1>{{ msg }}</h1>
    
      <router-view></router-view>
   
  </div>
</template>

<script>
	export default {
	  name: 'Other',
	  data() {
	    return {
	      msg: 'Welcome to Other',
	    };
	  },
	};
</script>

<style>
</style>