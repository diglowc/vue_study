<template>
  <div class="myBackImgDiv">
    <img
      class="myBackImg"
      v-bind:src="require(`@/assets/images/${backgroundImg}`)"
    />
    <!-- 배경사진 위치에 맞춰 프로필사진 띄우기 위해 배경 div가 프로필 img 태그를 감쌈 -->
    <img
      class="myProfileImg"
      v-bind:src="require(`@/assets/images/${profileImg}`)"
    />
  </div>
  <div class="myInfo">
    <div class="nameAndEdit">
      <p class="myName">{{ nickname }}</p>
      <nav>
        <router-link class="editProfile" to="/editProfile">
          <p id="editProfileTextBtn">프로필 수정</p>
          <img class="intoBtn" src="@/assets/images/chevron-right.png" />
        </router-link>
      </nav>
    </div>
    <p class="introduction">
      {{ introduction }}
    </p>
  </div>
  <hr class="mypage_hr" />
  <div class="myInfo">
    <p class="subHeader">프로필</p>
    <div class="myProfileBox">
      <ReadonlyInputText :title="job" />
      <ReadonlyInputText :title="field" />
    </div>
    <p class="subHeader">포트폴리오</p>
    <div class="myPortfolioBox">
      <ReadonlyInputText title="포트폴리오 첨부(PDF 권장)" />
      <ReadonlyInputText title="링크/URL" />
    </div>
    <p class="subHeader">기술스택</p>
    <div class="myAbilityBox">
      <AbilityCategory
        v-for="(ability, index) in abilities"
        :key="index"
        :title="ability"
        :backColor="backColors[index % 4]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ReadonlyInputText from "@/components/atoms/ReadonlyInputText.vue";
import AbilityCategory from "@/components/resources/AbilityCategory.vue";

import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const profileImg = computed(() => store.state.profileImg);
const backgroundImg = computed(() => store.state.backgroundImg);
const nickname = computed(() => store.state.nickname);
const introduction = computed(() => store.state.introduction);
const job = computed(() => store.state.job);
const field = computed(() => store.state.field);
const abilities = computed(() => store.state.abilities);
const backColors = computed(() => store.state.backColors);
</script>

<style lang="scss">
.myBackImgDiv {
  width: 100%;
  height: 117px;
  border-radius: 0 0 58.5px 0;
  position: relative;
}
.myBackImg {
  width: 100%;
  height: 117px;
  object-position: center;
  object-fit: cover;
}
.myProfileImg {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100px;
  border: 3px solid #ffffff;
  position: absolute;
  top: 42px;
  left: 24px;
}
.myInfo {
  margin: 0 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
}
.nameAndEdit,
.editProfile,
.myProfileBox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nameAndEdit {
  justify-content: space-between;
  margin-top: 48px;
}
.myName {
  color: #000000;
  font-family: "Pretendard-SemiBold";
  font-size: 24px;
}
#editProfileTextBtn {
  color: #8b95a1;
}
.intoBtn {
  width: 24px;
  height: 24px;
}
.introduction {
  font-size: 16px;
  color: #000000;
  margin-top: 13px;
}
.mypage_hr {
  height: 2px;
  background-color: #f2f4f6;
  border: 0;
  margin-top: 16px;
}
.subHeader {
  color: #000;
  font-family: "Pretendard-Medium";
  font-size: 16px;
  margin-top: 34px;
}
.myProfileBox :nth-child(n + 2) {
  margin-left: 8px;
}
.myProfileBox :nth-child(n) {
  width: 50%;
}
.myPortfolioBox {
  display: flex;
  flex-direction: column;
}
.myPortfolioBox :nth-child(n + 2) {
  margin-top: 12px;
}
.myAbilityBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
