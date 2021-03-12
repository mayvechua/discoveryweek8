<template>
  <div>

<ul >
    <li v-for="order in orders" v-bind:key="order.name" >
       Cereal Prawn: {{order[1]["Cereal Prawn"]}}
       <br>
           Dry Beef Hor Fun: {{order[1]["Dry Beef Hor Fun"]}}
           <br>
             Mapo Tofu: {{order[1]["Mapo Tofu"]}}
             <br>
              Pork Fried Rice: {{order[1]["Pork Fried Rice"]}}
              <br>
               Prawn Omelette : {{order[1]["Prawn Omelette"]}}
               <br>
               Sambal KangKung: {{order[1]["Sambal KangKung"]}}
               <br>
               <button v-bind:id="order[0]" v-on:click="deleteItem($event)"> Delete </button>
               <button  v-bind:id="order[0]" v-on:click="route($event)"> Modify </button>
          
    </li>
    
         </ul >
      
  </div>
</template>
<script>
import database from './firebase.js'
export default {
  data(){
      
    return{
        orders: [],
        id_modify:0,
        id:0
        }
  },
  methods:{
    route:function(event){
        console.log(event.target.getAttribute("id"))
        this.$router.push({ path: '/modify' ,name: 'modify',params: {id:event.target.getAttribute("id")}}
        
        )
    },
    fetchItems:function(){
      database.collection('orders').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{
            item=doc.data()
            item.show=false
            item.id=doc.id
            this.orders.push([doc.id,doc.data()]) 
            })      })    
        },
        deleteItem:function(event){
            var doc_id = event.target.getAttribute("id")
            console.log(doc_id)
            database.collection('orders').doc(doc_id).delete().then(()=>{location.reload()});

        }
         
        },

  created(){
      this.fetchItems()    
      }

  
}
</script>

<style>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}

</style>