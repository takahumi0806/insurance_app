<template>
  <div class='main'>
    <ul>
      ステップ２
      <font-awesome-icon icon='chalkboard-teacher'></font-awesome-icon>
      以下にお答えください<br>
      現在生命保険に加入されていますか？<br>
      <li><input name='join' type='radio' value='はい'  v-model='isJoin' @click='doJoin'>はい</li>
      <li><input name='join' type='radio' value='いいえ'  v-model='isJoin'  @click='doJoin'>いいえ</li>
    </ul>
    <ul v-if='isJoin'>
      現在入院中ですか？または、または、最近３ヶ月内に医師の診察・検査の結果<br>入院・手術を勧められた事はありますか?<br>
      <li><input name='surgery' type='radio' value='はい' v-model='isSurgery' @click='doSurgery'>はい</li>
      <li><input name='surgery' type='radio' value='いいえ' v-model='isSurgery' @click='doSurgery'>いいえ</li>
    </ul>
    <ul v-if='isSurgery'>
      過去５年以内に、病気や怪我で、手術で、手術を受けた受けたことまたは<br>継続して７日以上の入院をしたことがありますか<br>
      <li><input name='sick' type='radio' value='はい' @click='doSick'>はい</li>
      <li><input name='sick' type='radio' value='いいえ' @click='doSick'>いいえ</li>
    </ul>
    <button><router-link to='/'>前へ戻る</router-link></button>
    <button ><router-link to='/step3'>次へ進む</router-link></button>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        isJoin: false,
        isSurgery: false,
        isSick: false,
      }
    },
    methods: {
      doJoin(event) {
      this.$store.dispatch('doJoin', event.target.value)
    },
      doSurgery(event) {
        this.$store.dispatch('doSurgery', event.target.value)
      },
      doSick(event) {
        this.$store.dispatch('doSick', event.target.value)
      },
    } 
  }
</script>
<style></style>