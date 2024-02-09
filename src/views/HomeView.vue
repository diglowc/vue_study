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
      <div class="tab_element">
        <div class="subHeader">
          <img class="headerIcon" src="@/assets/images/notice.png" />
          <PostingListHeader title="모집중인 프로젝트" />
        </div>
        <ProjectPosting
          smallCategory="사이드 프로젝트"
          smallCategoryColor="#7A5DF5"
          bigCategory="라이프스타일"
          title="사용자 개선 프로젝트 함께하실 분 찾아요!"
          v-bind:tags="['기획자', 'UI디자이너']"
          content="현재 사이드 프로젝트 진행중에 있으며 초기 아이디어 구상은 끝낸 상태입니다. 많이 지원해주세요!!"
        />
        <ProjectPosting
          smallCategory="스타트업"
          smallCategoryColor="#FF26A8"
          bigCategory="라이프스타일"
          title="힙한 인테리어 소품으로 생활을 즐겁게!"
          v-bind:tags="['백엔드']"
          content="집안을 힙하게 꾸며주는 다양한 아이템을 판매하는 서비스를 함께 만들어갈 백엔드 개발자 구해요!"
        />
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
import ProjectPosting from "@/components/resources/ProjectPosting.vue";
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
.tab_element {
  margin: 0 20px;
}
.subHeader {
  margin-top: 15px;
  margin-bottom: 15px;
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
