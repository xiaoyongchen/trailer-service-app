<template>
  <view class="content">
	  <text class="title">{{ userStore.name }}</text>
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ userStore.name }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore';
import { onMounted } from 'vue';
import { apiCommonGetDict } from '@/services/common';

const userStore = useUserStore();
onMounted(() => {
  userStore.login('老王', '123456');
  apiCommonGetDict();
});
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
