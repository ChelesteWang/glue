<template>
  <DemoSection>
    <DemoBlock :title="radioMode">
      <van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex" />
    </DemoBlock>

    <DemoBlock :title="multipleMode">
      <van-tree-select :items="items" :active-id.sync="activeIds" :main-active-index.sync="activeIndex2" />
    </DemoBlock>

    <DemoBlock :title="customContent">
      <van-tree-select height="55vw" :items="simpleItems" :main-active-index.sync="activeIndex3">
        <template #content>
          <van-image v-if="activeIndex3 === 0" :show-loading="false" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <van-image v-if="activeIndex3 === 1" :show-loading="false" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </template>
      </van-tree-select>
    </DemoBlock>

    <DemoBlock :title="showBadge">
      <van-tree-select
        height="55vw"
        :items="badgeItems"
        :active-id.sync="activeId2"
        :main-active-index.sync="activeIndex4"
      />
    </DemoBlock>
  </DemoSection>
</template>

<script>
import { zhCNData } from "./data-zh";
import { deepClone } from "../../../common/utils/deep-clone";

export default {
  data() {
    return {
      basicUsage: "基础用法",
      showBadge: "徽标提示",
      radioMode: "单选模式",
      multipleMode: "多选模式",
      customContent: "自定义内容",
      data: zhCNData,
      dataSimple: [{ text: "分组 1" }, { text: "分组 2" }],
      activeId: 1,
      activeId2: 1,
      activeIds: [1, 2],
      activeIndex: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      activeIndex4: 0
    };
  },

  computed: {
    items() {
      return this.data;
    },

    simpleItems() {
      return this.dataSimple;
    },

    badgeItems() {
      const data = deepClone(this.data).slice(0, 2);

      data[0].dot = true;
      data[1].badge = 5;

      return data;
    }
  }
};
</script>
