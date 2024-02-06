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
    <div v-show="currentTab == 0">홈</div>
    <!-- 팀원구인 -->
    <div v-show="currentTab == 1">팀원구인</div>
    <!-- 포스트 -->
    <div v-show="currentTab == 2">포스트</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentTab = ref(0);
const tabs = ["홈", "팀원구인", "포스트"];
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
}
button.active {
  color: #000000;
}
</style>
