<template>
  <div class="main">
    ステップ1
    <font-awesome-icon icon='id-card'></font-awesome-icon>お客様の情報を入力して下さい<br>
    -性別-<br>
    <ul>
      <li><input name='gender' type='radio' value='男性' v-on:click='doGender'>男性</li>
      <li><input name='gender' type='radio' value='女性' v-on:click='doGender'>女性</li>
    </ul>
    -生年月日-<br>
    <select v-on:change='doYear'>
      <option v-for='(n, key) in 93' :key='key'>{{n+1925}}年
      <option v-if='n < 64'> (昭和{{n}})</option>
      <option v-else-if='n < 94'> (平成{{n-63}})</option>
      </option>
    </select>
    <span>年</span>

    <select v-on:change='doMonth'>
      <option v-for='(n, key) in 12' :key='key' >{{n}}</option>
    </select>
    <span>月</span>

    <select v-on:change='doDay'>
      <option v-for='(n, key) in 31' :key='key'>{{n}}</option>
    </select>
    <span>日</span><br>
    <button><router-link to='/Step2'>次へ進む</router-link></button>
  </div>
</template>

<script>
  export default {
  methods: {
    doGender(event) {
      this.$store.dispatch('doGender', event.target.value)
    },
    doYear(event) {
      this.$store.dispatch('doYear', event.target.value)
    },
    doMonth(event) {
      this.$store.dispatch('doMonth', event.target.value)
    },
    doDay(event) {
      this.$store.dispatch('doDay', event.target.value)
    },
  }
}
</script>

<style></style>