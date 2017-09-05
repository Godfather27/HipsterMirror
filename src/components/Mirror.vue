<template>
<div class="mirror">
  <magic-weather></magic-weather>
  <magic-mates class="mates"></magic-mates>
</div>
</template>

<script>
import Mates from '@/components/Mates'
import Weather from '@/components/Weather'

export default {
  name: 'magic-mirror',
  components: {
    'magic-mates': Mates,
    'magic-weather': Weather
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mirror {
  padding: 20px;
  background: black;
  height: 100%;

  color: white;

  .mates {
    width: 250px;
  }
}
</style>
