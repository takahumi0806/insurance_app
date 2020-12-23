<template>
  <ul>
    ステップ1
    <font-awesome-icon icon='id-card'></font-awesome-icon>お客様の情報を入力して下さい<br>
    -性別-<br>
    <li><input type='radio' name='sex' id='man' v-model='checked'></li>
    <label for='man'>男性</label>
    <li><input type='radio' name='sex' id='woman' v-model='checked'></li>
    <label for='woman'>女性</label><br>
    -生年月日-<br>
    <select>
      <option v-for='(n, key) in 93' :key='key' value='n'>{{n+1925}}年
      <option v-if='n < 64'> (昭和{{n}})</option>
      <option v-else-if='n < 94'> (平成{{n-63}})</option>
      </option>
    </select>
     年
    <select>
      <option v-for='(n, key) in 12' :key='key' value='n'>{{n}}</option>
    </select>
      月
    <select>
      <option v-for='(n, key) in 31' :key='key' value='n'>{{n}}</option>
    </select>
      日
  </ul>
</template>

<script></script>

<style></style>