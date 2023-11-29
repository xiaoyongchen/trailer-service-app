<template>
  <view class="content">
      <up-navbar
          title="个人中心"
          :autoBack="true"
      />
      <view class="swiper">
        <text class="title">文案</text>
        <!-- 自定义https://www.uviewui.com/guide/customIcon.html -->
        <u-icon name="photo"></u-icon>
        <up-swiper
            :list="list"
            previousMargin="30px"
            nextMargin="30px"
            circular
            :autoplay="false"
            radius="5"
            bgColor="#ffffff"
            height="230px"
        ></up-swiper>
      </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const list = ref([
  'http://image.driverglobe.com/default/20231013/80cd3f70ab8086a11d839efac3d05b6a.png',
  'http://image.driverglobe.com/default/20231013/80cd3f70ab8086a11d839efac3d05b6a.png',
  'http://image.driverglobe.com/default/20231013/80cd3f70ab8086a11d839efac3d05b6a.png'
]);
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  .swiper {
    margin: 80rpx 30rpx;
    width: calc(100% - 60rpx);
  }

  .title {
    background-color: $uni-color-title;
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
