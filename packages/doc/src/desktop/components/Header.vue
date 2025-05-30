<template>
  <div class="van-doc-header">
    <div class="van-doc-row">
      <div class="van-doc-header__top">
        <a class="van-doc-header__logo">
          <img :src="config.logo" />
          <span>{{ config.title }}</span>
        </a>

        <ul class="van-doc-header__top-nav">
          <li ref="type" v-if="type" class="van-doc-header__top-nav-item">
            <span class="van-doc-header__cube van-doc-header__version" @click="toggleTypePop">
              {{ type }}
              <transition name="van-doc-dropdown">
                <div v-if="showTypePop" class="van-doc-header__version-pop">
                  <div
                    v-for="(item, index) in types"
                    :key="index"
                    class="van-doc-header__version-pop-item"
                    @click="onSwitchType(item)"
                  >
                    {{ item.label }}
                  </div>
                </div>
              </transition>
            </span>
          </li>
          <li ref="version" v-if="versions" class="van-doc-header__top-nav-item">
            <span class="van-doc-header__cube van-doc-header__version" @click="toggleVersionPop">
              {{ packageVersion }}
              <transition name="van-doc-dropdown">
                <div v-if="showVersionPop" class="van-doc-header__version-pop">
                  <div
                    v-for="(item, index) in versions"
                    :key="index"
                    class="van-doc-header__version-pop-item"
                    @click="onSwitchVersion(item)"
                  >
                    {{ item.label }}
                  </div>
                </div>
              </transition>
            </span>
          </li>

          <li v-if="langLabel && langLink" class="van-doc-header__top-nav-item">
            <a class="van-doc-header__cube" :href="langLink">
              {{ langLabel }}
            </a>
          </li>
          <li v-for="(item, index) in config.links" :key="index" class="van-doc-header__top-nav-item">
            <a class="van-doc-header__link" target="_blank" :href="item.url">
              <img v-if="item.logo" :src="item.logo" />
              <span v-else-if="item.text">
                {{ item.text }}
              </span>
            </a>
          </li>
          <!-- <search-input
            v-if="searchConfig"
            :lang="lang"
            :search-config="searchConfig"
          /> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import SearchInput from "./SearchInput";
// import { packageVersion } from "site-desktop-shared";
export default {
  name: "VanDocHeader",

  components: {
    // SearchInput
  },

  props: {
    lang: String,
    config: Object,
    versions: Array,
    types: Array,
    langConfigs: Array
  },

  data() {
    return {
      packageVersion: "1.0.0",
      type: "Vue2",
      showVersionPop: false,
      showTypePop: false
    };
  },
  mounted() {
    console.log(this.config, "config");
  },
  computed: {
    langLink() {
      console.log(this.$route, "this.$route");
      return `#${this.$route.path.replace(this.lang, this.anotherLang.lang)}`;
    },

    langLabel() {
      console.log(this.anotherLang, "this.anotherLang");
      return this.anotherLang.label;
    },

    anotherLang() {
      console.log(this.langConfigs, this.lang, "this.langConfigs");
      //筛选默认语言配置文件
      const items = this.langConfigs.filter(item => item.lang == this.lang);
      if (items.length) {
        console.log(items[0], "items[0]");
        return items[0];
      }

      return {};
    },

    searchConfig() {
      return this.config.searchConfig;
    }
  },

  methods: {
    toggleTypePop() {
      const val = !this.showTypePop;

      //   const action = val ? "add" : "remove";
      //   document.body[`${action}EventListener`](
      //     "click",
      //     this.checkHideVersionPop
      //   );

      this.showTypePop = val;
      console.log(this.showTypePop, this.types, "this.showTypePop");
    },
    toggleVersionPop() {
      const val = !this.showVersionPop;

      //   const action = val ? "add" : "remove";
      //   document.body[`${action}EventListener`](
      //     "click",
      //     this.checkHideVersionPop
      //   );

      this.showVersionPop = val;
    },

    checkHideVersionPop(event) {
      if (!this.$refs.version.contains(event.target)) {
        this.showVersionPop = false;
      }
    },

    onSwitchLang(lang) {
      console.log(lang, "langlanglang");
      const { type, path } = this.$route.meta;
      this.$router.push(`/${type}/${lang}/${path}`);
    },
    onSwitchType(item) {
      this.type = item.label;
      const { lang, path } = this.$route.meta;
      this.$router.push(`/${item.label}/${lang}/${path}`);
    },
    onSwitchVersion(version) {
      console.log(version, "versionversionversion");
      if (version.link) {
        location.href = version.link;
      }
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../common/style/var";

.van-doc-header {
  width: 100%;
  background-color: #001938;
  user-select: none;

  &__top {
    display: flex;
    align-items: center;
    height: @van-doc-header-top-height;
    padding: 0 @van-doc-padding;

    &-nav {
      flex: 1;
      font-size: 0;
      text-align: right;

      > li {
        position: relative;
        display: inline-block;
        vertical-align: middle;
      }

      &-item {
        margin-left: 16px;
      }

      &-title {
        display: block;
        font-size: 15px;
      }
    }
  }

  &__cube {
    position: relative;
    display: block;
    padding: 0 12px;
    color: #001938;
    background: #f7f8fa;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  &__version {
    padding-right: 20px;

    &::after {
      position: absolute;
      top: 10px;
      right: 9px;
      width: 5px;
      height: 5px;
      color: #001938;
      border: 1px solid;
      border-color: transparent transparent currentColor currentColor;
      transform: rotate(-45deg);
      content: "";
    }

    &-pop {
      position: absolute;
      top: 34px;
      left: 0;
      width: 100px;
      z-index: 99;
      color: #333;
      line-height: 36px;
      text-align: left;
      overflow: hidden;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 12px #ebedf0;
      transform-origin: top;
      transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

      &-item {
        padding-left: 12px;
        transition: 0.2s;

        &:hover {
          color: @van-doc-blue;
          background-color: #f7f8fa;
        }
      }
    }
  }

  &__logo {
    display: block;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 28px;
      margin-right: 12px;
    }

    span {
      color: #fff;
      font-size: 22px;
    }
  }

  &__link {
    span {
      color: #fff;
      font-size: 16px;
    }

    img {
      display: block;
      width: 30px;
      height: 30px;
      transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.van-doc-dropdown {
  &-enter,
  &-leave-active {
    transform: scaleY(0);
    opacity: 0;
  }
}
</style>
