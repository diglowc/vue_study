<template>
  <div class="postingList">
    <p class="headerTitle">{{ title }}</p>
    <img class="viewMore" src="@/assets/images/view_more.png" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
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
  width: fit-content;
  font-size: 18px;
  color: #000000;
  font-family: "Pretendard-SemiBold";
}
.viewMore {
  width: 24px;
  height: 24px;
}
</style>
