<template>
  <div>
     <router-link to="/">Main</router-link>
     <div id="">
    		<router-link to="/User/23/UserPic">UserPic</router-link>
    		<router-link to="/User/23/UserDescribe">UserDescribe</router-link>
    </div>
    
    
    	  <h1>{{ $route.params.id }}</h1>
      <router-view></router-view>
   
  </div>
</template>

<script>
	export default {
	  name: 'User',
	  data() {
	    return {
	      msg: 'Welcome to User',
	    };
	  },
	};
</script>

<style>
</style>