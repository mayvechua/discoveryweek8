<template>
   <div>
     <h2> Orders </h2>
    <bar-chart></bar-chart>
  <br> <br> 
    <h2> PSI </h2>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import LineChart from './components/AxiosComp.vue'
export default {
  name: 'app',
  components: {
    BarChart, LineChart
  }
}
</script>