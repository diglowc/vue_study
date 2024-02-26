<template>
  <!-- MyPage와 동일한 class명을 많이 갖고있어 css는 MyPage 파일 참고 -->
  <div class="myBackImgDiv">
    <img
      class="myBackImg"
      v-bind:src="require(`@/assets/images/${editBackgroundImg}`)"
    />
    <!-- 배경사진 위치에 맞춰 프로필사진 띄우기 위해 배경 div가 프로필 img 태그를 감쌈 -->
    <img
      class="myProfileImg"
      v-bind:src="require(`@/assets/images/${profileImg}`)"
    />
    <img class="getPhotoBtn" src="@/assets/images/plus.png" />
  </div>
  <div class="myInfo">
    <p class="subHeader" style="margin-top: 54px">닉네임</p>
    <InputText :title="nickname" @input="changeNickname($event)" />
    <p class="checkNickname">{{ checkNickname }}</p>

    <p class="subHeader">한줄소개</p>
    <div class="fixTextAreaPadding">
      <InputTextArea
        class="editIntroduction"
        :value="introduction"
        @input="changeIntroduction($event)"
        style="height: 46px"
      />
    </div>

    <p class="subHeader">프로필</p>
    <div class="myProfileBox">
      <DropDownMenu
        title="직무"
        v-bind:items="['UX디자이너', '개발자']"
        @change="changeJob"
      />
      <DropDownMenu
        title="관심분야"
        v-bind:items="['서비스디자인', '백엔드']"
        @change="changeField"
      />
    </div>
    <p class="subHeader">포트폴리오</p>
    <div class="myPortfolioBox">
      <div class="editMyPortfolio">
        <InputText title="포트폴리오 첨부(PDF 권장)" />
        <button class="editPfBtn">수정</button>
      </div>
      <div class="editMyPortfolio">
        <InputText title="링크/URL" />
        <button class="editPfBtn">수정</button>
      </div>
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
    <div class="addAbility">
      <img
        class="addAbilityBtn"
        src="@/assets/images/large_plus_box.png"
        @click="addAbility"
      />
      <input
        class="inputAbility"
        type="text"
        placeholder="기술스택을 추가해보세요"
        @input="inputAbilityText($event)"
      />
    </div>
    <button class="finishEditBtn" @click="finishEdit">입력 완료</button>
  </div>
</template>

<script lang="ts" setup>
import AbilityCategory from "@/components/resources/AbilityCategory.vue";
import InputTextArea from "@/components/atoms/InputTextArea.vue";
import InputText from "@/components/atoms/InputText.vue";
import DropDownMenu from "@/components/atoms/DropDownMenu.vue";

import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";
import router from "@/router";
const store = useStore();
const profileImg = computed(() => store.state.profileImg);
const nickname = computed(() => store.state.nickname);
const introduction = computed(() => store.state.introduction);
const job = computed(() => store.state.job);
const field = computed(() => store.state.field);
const abilities = computed(() => store.state.abilities);
const backColors = computed(() => store.state.backColors);

const editBackgroundImg = ref("add_back_img.png");
const checkNickname = ref("사용가능한 닉네임입니다.");
const newNickname = ref(nickname.value);
const newIntroduction = ref(introduction.value);
const newJob = ref(job.value);
const newField = ref(field.value);

let newAbility = "";

// 닉네임 변경
function changeNickname(event: { target: { value: string } }) {
  event.target.value === ""
    ? (checkNickname.value = "닉네임을 입력하세요.")
    : (checkNickname.value = "사용가능한 닉네임입니다.");
  newNickname.value = event.target.value;
}

// 한줄소개 변경
function changeIntroduction(event: { target: { value: string } }) {
  newIntroduction.value = event.target.value;
}

// 직무 선택시
function changeJob(event: { target: { value: string } }) {
  newJob.value = event.target.value;
}

// 관심분야 선택시
function changeField(event: { target: { value: string } }) {
  newField.value = event.target.value;
}

// 기술스택 입력
function inputAbilityText(event: Event) {
  const target = event.target as HTMLInputElement;
  newAbility = target.value;
}

// 기술스택 추가
function addAbility() {
  store.commit("addAbility", newAbility);
}

// 입력 완료 클릭 시
function finishEdit() {
  if (newNickname.value === "") {
    alert("닉네임을 입력하세요.");
  } else {
    store.commit("setNickname", newNickname);
    store.commit("setIntroduction", newIntroduction);
    store.commit("setJob", newJob);
    store.commit("setField", newField);

    router.push("/mypage");
  }
}
</script>

<style lang="scss">
.getPhotoBtn {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 112px;
  left: 96px;
}
.fixTextAreaPadding {
  // textArea는 크기를 100%로 했을 때 border와 padding 값을
  // 고려하지 않기 때문에 화면 벗어나는 문제 발생.
  // textArea를 둘러싼 div에 padding-right 적용하여 해결
  padding-right: 32px;
}
.editIntroduction {
  width: 100%;
}
.checkNickname {
  color: #7a5df5;
  font-family: "Pretendard-Medium";
  font-size: 12px;
  margin-top: 8px;
}
.editMyPortfolio {
  display: flex;
  position: relative;
}
.editPfBtn {
  border: 0;
  background: none;
  position: absolute;
  right: 17px;
  top: 9px;
  color: #8b95a1;
  font-family: "Pretendard-Medium";
  font-size: 12px;
}
.addAbility {
  display: flex;
  margin-top: 10px;
}
.addAbilityBtn {
  width: 72px;
  height: 37px;
}
.inputAbility {
  border-radius: 6px;
  border: 1px dashed #8b95a1;
  height: 37px;
  margin-left: 7px;
  flex: 1;
  text-align: center;
  color: #8b95a1;
  font-family: "Pretendard-Medium";
  font-size: 14px;
  padding: 0;
}
// focus되면 placeholder 감추기
.inputAbility:focus::placeholder {
  color: transparent;
}
.finishEditBtn {
  flex: 1;
  padding: 17px;
  border: 0;
  border-radius: 6px;
  background: #7a5df5;
  color: #ffffff;
  font-family: "Pretendard-Medium";
  font-size: 16px;
  margin: 48px 0;
}
</style>
