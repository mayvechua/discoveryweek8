<template>
<div> 
    <h3> MENU </h3>
      <ui v-for= "item2 in selecteditems" :key="item2">
    
         <h3> {{item2[0]}} X {{item2[1]}}</h3>
   

  </ui>
         <button v-on:click.prevent="findTotal();sendOrder();"> FIND TOTAL </button>
         <h4>$ {{this.subtotal}} </h4>
         <h4>$ {{this.grandtotal.toFixed(2)}} </h4>

</div>
</template>

<script>
import database from './firebase.js'
  export default {
    data(){
        return {
        subtotal:0 ,
        grandtotal : 0
        }
    },
    props: {
      selecteditems: {
        type: Array
      }
    }, methods: {
        findTotal: function() {
          this.subtotal=0
          this.grandtotal=0
            console.log(this.selecteditems.length)
            for (let i = 0; i < this.selecteditems.length; i++) {
                var curr_item = this.selecteditems[i];
                this.subtotal+= curr_item[1] * curr_item[2]
                console.log( curr_item[1] * curr_item[2])

            }
            this.grandtotal = this.subtotal*1.07
        },
        

        sendOrder:function(){
          var ref = database.collection('orders').doc();//creating a new doc with id reference alr 
          var data = new Object();
          database.collection('menu').get().then((querySnapShot)=> {
            let item={}
              querySnapShot.forEach(doc => {
                  item= doc.data()
                  var foodname = item.name;
                  data[foodname]=0;
              })

          ref.set(data).then(()=>{location.reload()})
           for (let i = 0; i < this.selecteditems.length; i++) {
              var newitem = new Object();
              newitem[this.selecteditems[i][0]]=this.selecteditems[i][1];
              ref.update(newitem)
           }
          })

          }
         
         
      
    }
  }
</script>

<style></style>