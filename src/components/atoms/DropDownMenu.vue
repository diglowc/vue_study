<template>
  <div class="inputText" id="dropDownDiv">
    <select class="dropDownSelect">
      <option :value="null">{{ title }}</option>
      <option v-for="item in items" :value="item" :key="item">
        {{ item }}
      </option>
    </select>
    <img class="dropDownIcon" src="@/assets/images/chevron_gray.png" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  title: string;
  items: string[];
}

const props = defineProps<Props>();

console.log(props.title);
</script>

<style lang="scss">
#dropDownDiv {
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  padding-left: 20px;
  padding-right: 12px;
}
.dropDownSelect {
  appearance: none;
  border: none;
  font-size: 14px;
  color: #404a5c;
  font-family: "Pretendard-Medium";
  flex: 1;
  //   드롭다운 아이콘에 가려져 해당 부분 클릭 시 메뉴 펼쳐지지 않는 현상
  //   방지하기 위해 z-index 설정, 백그라운드 투명하게 설정
  background-color: transparent;
  z-index: 2;
}
.dropDownIcon {
  // 다른 화면에서 DropDownMenu 배치할 때 style 속성에 영향받아
  //   사이즈가 이상하게 변하는 문제 발생하여 width, height 고정
  width: 24px !important;
  height: 24px !important;
  margin: 0 !important;
}
</style>
