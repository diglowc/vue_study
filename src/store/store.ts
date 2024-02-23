import { createStore } from "vuex";

export default createStore({
  state: {
    nickname: "Hyedesignr",
    introduction: "다양한 서비스 제공을 위해 힘쓰는\n장혜리 디자이너입니다.",
    job: "UX디자이너",
    field: "서비스디자인",
    abilities: ["Figma", "Adobe XD", "Zeplin", "Photoshop"],
  },
  mutations: {
    setNickname(state, newNickname) {
      state.nickname = newNickname;
    },
    setIntroduction(state, newIntroduction) {
      state.introduction = newIntroduction;
    },
    setJob(state, newJob) {
      state.job = newJob;
    },
    setField(state, newField) {
      state.field = newField;
    },
    // 기술스택 삭제에 대한 디자인이 없어 add만 사용하였음.
    addAbility(state, newAbility) {
      state.abilities.push(newAbility);
    },
  },
});
