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
    <p v-if='count == 0'>
      <Step1 />
      <button v-on:click='goNext(1)'>次へ進む</button>
    </p>
    <p v-else-if='count == 1'>
      <Step2 />
      <button v-on:click='goBack(1)'>前へ戻る</button>
      <button v-on:click='goNext(1)'>次へ進む</button>
    </p>
    <p v-else>
      <Step3 />
      <button v-on:click='goBack(1)'>前へ戻る</button>
      <button>次へ進む</button>
    </p>
  </div>
</template>
<script>
import Step1 from './components/Step1';
import Step2 from './components/Step2';   
import Step3 from './components/Step3';   
export default {
  name: 'app1',
  components: {Step1, Step2, Step3},
  data() {
    return {
      count:0,
    };
  },
  methods: {
    goNext(value){
      this.count += value;
    },
    goBack(value){
      this.count -= value;
    },
  }
};
</script>
<style>
ul {
  list-style: none;
  padding-left: 0px;
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


