import request from '../utils/request';

export function query() {
  return request('/api/users');
}

// TODO 从某一个地址获取
export function getAllCompany () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        msg: 'success',
        icu996: [
          '58',
          '武汉嘟比科技有限公司',
          // ...
        ],
        wlb955: [
          'IBM',
          'eBay',
          '北京百知教育科技有限公司',
        ],
      })
    }, 100)
  })
}

