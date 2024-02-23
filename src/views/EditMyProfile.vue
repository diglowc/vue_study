<template>
  <!-- MyPage와 동일한 class명을 많이 갖고있어 css는 MyPage 파일 참고 -->
  <div class="myBackImg" id="editBackImg">
    <!-- 배경사진 위치에 맞춰 프로필사진 띄우기 위해 배경 div가 프로필 img 태그를 감쌈 -->
    <img class="myProfileImg" src="@/assets/images/profile1.jpg" />
    <img class="getPhotoBtn" src="@/assets/images/plus.png" />
  </div>
  <div class="myInfo">
    <p class="subHeader" style="margin-top: 54px">닉네임</p>
    <InputText :title="nickname" @input="changeNickname($event)" />
    <p class="checkNickname">{{ checkNickname }}</p>

    <p class="subHeader">한줄소개</p>
    <div class="fixTextAreaPadding">
      <InputTextArea class="editIntroduction" style="height: 46px" />
    </div>

    <p class="subHeader">프로필</p>
    <div class="myProfileBox">
      <DropDownMenu title="직무" v-bind:items="['UX디자이너']" />
      <DropDownMenu title="관심분야" v-bind:items="['서비스디자인']" />
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
      <AbilityCategory :title="abilities[0]" backColor="#1D1D1D" />
      <AbilityCategory :title="abilities[1]" backColor="#450135" />
      <AbilityCategory :title="abilities[2]" backColor="#F69833" />
      <AbilityCategory :title="abilities[3]" backColor="#005294" />
    </div>
    <div class="addAbility">
      <img class="addAbilityBtn" src="@/assets/images/large_plus_box.png" />
      <input
        class="inputAbility"
        type="text"
        placeholder="기술스택을 추가해보세요"
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
const nickname = computed(() => store.state.nickname);
const abilities = computed(() => store.state.abilities);
const checkNickname = ref("사용가능한 닉네임입니다.");

const newNickname = ref("");
function changeNickname(event: { target: { value: string } }) {
  event.target.value === ""
    ? (checkNickname.value = "닉네임을 입력하세요.")
    : (checkNickname.value = "사용가능한 닉네임입니다.");
  newNickname.value = event.target.value;
}

function finishEdit() {
  if (newNickname.value === "") {
    alert("닉네임을 입력하세요.");
  } else {
    store.commit("setNickname", newNickname);

    router.push("/mypage");
  }
}
</script>

<style lang="scss">
#editBackImg {
  background-image: url("@/assets/images/add_back_img.png");
}
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
