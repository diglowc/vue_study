<template>
  <div class="postingList">
    <div class="headerTitle">
      <p class="highlightText" :style="{ color: highlightColor }">
        {{ highlight }}
      </p>
      <p class="mainText">{{ title }}</p>
    </div>
    <img class="viewMore" src="@/assets/images/view_more.png" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  highlight: string;
  highlightColor: string;
  title: string;
}

const props = defineProps<Props>();

console.log(props.title);
</script>

<style lang="scss">
.postingList {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.headerTitle {
  display: flex;
  flex-direction: row;
}
.highlightText,
.mainText {
  width: fit-content;
  font-size: 18px;
  font-family: "Pretendard-SemiBold";
}
.mainText {
  color: #000000;
}
.viewMore {
  width: 24px;
  height: 24px;
}
</style>
