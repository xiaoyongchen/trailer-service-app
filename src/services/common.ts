import request from "@/plugins/axios";

export const apiCommonGetDict = (params = { type: "" }) => {
  return request({
    url: '/vehicle-safety-accident-web/common/getAllDict',
    method: 'GET',
    params,
  })
};