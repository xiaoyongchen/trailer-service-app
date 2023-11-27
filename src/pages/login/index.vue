<template>
  <view class="content">
	  <text class="title">{{ token }}</text>
  </view>
</template>

<script setup lang="ts">
import syncStorage from '@/storage';

const token = syncStorage.getItem('token');
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    background-color: red;
  }
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
