<template>
  <div style="height: auto;background-color: #42b983">
    <button @click="click" style="margin-right: 20px" >我要开会</button>
    <button @click="click">会议记录</button>

  </div>
</template>

<script>

  import * as dd from 'dingtalk-jsapi'
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      message: '22222',
      ggg: [],
      params: {
        curentPage: 1,
      },
      result: {},
    };
  },
  created: function () {
    dd.runtime.permission.requestAuthCode({
      corpId: "ding251335d31062a7f535c2f4657eb6378f",
      onSuccess: function(result) {
        dd.device.notification.alert({
          message: "success" + result.code ,
          title: "提示",
          buttonName: "收到",
          onSuccess : function() {

          },
          onFail : function() {}
        });
      },
      onFail : function() {
        alert("error");
      }

    });
  },
  methods: {
    click() {
      alert(33333);
      axios.get('url/ttt', {  params: this.params })
              .then((res) => {
               /*console.log(res);*/
                this.result = res;
              }, function () {
               /* console.log(err);*/
              });
    },
    gggg() {},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  button {
    margin-top: 8px;
    width: 200px;
    height: 80px;
    font-size: 18px;
    border-radius: 18px;
    border: 1px solid grey;
  }
</style>
