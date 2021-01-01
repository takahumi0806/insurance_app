<template>
  <div>
    <p>-性別-</p>
      <div>{{ gender }}</div>
    <p>-生年月日-</p>
      <div>{{year}}{{month}}月{{day}}日</div>
    <p> 現在生命保険に加入されていますか？</p>
      <div>{{join}}</div>
    <p>現在入院中ですか？または、または、最近３ヶ月内に医師の診察・検査の結果<br>入院・手術を勧められた事はありますか?</p>
      <div>{{surgery}}</div>
    <p>過去５年以内に、病気や怪我で、手術で、手術を受けた受けたことまたは<br>継続して７日以上の入院をしたことがありますか</p>
      <div>{{sick}}</div>
    <p>-ご相談内容-</p>
      <div>{{message}}</div>
    <button ><router-link to='/step3'>前へ戻る</router-link></button>
    <button>送信</button>
  </div>
</template>

<script>
export default {
  props: {
      isJoin: {
        type: Boolean,
        default: false,
      },
    },
  name: 'header-sample',
 
  computed: {
    gender() {
      return this.$store.getters.gender
    },
    year() {
      return this.$store.getters.year
    },
    month() {
      return this.$store.getters.month
    },
    day() {
      return this.$store.getters.day
    },
    join() {
      return this.$store.getters.join
    },
    surgery() {
      return this.$store.getters.surgery
    },
    sick() {
      return this.$store.getters.sick
    },
    message() {
      return this.$store.getters.message
    },
  },
  methods: {
    addLast: function(value){
      this.$store.state.push({gender: value})
    }
  }
}
</script>