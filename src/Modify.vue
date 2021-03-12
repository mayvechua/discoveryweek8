<template>
  <div >

      <div v-for="(name,count,index) in datapacket[0]" :key="index"  >

     <h2> {{count}} :{{name}} </h2>
      <input :id=index placeholder=0 type="number" min='0'>
  </div>
  <br>
  <br>
                <button v-on:click="updateOrder()">Update Order</button>
        
  </div>
</template>
<script>
import database from './firebase.js'
export default {
    data(){
    return{
           orders: [],
           datapacket:[],
           changedOrder:{},
           SKK:0,
           
        }
  }, props: {
      id: {
        type: String
      }}, 
      
      methods:{
          onChange:function(event) {
              console.log(event.value)
              

          },
          updateOrder: function(){
              var counter =0;
              console.log(this.changedOrder)
              for (var i in this.datapacket[0]){
                console.log(document.getElementById(counter))
                if (document.getElementById(counter).value != ""){
                  this.changedOrder[i] = document.getElementById(counter).value
                }
                counter = counter +1 
              }
              
               database.collection('orders').doc(this.id).update(this.changedOrder).then(
                 () => this.$router.push({path:'/orders'})
               )

          },

          fetchItems:function(){
            database.collection('orders').doc(this.id).get().then((doc)=>{
        let item={}
            item=doc.data()
            this.datapacket.push(item) 
            this.changedOrder = doc.data()
             })
             
          
            }
           
           
        },

  created(){
      this.fetchItems()  
      console.log("start")
      console.log(this.id) 
      }

      

}
</script>