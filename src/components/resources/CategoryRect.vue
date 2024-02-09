<template>
  <div class="categoryRectBox" :style="{ backgroundColor: backColor }">
    <p class="categoryTitle">{{ title }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  title: string;
  backColor: string;
}

const props = defineProps<Props>();

console.log(props.title);
console.log(props.backColor);
</script>

<style lang="scss">
.categoryRectBox {
  width: fit-content;
  padding: 3px 8px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.categoryTitle {
  font-size: 14px;
  color: #ffffff;
  font-family: "Pretendard";
  margin-block: 0;
}
</style>
