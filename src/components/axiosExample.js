import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          labels: [],
          datasets: [
              {
                label: 'west',
                borderColor: 'pink',
                data: [],
                fill: false,
                gradientFill: true,
              }, 
              {
                  label: 'national',
                  borderColor:'blue', 
                  data: [],
                  fill: false
              },
              {
                  label: 'east',
                  borderColor: 'red', 
                  data: [],
                  fill: false
              },
              {
                  label: 'central',
                  borderColor: 'purple', 
                  data: [],
                  fill: false
              },
              {
                  label: 'south',
                  borderColor: 'green', 
                  data: [],
                  fill: false
              },
              {
                  label: 'north',
                  borderColor: 'yellow',
                  data: [],
                  fill: false
              },
              
            ]
          
      },
        options: {
          maintainAspectRatio: false,
          
           
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://api.data.gov.sg/v1/environment/psi?date=2021-02-23').then(response=>{
          response.data.items.forEach((item) => {
            this.chartdata.labels.push(item.timestamp)
            this.chartdata.datasets[0].data.push(item.readings.psi_twenty_four_hourly.west)
            this.chartdata.datasets[1].data.push(item.readings.psi_twenty_four_hourly.national)
            this.chartdata.datasets[2].data.push(item.readings.psi_twenty_four_hourly.east)
            this.chartdata.datasets[3].data.push(item.readings.psi_twenty_four_hourly.central)
            this.chartdata.datasets[4].data.push(item.readings.psi_twenty_four_hourly.south)
            this.chartdata.datasets[5].data.push(item.readings.psi_twenty_four_hourly.north)

          })
            
        
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}