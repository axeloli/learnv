import {
  data1,
  data2,
  data3,
  data4,
  data5,
  apiRes
} from './mock.js'
const datas = [null, data1, data2, data3, data4, data5]
const mockAxios = {
  get() {

  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!params.pageIndex) {
          reject({
            success: false,
            errCode: 501,
            errMsg: '参数缺失',
            data: null
          })
        }
        let index = Math.abs(params.pageIndex) % 5 || parseInt(Math.random() * 100) % 5 || 1 // 不排除0的情况
        let data = datas[index] || data1
        resolve(Object.assign(apiRes, {data}))
      }, 1000)
    })
  }
}

export default mockAxios