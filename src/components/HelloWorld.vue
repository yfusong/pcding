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
      authCode:"",
      userInfo:{userId:0,userName:''},
      result: {},
    };
  },
  created: function () {
    dd.ready(function() {
      const that = this;
      that.alterInfo("===  in");
      dd.runtime.permission.requestAuthCode({
        corpId: "ding251335d31062a7f535c2f4657eb6378f",
        onSuccess: function (result) {
          that.authCode = result.code;
          that.alterInfo("===  " + result.code);
          that.login(this.authCode);
        },
        onFail: function () {
          alert("error");
        }

      });
    });
  },
  methods: {
    alterInfo(msg){
      dd.device.notification.alert({
        message:msg,
        title: "提示",
        buttonName: "确定",
        onSuccess : function() {},
        onFail : function() {}
      });
    },
    click() {
      this.requestAuthCode();
      this.login(this.authCode);
    },
    requestAuthCode() {
      dd.runtime.permission.requestAuthCode({
        corpId: "ding251335d31062a7f535c2f4657eb6378f",
        onSuccess: function(result) {
          this.authCode = result.code;
          this.alterInfo(this.authCode);
        },
        onFail : function(err) {
          this.alterInfo(err);
        }

      });
    },

    login(authCode){

      axios.post('http://yufusong.ding.vaiwan.com/dingding/login?authCode=' + authCode) .then((res) => {
        this.alterInfo("登陆。。。" + authCode);
        var userId = res.data.result.userId;
        if (userId == ""){
          this.alterInfo("登陆失败");
        }else{
          this.userInfo.userId = res.data.result.userId;
          this.userInfo.userName = res.data.result.userName;
          this.$store.dispatch('Set_USER_INFO', this.userInfo);

          this.alterInfo(this.$store.state.userInfo.userId + " == " + this.$store.state.userInfo.userName )
        }

      }, function (err) {
        this.alterInfo(err)
      });
    },
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
