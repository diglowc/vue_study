<template>
  <div class="postingList">
    <div class="headerTitle">
      <img
        class="headerIcon"
        v-bind:src="require(`@/assets/images/${iconImg}.png`)"
      />
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
  iconImg: string;
  highlight: string;
  highlightColor: string;
  title: string;
}

const props = defineProps<Props>();

console.log(props.title);
</script>

<style lang="scss">
.headerIcon {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}
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
  align-items: center;
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
