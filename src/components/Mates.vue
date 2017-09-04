<template>
<ul class="mates">
  <li v-for='mate in mates' :key='mate.id' v-bind:class="{ away: mate.isAway }">
    <img :src="mate.image"/> {{ mate.nickName }}
  </li>
</ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'magic-mates',
  computed: mapGetters({
    mates: 'sortedMates'
  }),
  created () {
    this.$store.dispatch('getAllMates')
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul.mates {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 75px;

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;

    img {
      width: 50px;
      border-radius: 50%;
    }

    &.away{
      color: #4c4c4c;

      img {
        opacity: 0.35;
        filter: grayscale(100%);
      }
    }
  }
}
</style>
