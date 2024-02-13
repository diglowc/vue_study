<template>
  <div class="myBackImg">
    <!-- 배경사진 위치에 맞춰 프로필사진 띄우기 위해 배경 div가 프로필 img 태그를 감쌈 -->
    <img class="myProfileImg" src="@/assets/images/profile1.jpg" />
  </div>
  <div class="myInfo">
    <div class="nameAndEdit">
      <p class="myName">Hyedesignr</p>
      <div class="editProfile">
        <p>프로필 수정</p>
        <img class="intoBtn" src="@/assets/images/chevron-right.png" />
      </div>
    </div>
    <p class="introduction">
      다양한 서비스 제공을 위해 힘쓰는<br />장혜리 디자이너입니다.
    </p>
  </div>
  <hr class="mypage_hr" />
</template>

<script lang="ts" setup></script>

<style lang="scss">
.myBackImg {
  width: 100%;
  height: 117px;
  border-radius: 0 0 58.5px 0;
  background-image: url("@/assets/images/profile_back1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
}
.nameAndEdit,
.editProfile {
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
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 600;
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
</style>
