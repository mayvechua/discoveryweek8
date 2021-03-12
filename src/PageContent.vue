<template>
<div>
      <tr>
        <th>
  <ul id='itemsList'>
    <li v-for= "item1 in itemsList" :key="item1.name" >
        <h3> {{item1.name}} </h3>
        <br> <br>
        <img v-bind:src="item1.ImageUrl">
        <h4> ${{item1.price}}  </h4>
        <QuantiCounter  v-bind:items= "item1" v-on:counter="onCounter"> </QuantiCounter>
    </li>
  </ul>
  </th>
  <th>

         <basket v-bind:selecteditems = "itemsSelected" id='itemsList'></basket>
 </th>

</tr>
 

</div>
</template>

<script>

 import Basket from "./Basket.vue"
 import database from './firebase.js'
  export default {
  
     
    data() {
      return {
          itemsSelected:[],
            itemsList: []
      }},
      components:{
    "basket":Basket },
    methods:{
        onCounter: function (item, count) {
      if (this.itemsSelected.length === 0 && count > 0) {
        //If there is nothing in items selected, push the ORDER in
        this.itemsSelected.push([item.name, count, item.price]);
      } else {
               // Loop through everything to check what is not in the basket
        var inside = false;
        for (let i = 0; i < this.itemsSelected.length; i++) {
          var curr_item = this.itemsSelected[i];
          var item_name = curr_item[0];
          
          if (item_name == item.name && count > 0 ) {
              this.itemsSelected[i][1] = count;
               inside=true;
          } 
          if (item_name == item.name && count == 0) {
              this.itemsSelected.remove(i)
            inside=true;
            
          } 
          }
          if (!inside) {
              this.itemsSelected.push([item.name, count, item.price]);
          }

          // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected

          // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.

          // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
    
        }
   
        
           
      }
    ,
    fetchItems:function(){
      database.collection('menu').get().then((querySnapShot)=>{
        let item_2={}
        querySnapShot.forEach(doc=>{
            item_2=doc.data()
            item_2.show=false
            item_2.id=doc.id
            this.itemsList.push(item_2) 
            })      })    
        },
         
        },
  created(){
      this.fetchItems()    
      }

  
}
</script>

<style>
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
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
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}





</style>