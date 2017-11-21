<template>
  <div>
    <h1>{{ msg }}</h1>
    
       <router-link to="/Home">Home</router-link>
       <router-link to="/About">About</router-link>
       <router-link to="/User/23">User</router-link>
       <router-link to="/Other">Other</router-link>
    <div id="">
    		<router-link to="/User/23/UserPic">UserPic</router-link>
    		<router-link to="/User/23/UserDescribe">UserDescribe</router-link>
    </div>
   
  </div>
</template>

<script>
	export default {
	  name: 'Main',
	  data() {
	    return {
	      msg: 'Welcome to Main',
	    };
	  },
	};
</script>

<style>
</style>