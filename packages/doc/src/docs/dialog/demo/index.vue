<template>
  <DemoSection>
    <DemoBlock card :title="basicUsage">
      <van-cell is-link :title="alert1" @click="onClickAlert" />
      <van-cell is-link :title="alert2" @click="onClickAlert2" />
      <van-cell is-link :title="confirm" @click="onClickConfirm" />
    </DemoBlock>

    <DemoBlock card :title="roundButton">
      <van-cell is-link :title="alert1" @click="onClickRound" />
      <van-cell is-link :title="alert2" @click="onClickRound2" />
    </DemoBlock>

    <DemoBlock card :title="asyncClose">
      <van-cell is-link :title="asyncClose" @click="onClickAsyncClose" />
    </DemoBlock>

    <DemoBlock card :title="componentCall">
      <van-cell is-link :title="componentCall" @click="show = true" />
      <van-dialog v-model="show" :title="title" show-cancel-button :lazy-render="false">
        <img :src="image" />
      </van-dialog>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      title: "标题",
      basicUsage: "基础用法",
      alert1: "提示弹窗",
      alert2: "提示弹窗（无标题）",
      confirm: "确认弹窗",
      asyncClose: "异步关闭",
      roundButton: "圆角按钮样式",
      componentCall: "组件调用",
      content: "代码是写出来给人看的，附带能在机器上运行",
      show: false,
      currentRate: 0,
      image: "https://img.yzcdn.cn/vant/apple-3.jpg"
    };
  },

  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: this.title,
        message: this.content
      });
    },

    onClickAlert2() {
      this.$dialog.alert({
        message: this.content
      });
    },

    onClickRound() {
      this.$dialog.alert({
        theme: "round-button",
        title: this.title,
        message: this.content
      });
    },

    onClickRound2() {
      this.$dialog.alert({
        theme: "round-button",
        message: this.content
      });
    },

    onClickConfirm() {
      this.$dialog
        .confirm({
          title: this.title,
          message: this.content
        })
        .catch(() => {
          // on cancel
        });
    },

    onClickAsyncClose() {
      function beforeClose(action, done) {
        if (action === "confirm") {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }

      this.$dialog
        .confirm({
          title: this.title,
          message: this.content,
          beforeClose
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-dialog {
  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
}
</style>
