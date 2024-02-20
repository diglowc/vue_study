<template>
  <!-- MyPage와 동일한 class명을 많이 갖고있어 css는 MyPage 파일 참고 -->
  <div class="myBackImg" id="editBackImg">
    <!-- 배경사진 위치에 맞춰 프로필사진 띄우기 위해 배경 div가 프로필 img 태그를 감쌈 -->
    <img class="myProfileImg" src="@/assets/images/profile1.jpg" />
    <img class="getPhotoBtn" src="@/assets/images/plus.png" />
  </div>
  <div class="myInfo">
    <p class="subHeader" style="margin-top: 54px">닉네임</p>
    <InputText title="Hyedesigner" />
    <p class="checkNickname">사용가능한 닉네임입니다.</p>

    <p class="subHeader">한줄소개</p>
    <div class="fixTextAreaPadding">
      <InputTextArea class="editIntroduction" style="height: 46px" />
    </div>

    <p class="subHeader">프로필</p>
    <div class="myProfileBox">
      <DropDownMenu title="직무" v-bind:items="['UX디자이너']" />
      <DropDownMenu title="관심분야" v-bind:items="['서비스디자인']" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputTextArea from "@/components/atoms/InputTextArea.vue";
import InputText from "@/components/atoms/InputText.vue";
import DropDownMenu from "@/components/atoms/DropDownMenu.vue";
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
</style>
