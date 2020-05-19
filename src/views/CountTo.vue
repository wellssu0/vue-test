<template>
  <div>
    <count-to
      ref="countTo"
      :end-val="endVal"
      :decimals="2"
      @on-animation-end="animationEnd"
    >
      <span slot="previous">$</span>
    </count-to>
    <count-to
      :start-val="2000"
      :end-val='0'
      :decimals="1"
    >
      <span slot="previous">$</span>
    </count-to>
    <button @click="getCountNumber">获取数值</button>
    <button @click="updateEndVal">更新数字</button>
  </div>
</template>
<script>
import CountTo from '@/components/count-to'
export default {
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 100
    }
  },
  methods: {
    getCountNumber () {
      console.log(this.$refs.countTo.getCount())
    },
    updateEndVal () {
      this.endVal += Math.random() * 100
    },
    animationEnd (endVal) {
      console.log(endVal)
    }
  }

}

</script>
