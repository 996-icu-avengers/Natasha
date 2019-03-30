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
          '58同城',
          '有赞',
          '北京京东',
          '途家网', '途家网网络技术(北京)有限公司',
          '六安人论坛',
          '用友',
          '阿里',
          '字节跳动',
          '苏宁',
          '深信服',
          '华为',
          '广州鲸鱼游戏',
          // https://github.com/996icu/996.ICU/blob/master/blacklist/blacklist.md
        ],
        wlb955: [
          '九章算法',
          '豆瓣',
          'Douban',
          'Grab',
          'coolapk',
          'coolapk（酷安）- 深圳',
          'RingCentral',
          'Google LLC.',
          'ThoughtWorks',
          'Microsoft Corporation',
          '上海益民食品厂',
          '扇贝网',
          'LeetCode',
          '国机二院',
          '上海道客网络科技有限公司',
          '新世相 ',
        ],
      })
    }, 100)
  })
}

