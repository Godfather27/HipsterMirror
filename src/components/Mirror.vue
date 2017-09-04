<template>
<div class="mirror">
  <magic-mates class="mates"></magic-mates>
</div>
</template>

<script>
import Mates from '@/components/Mates'

export default {
  name: 'magic-mirror',
  components: {
    'magic-mates': Mates
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
