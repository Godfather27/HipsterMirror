<template>
<div class="weather">
  <img :src='"https://openweathermap.org/img/w/"+weather.weather[0].icon+".png"'/>
  {{weather.weather[0].description}}<br/>
  Temperatur: {{weather.main.temp}}°C<br/>
  Feuchtigkeit: {{weather.main.humidity}}%
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'magic-weather',
  computed: mapGetters({
    weather: 'weather'
  }),
  created () {
    this.$store.dispatch('getCurrentWeather')
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
