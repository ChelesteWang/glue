<template>
  <DemoSection>
    <DemoBlock ref="basicUsage" :title="basicUsage">
      <van-password-input
        :value="value.basicUsage"
        :focused="current === 'basicUsage'"
        @focus="current = 'basicUsage'"
      />
    </DemoBlock>

    <DemoBlock ref="customLength" :title="customLength">
      <van-password-input
        :value="value.customLength"
        :length="4"
        :focused="current === 'customLength'"
        @focus="current = 'customLength'"
      />
    </DemoBlock>

    <DemoBlock ref="addGutter" :title="addGutter">
      <van-password-input
        :value="value.addGutter"
        :gutter="10"
        :focused="current === 'addGutter'"
        @focus="current = 'addGutter'"
      />
    </DemoBlock>

    <DemoBlock ref="removeMask" :title="removeMask">
      <van-password-input
        :mask="false"
        :value="value.removeMask"
        :focused="current === 'removeMask'"
        @focus="current = 'removeMask'"
      />
    </DemoBlock>

    <DemoBlock ref="showInfo" :title="showInfo">
      <van-password-input
        :info="info"
        :value="value.showInfo"
        :error-info="errorInfo"
        :focused="current === 'showInfo'"
        @focus="current = 'showInfo'"
      />
    </DemoBlock>

    <van-number-keyboard :show="!!current" @blur="current = ''" @input="onInput" @delete="onDelete" />
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      info: "密码为 6 位数字",
      showInfo: "提示信息",
      addGutter: "格子间距",
      errorInfo: "密码错误",
      removeMask: "明文展示",
      customLength: "自定义长度",
      value: {
        showInfo: "123",
        addGutter: "123",
        basicUsage: "123",
        removeMask: "123",
        customLength: "123"
      },
      current: "basicUsage"
    };
  },

  watch: {
    current(value) {
      if (value) {
        const el = this.$refs[value].$el;
        const { top } = el.getBoundingClientRect();
        window.scrollTo(0, window.pageYOffset + top);
      }
    }
  },

  methods: {
    onInput(key) {
      const { value, current } = this;
      const maxlegnth = current === "customLength" ? 4 : 6;
      const newValue = (value[current] + key).slice(0, maxlegnth);

      value[current] = newValue;

      if (current === "showInfo" && newValue.length === 6 && newValue !== "123456") {
        this.errorInfo = this.errorInfo;
      }
    },
    onDelete() {
      const { value, current } = this;
      value[current] = value[current].slice(0, value[current].length - 1);

      if (current === "showInfo") {
        this.errorInfo = "";
      }
    }
  }
};
</script>

<style lang="less">
.demo-password-input {
  min-height: 140vh;
}
</style>
