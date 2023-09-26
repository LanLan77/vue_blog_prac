<template>
  <div id="app">
    <p>
		<router-link to="/foo">Go to Foo</router-link>
		<br/>
		<router-link to="/bar">Go to Bar</router-link>
		<br/>
		<router-link to="/user/bbbb">Go to User</router-link>
	</p>
	<router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
     
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
