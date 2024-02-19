<template>
  <div class="abilityCategoryBox" :style="{ backgroundColor: backColor }">
    <p class="abilityCategoryTitle">{{ title }}</p>
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
.abilityCategoryBox {
  width: fit-content;
  padding: 10px 27px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  margin-right: 7px;
}
.abilityCategoryTitle {
  font-size: 14px;
  color: #ffffff;
  font-family: "Pretendard-Medium";
  margin-block: 0;
}
</style>
