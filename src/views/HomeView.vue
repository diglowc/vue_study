<template>
  <div class="tabs">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      @click.prevent="currentTab = index"
      :class="{ active: currentTab === index }"
    >
      {{ tab }}
    </button>
  </div>

  <div class="tab_content">
    <!-- 홈 -->
    <div v-show="currentTab == 0">
      <img id="mainImg" src="@/assets/images/main_image.png" />
      <div class="header">
        <img class="headerIcon" src="@/assets/images/notice.png" />
        <PostingListHeader title="모집중인 프로젝트" />
      </div>
    </div>
    <!-- 팀원구인 -->
    <div v-show="currentTab == 1"></div>
    <!-- 포스트 -->
    <div v-show="currentTab == 2">포스트</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentTab = ref(0);
const tabs = ["홈", "팀원구인", "포스트"];

import PostingListHeader from "@/components/resources/PostingListHeader.vue";
</script>

<style lang="scss">
.tabs {
  width: 100%;
  display: flex;
}
.tabs button {
  flex: 1;
  background-color: white;
  border: 0;
  font-family: "Pretendard-Medium";
  font-size: 16px;
  color: #6b7684;
  padding-top: 11px;
  padding-bottom: 12px;
}
button.active {
  color: #000000;
}
#mainImg {
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
}
.header {
  margin: 15px 20px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.headerIcon {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}
</style>
