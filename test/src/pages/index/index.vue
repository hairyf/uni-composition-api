<!--
 * @Author: Mr.Mao
 * @Date: 2021-03-20 11:52:57
 * @LastEditTime: 2021-03-20 15:26:41
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <div class="index">
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
    <div>{{ count }}</div>
  </div>
</template>

<script lang="ts">
import { onShareAppMessage } from '@/uni-composition-api';
import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
  components: {},
  setup() {
    const count = ref(0);
    return { count };
  },
  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  onPullDownRefresh() {},
  // 页面处理函数--监听用户上拉触底
  onReachBottom() {},
  // 页面处理函数--监听页面滚动
  onPageScroll() {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    console.log(page.onPageScroll);
  },
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {
    console.log('----');
    return {};
  }, */
});
</script>

<style lang="scss"></style>
