<template>
  <view class="content">
	  <text class="title">{{ token }}</text>
    <up-button type="primary" @click="login" text="登录"></up-button>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import syncStorage from '@/storage';
import { onLoad } from '@dcloudio/uni-app';

const token = syncStorage.getItem('token');
const state = reactive({
  uniIdRedirectUrl: '/pages/tabBar/home/index',
});
onLoad((options: any) => {
  if (options.uniIdRedirectUrl) {
    state.uniIdRedirectUrl = decodeURIComponent(options?.uniIdRedirectUrl);
  }
});

async function login() {
  // 登录成功, 重定向
  if (state.uniIdRedirectUrl) {
    if (state.uniIdRedirectUrl.includes('pages/tabBar/')) {
      uni.switchTab({
        url: state.uniIdRedirectUrl
      })
      return;
    }
    uni.redirectTo({
      url: state.uniIdRedirectUrl
    })
  }
}
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
