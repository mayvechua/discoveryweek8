<template>
  <div class="navbar">
    <nav>
      <h1>{{ title }}</h1>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/orders" exact>Orders</router-link></li>
         <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    data(){
    return{
           msg:"nav"
        }
  }

}
</script>