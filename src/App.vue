<template>
  <div id='app1'>
    <header id='top'>
      <h2>sample App</h2>
      <ul id='top_right'>
        <li>ログイン</li>
        ｜
        <li>新規登録</li>
      </ul>
    </header>
    {{checkbox()}}
    <p v-if='count == 0'>
      ステップ１
      <font-awesome-icon icon='id-card'></font-awesome-icon>
      お客様の情報を入力して下さい<br>
      -性別-<br>
      <input type='radio' name='sex' id='man' v-model='checked'>
      <label for='man'>男性</label>
      <input type='radio' name='sex' id='woman' v-model='checked'>
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
    日<br>
    <button v-on:click='goNext(1)'>次へ進む</button>
    </p>
    <p v-else-if='count == 1'>
      <ul>
        ステップ２
        <font-awesome-icon icon='chalkboard-teacher'></font-awesome-icon>
        以下にお答えください<br>
        現在生命保険に加入されていますか？<br>
        <li><input type='radio' value='はい' v-model='nowCheck'>はい</li>
        <li><input type='radio' value='いいえ' v-model='nowCheck'>いいえ</li><br>
      </ul>
      <ul v-if='nowCheck'>
        現在入院中ですか？または、または、最近３ヶ月内に医師の診察・検査の結果<br>入院・手術を勧められた事はありますか<br>
        <li><input type='radio' value='はい' v-model='surgeryCheck'>はい</li>
        <li><input type='radio' value='いいえ' v-model='surgeryCheck'>いいえ</li><br>
      </ul>
      <ul v-if='surgeryCheck'>
        過去５年以内に、病気や怪我で、手術で、手術を受けた受けたことまたは<br>継続して７日以上の入院をしたことがありますか<br>
        <li><input type='radio' value='はい' v-model='sickCheck'>はい</li>
        <li><input type='radio' value='いいえ' v-model='sickCheck'>いいえ</li><br>
      </ul>
      <button v-on:click='goBack(1)'>前へ戻る</button>
      <button v-on:click='goNext(1)'>次へ進む</button>
    </p>
    <p v-else>
      ステップ３
      <font-awesome-icon icon='file-alt'></font-awesome-icon>
      ご相談内容をご記入ください<br>
      -ご相談内容-<br>
      <textarea rows='10' cols='60'></textarea><br>
      <button v-on:click='goBack(1)'>前へ戻る</button>
      <button>次へ進む</button>
    </p>
  </div>
</template>
<script>
export default {
  name: 'app1',
  data() {
    return {
      count:0,
      nowCheck: '',
      surgeryCheck: '',
      sickCheck:'',
    };
  },
  methods: {
    goNext: function(value){
      this.count += value;
    },
    goBack: function(value){
      this.count -= value;
    },
     checkbox: function(){
      
     },
  }
};
</script>
<style>
ul {
  list-style: none;
}
li{
    display:inline;
}
p{
  width:800px;
  height:400px;
  margin: 100px auto;
  text-align: center;
}
#top{
  display: flex;
}
#top_right{
  margin-left: auto;
}
p{
  border: solid;
}
</style>
