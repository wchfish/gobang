<template>
  <div class="chat-box-container">
    <div class="content-wrapper" ref="contentWrapper">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="message-item animate__animated animate__fadeIn"
      >
        <span class="name">ai</span>
        <span class="triangle"></span>
        <span class="text">
          {{ message }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "chat-box",
  computed: {
    ...mapState({
      messages: state => state.chat.chatItems
    })
  },
  watch:{
    messages(val) {
      this.setContentWrapperHeight();
      if (val.length === 0) {
        this.goTop()
      }
    }
  },
  mounted() {},
  methods: {
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
    goTop() {
      const elem_box = document.querySelector(".chat-box-container");
      const elem_contentWrapper = document.querySelector(".content-wrapper");
      elem_contentWrapper.style.height = '0px'
      elem_box.scrollTop = 0
    }
  },
};
</script>

<style scoped lang="scss" src="./ChatBox.scss"></style>