<template>
  <input class="inputText" type="text" :value="title" />
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
.inputText {
  flex: 1;
  padding: 20px 15px;
  border-radius: 6px;
  border: 1px solid #dadee2;
  background: #ffffff;
  font-size: 14px;
  color: #404a5c;
  font-family: "Pretendard-Medium";
}
</style>
