<template>
  <div>
    <slot name="previous"></slot>
    <span ref="count" :class="styleClass" :id="eleId">{{startVal}}</span>
    <slot name="next"></slot>
  </div>
</template>
<script>
import CountUp from 'countup'
export default {
  name: 'count-to',
  props: {
    /**
     * @description 起始值
    */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 结束值
    */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 样式类名
    */
    className: {
      type: String,
      default: ''
    },
    /**
     *  @description 几位小数
    */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @decription 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 延迟时间
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @decripption 使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 使用分组
     */
    useGrouping: {
      type: Boolean,
      default: false
    },
    /**
     * @description 分组符号
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 整数和小数的分割符号
     */
    decimal: {
      type: String,
      default: '.'
    }

  },
  data () {
    return {
      counter: {}
    }
  },
  computed: {
    styleClass () {
      return 'defaultClass' + this.className
    },
    eleId () {
      return `count_up_${this._uid}`
    }
  },
  watch: {
    // 更新数值
    endVal (newVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  methods: {
    // 拿到现在的数值
    getCount () {
      return +this.$refs.count.innerText
    },
    // emit动画结束事件
    emitEndEvent () {
      setTimeout(() => {
        this.$emit('on-animation-end', +this.getCount())
      }, this.duration * 1000 + 5)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay)
    })
  }
}
</script>
<style scoped>
.defaultClass {
  font-size: 30px;
}
</style>
