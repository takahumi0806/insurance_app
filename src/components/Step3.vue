<template>
  <div class='main'>
  
  
  ステップ３
    <font-awesome-icon icon='file-alt'></font-awesome-icon>
    ご相談内容をご記入ください<br>
    -ご相談内容-<br>
    <textarea rows='10' cols='60' :value="message" @input="doUpdate"></textarea><br>
    <button><router-link to='/Step2'>前へ戻る</router-link></button>
    <button><router-link to='/Step4'>確認画面</router-link></button>
  </div>
</template>
<script>
export default {
  computed: {
    message() {
      return this.$store.getters.message
    },
  },
  methods: {
    doUpdate(event) {
      // input の値を持ってディスパッチ
      this.$store.dispatch('doUpdate', event.target.value)
    },
  }
}
</script>