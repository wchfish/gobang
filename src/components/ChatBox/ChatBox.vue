<template>
  <div class="chat-box-container">
    <div class="content-wrapper" ref="contentWrapper">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="message-item animate__animated animate__fadeIn"
      >
        <span class="text">
          {{ message }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { messages as mockData } from "./mockData";
const maxCount = mockData && mockData.length;

export default {
  name: "chat-box",
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.testInterval();
    console.log(this.$refs.contentWrapper);
  },
  methods: {
    testInterval() {
      let index = 0;
      const timer = setInterval(() => {
        if (index < maxCount) {
          this.setContentWrapperHeight();
          
          this.messages.push(mockData[index]);
          index++;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    },
    setContentWrapperHeight() {
      const elem_contentWrapper = document.querySelector(".content-wrapper");
      const curWrapperHeight = elem_contentWrapper.getBoundingClientRect().height;
      const elem_box = document.querySelector(".chat-box-container");
      const boxHeight = elem_box.getBoundingClientRect().height;
      const delt = 34;
      const nextWrapperHeight = curWrapperHeight + delt
      if (boxHeight < nextWrapperHeight) {
        elem_contentWrapper.style.height = `${nextWrapperHeight}px`;
        elem_box.scrollTop = nextWrapperHeight - boxHeight;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./ChatBox.scss"></style>