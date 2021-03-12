import { Bar } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Number of Dish",
                backgroundColor: ['blue','purple','green',"pink","red","yellow"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        var foodname= {"Pork Fried Rice" :0, "Mapo Tofu":0, "Sambal KangKung":0,
       "Cereal Prawn":0, "Dry Beef Hor Fun":0, "Prawn Omelette":0}
        database.collection('orders').get().then(querySnapShot => {
        let item={}
        querySnapShot.forEach(doc => { 
            item= doc.data()
            for (var i in item ) {
               var previous= parseInt(foodname[i])
               foodname[i]= previous + parseInt(item[i])
        
            }  
        })
        for (var x in foodname){
            this.datacollection.labels.push(x)
            console.log(x + foodname[x])
            this.datacollection.datasets[0].data.push(foodname[x])

        }
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}