<template>
  <div class="home-container">
    <Monto />
    <AreaChart />
  </div>
</template>

<script>
import Monto from '@components/Monto.vue';
import AreaChart from '@components/AreaChart.vue';

export default {
  components: {
    Monto,
    AreaChart
  }
};
</script>

<style scoped>

.home-container{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media screen and (min-width: 768px) {
  
  .home-container{
    flex-direction: row;
  }

}

</style>