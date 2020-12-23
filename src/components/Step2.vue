<template>
  <div>
    <ul>
      ステップ２
      <font-awesome-icon icon='chalkboard-teacher'></font-awesome-icon>
      以下にお答えください<br>
      現在生命保険に加入されていますか？<br>
      <li><input type='radio' value='はい' v-model='isJoin' v-bind:is-join='true'>はい</li>
      <li><input type='radio' value='いいえ' v-model='isJoin' v-bind:is-join='true'>いいえ</li><br>
    </ul>
    <ul v-if='isJoin'>
      現在入院中ですか？または、または、最近３ヶ月内に医師の診察・検査の結果<br>入院・手術を勧められた事はありますか<br>
      <li><input type='radio' value='はい' v-model='isSurgery' v-bind:is-surgery='true'>はい</li>
      <li><input type='radio' value='いいえ' v-model='isSurgery' v-bind:is-surgery='true'>いいえ</li><br>
    </ul>
    <ul v-if='isSurgery'>
      過去５年以内に、病気や怪我で、手術で、手術を受けた受けたことまたは<br>継続して７日以上の入院をしたことがありますか<br>
      <li><input type='radio' value='はい' v-model='isSick' v-bind:is-sick='true'>はい</li>
      <li><input type='radio' value='いいえ' v-model='isSick' v-bind:is-sick='true'>いいえ</li><br>
    </ul>
  </div>
</template>
<script>
  export default{
    props: {
      isJoin: {
        type: Boolean,
        default: false,
      },
      isSurgery: {
        type: Boolean,
        default: false,
      },
      isSick: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>

<style></style>