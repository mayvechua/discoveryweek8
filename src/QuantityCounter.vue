<template>
  <div>
       <tr>
    <th scope="col">  <button v-on:click="decrease" id='button' > <b>-</b>  </button></th>
    <th scope="col"> <h1> {{counter}}</h1></th>
    <th scope="col">   <button v-on:click="increase" id='button'> <b>+</b> </button></th>
  </tr>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            counter:0
        }   
    },
     props: {
      items: {
        type: Object
      }},


    methods:{
     increase:function(){
        if (this.counter >= 10) {
            alert("You cannot buy more than 10 items.")
        } else {
            this.counter+=1
        }
        this.$emit('counter', this.items, this.counter)
        },
    decrease:function(){
        if (this.counter >0){
             this.counter-=1
        }
        this.$emit('counter', this.items, this.counter)
    }
    
    }
 
  
}
</script>

<style>
#button{
    background-color:pink;

}

</style>