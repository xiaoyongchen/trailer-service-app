/**
 * 同步存储token以及用户信息
 * @by cxy
 */
const syncStorage = {
  getItem<T = any>(key: keyof typeof localStorageKeys, isJson = false): T | unknown {
    if (typeof key !== "string" || !key) {
      return Promise.reject("请使用正确的key");
    }
    const value = uni.getStorageSync(key);
    if (!isJson) {
      return value;
    }

    const isJsonStr = isJsonString(value);
    if (isJsonStr) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return Promise.reject(e);
      }
    }
    return value;
  },

  setItem<T = any>(key: keyof typeof localStorageKeys, value: T): unknown {
    if (typeof key === "string" && key && value) {
      if (typeof value === "string") {
        return uni.setStorageSync(key, value);
      }

      let v;
      try {
        v = JSON.stringify(value);
      } catch (e) {
        v = value;
      }
      return uni.setStorageSync(key, v);
    }

    return Promise.reject("请使用正确的key or value");
  },

  removeItem(key: keyof typeof localStorageKeys) {
    try {
      return uni.removeStorageSync(key);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  clear() {
    uni.clearStorageSync();
  },
};

function isJsonString(str = "") {
  try {
    if (typeof JSON.parse(str) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
  return false;
}

// 全局使用的key在这里记录
export const localStorageKeys = {
  token: "token",
};

export default syncStorage;
