<template>
  <div class="mainHeader">
    <nav>
      <router-link class="logo" to="/home">
        <p class="logoText">BeVelop</p>
        <img class="logoMenu" src="@/assets/images/chevron.png" />
      </router-link>
    </nav>
    <nav>
      <router-link to="/mypage">
        <img class="mypageIcon" src="@/assets/images/mypage.png" />
      </router-link>
      <router-link to="/about">
        <img class="alarmIcon" src="@/assets/images/alarm.png" />
      </router-link>
    </nav>
  </div>

  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Pretendard";
  src: url("assets/fonts/Pretendard-Regular.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-ExtraLight";
  src: url("assets/fonts/Pretendard-ExtraLight.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-Light";
  src: url("assets/fonts/Pretendard-Light.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-Medium";
  src: url("assets/fonts/Pretendard-Medium.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-SemiBold";
  src: url("assets/fonts/Pretendard-SemiBold.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-Bold";
  src: url("assets/fonts/Pretendard-Bold.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-ExtraBold";
  src: url("assets/fonts/Pretendard-ExtraBold.otf");
  font-weight: 400;
  font-style: normal;
}
.mainHeader,
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.mainHeader {
  justify-content: space-between;
  margin: 11px 20px;
}
.logoText {
  font-size: 22px;
  font-family: "Pretendard";
  font-weight: 500;
  color: #000000;
}
.logoMenu {
  margin-left: 7px;
  width: 24px;
  height: 24px;
}
.mypageIcon,
.alarmIcon {
  width: 24px;
  height: 24px;
}
.alarmIcon {
  margin-left: 12px;
}
</style>
