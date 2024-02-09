<template>
  <div class="projectPosting">
    <!-- <button>
      <img src="@/assets/images/" />
    </button> -->
    <div class="projectCategoryBox">
      <CategoryRect :="{ title: smallCategory }" back-color="#7A5DF5" />
      <CategoryRect :="{ title: bigCategory }" back-color="black" />
    </div>
    <p class="projectPostingTitle">{{ title }}</p>
    <div class="tagBox">
      <p class="tag" v-for="tag in tags" v-bind:key="tag">#{{ tag }}</p>
    </div>
    <p class="projectPostingContent"></p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  smallCategory: string;
  bigCategory: string;
  title: string;
  tags: string[];
}

const props = defineProps<Props>();

console.log(props.smallCategory);
console.log(props.bigCategory);
console.log(props.title);

// function getCategoryTitle() {
//   return props.smallCategory;
// }
import CategoryRect from "@/components/resources/CategoryRect.vue";
</script>

<style lang="scss">
.projectPosting {
  flex: 1;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  padding: 14px;
  text-align: left;
}
.projectCategoryBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.projectPostingTitle {
  margin-top: 18px;
  margin-bottom: 0px;
  font-size: 16px;
  color: #000000;
  font-family: "Pretendard-Medium";
}
.tagBox {
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
}
.tag {
  font-size: 13px;
  color: #8b95a1;
  margin-block: 0;
  margin-right: 5px;
}
.projectPostingContent {
  margin-top: 18px;
  color: #6b7684;
  font-size: 14px;
  font-family: "Pretendard-Medium";
}
</style>
