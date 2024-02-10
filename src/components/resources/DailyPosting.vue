<template>
  <div class="dailyPosting">
    <button class="bookmarkButton" @click="changeBookmark">
      <img v-bind:src="require(`@/assets/images/${bookmarkIcon}.png`)" />
    </button>
    <img
      class="backImg"
      v-bind:src="require(`@/assets/images/${backImg}.jpg`)"
    />
    <div class="dailyPostingPadding">
      <div class="dailyPostingHeader">
        <p class="dailyPostingTitle">{{ title }}</p>
        <p class="postingViews">조회수 {{ views }}</p>
      </div>
      <p class="dailyPostingContent">{{ content }}</p>
      <div class="tagBox">
        <p class="dailyTag" v-for="tag in tags" v-bind:key="tag">#{{ tag }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { ref } from "vue";

interface Props {
  backImg: string;
  title: string;
  views: number;
  tags: string[];
  content: string;
}

const props = defineProps<Props>();

console.log(props.title);

const bookmarkIcon = ref("bookmark_unchecked");
function changeBookmark() {
  bookmarkIcon.value =
    bookmarkIcon.value === "bookmark_unchecked"
      ? "bookmark_unchecked"
      : "bookmark_unchecked";
  // 아직 bookmark_checked.png가 없음.
  console.log(bookmarkIcon.value);
}
</script>

<style lang="scss">
.dailyPosting {
  flex: 1;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  text-align: left;
  position: relative;
  margin-bottom: 14px;
  padding-bottom: 19px;
}
.bookmarkButton {
  position: absolute;
  right: 12px;
  top: 12px;
  background: none;
  border: 0;
  padding: 0;
}
.bookmarkButton img {
  width: 24px;
  height: 24px;
}
.backImg {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
}
.dailyPostingPadding {
  padding: 0 17px;
}
.dailyPostingHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 0px;
}
.dailyPostingTitle {
  font-size: 16px;
  color: #000000;
  font-family: "Pretendard-Medium";
}
.postingViews {
  font-size: 12px;
  font-family: "Pretendard";
  color: #404a5c;
}
.dailyPostingContent {
  margin-top: 7px;
  color: #6b7684;
  font-size: 14px;
  font-family: "Pretendard-Medium";
}
.tagBox {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
}
.dailyTag {
  font-size: 14px;
  font-family: "Pretendard";
  color: #8b95a1;
  margin-block: 0;
  margin-right: 5px;
}
</style>
