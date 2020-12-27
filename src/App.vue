<template>
  <div id='app'>
    <header id='top'>
      <h2>sample App</h2>
      <ul id='top_right'>
        <li>ログイン</li>
        ｜
        <li>新規登録</li>
      </ul>
    </header>
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app1',
    data() {
      return {
        count:0,
      };
    },
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
  .main{
    width:800px;
    height:400px;
    margin: 100px auto;
    text-align: center;
    border: solid;
  }
  a {
    display:block;
    text-decoration: none;
    color: black;
  }
  #top{
    display: flex;
  }
  #top_right{
    margin-left: auto;
  }
</style>
