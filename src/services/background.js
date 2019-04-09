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
          // https://github.com/996icu/996.ICU/blob/master/blacklist/blacklist.md
          '华为', // http://focus.news.163.com/10/0921/15/6H460OOP00011SM9.html
          '阿里巴巴', // https://kuaibao.qq.com/s/20180612A1FAPU00
          '蚂蚁金服', // https://t.cj.sina.com.cn/articles/view/6680234487/18e2c49f700100dq3q
          '京东', // https://i.loli.net/2019/04/02/5ca2e8727f213.jpg  http://tech.163.com/19/0312/13/EA2QGIOK00097U7R.html
          '58同城', // http://finance.cnr.cn/gs/20160901/t20160901_523105136.shtml
          '苏宁', // https://www.zhihu.com/question/314152843/answer/613149536
          '途家网', '途家网网络技术（北京）有限公司', // https://www.tujia.xyz/
          '有赞', // http://www.linkshop.com.cn/web/archives/2019/418163.shtml
          '字节跳动', // https://www.kanzhun.com/gsr5622411tl56.html  https://www.sohu.com/a/256795805_231667
          '拼多多', // http://www.taobao92.com/thread-1313-1-1.html
          '大疆创新', // https://baijiahao.baidu.com/s?id=1619909152168711034&wfr=spider&for=pc
          '用友', // https://www.zhihu.com/question/26683235
          '深信服', // https://www.v2ex.com/t/525495
          '鲸鱼游戏', // https://raw.githubusercontent.com/xuhaodong/img/master/196803444329033095.jpg
          '盛赫游戏', // https://www.zhipin.com/gongsi/c57418b66b0cf3bf0nd52928.html?ka=brand_list_company_9
          '神策数据', // https://www.kanzhun.com/pl6409927.html
          '顺舟智能', // https://jobs.zhaopin.com/CC549324722J00346803701.htm
          '中软国际', // https://jobs.zhaopin.com/CC508620126J00303154805.htm
          '柯莱特', // https://jobs.zhaopin.com/CC120179637J00117070515.htm
          '高伟达', // https://jobs.zhaopin.com/CC120702341J00114014810.htm
          '华为外包', // https://www.zhihu.com/question/28517881
          '跨越速运', // https://www.zhihu.com/question/312825261  https://www.zhihu.com/question/47203239/answer/643311492
          '砸立', // https://www.kanzhun.com/gsr5728610tl526.html?ka=review-label2
          '一喂', // http://note.youdao.com/noteshare?id=0113f40833aaebfc7bbb6c0f83d65f96
          '智贝科技', // https://baijiahao.baidu.com/s?id=1627625016599313128
          '氪细胞', // https://github.com/996icu/996.ICU/blob/master/blacklist/img/timing360-0823.jpg  https://github.com/996icu/996.ICU/blob/master/blacklist/img/timing360-1201.jpg
          '同花顺', // https://www.kanzhun.com/pl6896401.html
          '游族网络', // https://www.zhihu.com/question/22411680?sort=created
          '马上金融', // https://www.kanzhun.com/pl5641018.html
          '霁云科技', // https://www.zhipin.com/gongsi/2c08264377f4a5c61nx739i-Fw~~.html?ka=search_rcmd_company_2c08264377f4a5c61nx739i-Fw~~
          '多益网络', // https://www.kanzhun.com/gsr1365983tl56.html  https://www.zhihu.com/question/22713470/answer/145287600
          '北京必胜课教育科技有限公司', // https://github.com/996icu/996.ICU/blob/master/blacklist/img/bsk966-001.jpeg  https://github.com/996icu/996.ICU/blob/master/blacklist/img/bsk966-003.png
          '蝴蝶互动', // https://www.zhihu.com/question/40858342/answer/616999472  https://github.com/996icu/996.ICU/blob/master/blacklist/img/%E8%9D%B4%E8%9D%B6%E4%BA%92%E5%8A%A8-%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95.png  https://github.com/996icu/996.ICU/blob/master/blacklist/img/%E8%9D%B4%E8%9D%B6%E4%BA%92%E5%8A%A8-%E6%8A%A5%E5%91%8A%E5%A7%94%E6%89%98%E6%88%AA%E5%9B%BE-0.jpg  https://github.com/996icu/996.ICU/blob/master/blacklist/img/%E8%9D%B4%E8%9D%B6%E4%BA%92%E5%8A%A8-%E6%8A%A5%E5%91%8A%E5%A7%94%E6%89%98%E6%88%AA%E5%9B%BE-1.jpg
          '深圳市世纪纵横科技发展有限公司', // https://github.com/996icu/996.ICU/blob/master/blacklist/img/chat1.png  https://github.com/996icu/996.ICU/blob/master/blacklist/img/chat2.png  https://github.com/996icu/996.ICU/blob/master/blacklist/img/chat3.png  https://github.com/996icu/996.ICU/blob/master/blacklist/img/taxi.jpg  https://github.com/996icu/996.ICU/blob/master/blacklist/img/taxi2.jpg  https://github.com/996icu/996.ICU/blob/master/blacklist/img/taxi3.jpg 
          '北京关键科技股份有限公司', // https://github.com/996icu/996.ICU/blob/master/blacklist/img/keware1.png  https://github.com/996icu/996.ICU/blob/master/blacklist/img/keyware2.png
          '山东国子软件股份有限公司', // https://github.com/996icu/996.ICU/blob/master/blacklist/img/googosoft.png  https://github.com/996icu/996.ICU/blob/master/blacklist/img/googosoft2.png  https://www.kanzhun.com/pl6406106.html  https://www.kanzhun.com/gsr5619934tl56.html?ka=review-label4 
          '上海联影医疗科技有限公司', // https://www.kanzhun.com/pl6045694.html  https://bbs.csdn.net/topics/380214818  https://www.kanzhun.com/pl6212987.html
          '首约科技（北京）有限公司', // 
          '海尔集团', // https://www.zhihu.com/question/21895528
          'Boss直聘', '北京华品博睿网络技术有限公司', // https://upload.cc/i1/2019/04/03/1wfI7o.png
          '北京游奕互动软件有限公司', // https://github.com/996icu/996.ICU/blob/master/blacklist/img/yyhd.png
          '长城汽车股份有限公司天津园区', // http://www.hljsxy.org.cn/website/sites/common/readwNews.aspx?JpkId=1&id=13289
          '蓝鸽集团有限公司', // https://tieba.baidu.com/f?kz=4421231059&mo_device=1&ssid=0&from=844b&uid=0&pu=usm@2,sz@320_1001,ta@iphone_2_7.0_24_67.0&bd_page_type=1&baiduid=16C9EAE1D7D54FAC1A178F5882C9EBD3&tj=h5_mobile_1_0_10_l4&referer=m.baidu.com?pn=0&
          '依图网络科技有限公司', // https://www.zhihu.com/question/300132949/answer/606529193
          '深圳市环球易购电子商务有限公司', // https://github.com/996icu/996.ICU/blob/master/blacklist/img/globalegrow_labor_contract.jpg  https://github.com/996icu/996.ICU/blob/master/blacklist/img/globalegrow_offer.jpg
          '杭州海康威视数字技术股份有限公司', // https://www.kanzhun.com/pl6448138.html  https://www.zhihu.com/question/31379626/answer/399779602  https://github.com/996icu/996.ICU/blob/master/blacklist/img/hikvision_fj.png
          '浙江大华技术股份有限公司', // http://www.7360.cc/Review-80253  https://www.kanzhun.com/pl6360251.html
          '浙江宇视科技有限公司', // https://www.kanzhun.com/gsmsh10805642.html  https://www.zhihu.com/question/265531337/answer/296562572
          '腾讯', // https://www.kanzhun.com/gsr5855.html?ka=com-blocker1-review#co_tab  https://www.zhihu.com/question/30383728/answer/49853422  https://www.zhihu.com/question/294418645/answer/494094055
          '小米', // https://www.kanzhun.com/gsr347791.html?ka=com-blocker1-review#co_tab  https://www.zhihu.com/question/270788307/answer/356518575
          '亚信(AsiaInfo)', '亚信', 'AsiaInfo', // https://www.kanzhun.com/gsr19887tl56.html?ka=review-label13
          '猎聘网', // https://www.kanzhun.com/gsr1087027.html?ka=com-blocker1-review#co_tab  https://www.zhihu.com/question/23950520/answer/135634297
          '58同城', // https://www.kanzhun.com/gsr10329.html?ka=com-blocker1-review#co_tab  https://www.zhihu.com/question/50217184/answer/121096322
          '饿了么', // https://www.kanzhun.com/gsr1879439.html?ka=com-blocker1-review#co_tab  https://www.zhihu.com/question/51930890/answer/128765855
          '步步高', // https://www.kanzhun.com/gsr3153tl56.html?ka=review-label12
          '百度', // https://www.kanzhun.com/gsr11514tl56.html?ka=review-label17  https://www.zhihu.com/question/20489266/answer/15775901
          '网易游戏', // https://www.kanzhun.com/gsr15379tl56.html?ka=review-label14  https://www.zhihu.com/question/20563272/answer/57486502
          '便利蜂', // https://www.kanzhun.com/gsr6351491tl526.html?ka=review-label8
          '网易考拉海购', // https://www.kanzhun.com/gsr5686940tl526.html?ka=review-label14
          '美的集团', // https://www.kanzhun.com/gsr7884tl56.html?ka=review-label14 https://www.zhihu.com/question/35741672/answer/115286682
          'VIPKID', // https://www.kanzhun.com/gsr5616047tl56.html?ka=review-label14  https://www.zhihu.com/question/67611489/answer/502602988
          '房多多', // https://www.kanzhun.com/gsr2072113tl56.html?ka=review-label13  https://www.zhihu.com/question/24225318/answer/63820083
          '天眼查', // https://www.kanzhun.com/gsr5681112tl526.html?ka=review-label4
          '去哪儿网', // https://www.kanzhun.com/gsr61692tl56.html?ka=review-label13  https://www.zhihu.com/question/22560997/answer/60628698
          'tap4fun', // https://www.kanzhun.com/gsr59860tl56.html?ka=review-label15
          '德邦物流', // https://www.kanzhun.com/gsr16378tl56.html?ka=review-label9
          '万兴科技', // https://www.kanzhun.com/gsr1682212tl56.html?ka=review-label12
          '4399游戏', // https://www.kanzhun.com/gsr3284tl56.html?ka=review-label13  https://www.zhihu.com/question/20608889/answer/15623928
          '普联软件', // https://www.kanzhun.com/gsr61725tl56.html?ka=review-label11
          '云鸟科技', // https://www.kanzhun.com/gsr2477689tl56.html?ka=review-label3
          '追一科技', // https://www.kanzhun.com/gsr5693705.html?ka=com1-review  https://www.zhihu.com/question/59128341/answer/271630324  https://www.zhihu.com/question/59128341/answer/637566953  https://www.zhihu.com/question/59128341/answer/347608941
          '兴业数字金融服务', // https://www.kanzhun.com/gsr6355543tl526.html?ka=review-label4
          'iCourt', // https://www.kanzhun.com/gsr6355543tl526.html?ka=review-label4
          '小红书', // https://www.kanzhun.com/gsr1950189.html?ka=com-blocker1-review#co_tab
          '三七互娱', // https://www.kanzhun.com/gsr1906275.html?ka=com-blocker1-review#co_tab
          '依图科技', // https://www.kanzhun.com/gsr1669492tl526.html?ka=review-label13  https://www.zhihu.com/question/300132949/answer/606529193
          '小黑鱼', // https://m.kanzhun.com/gsr6771936.html
          '深圳市猜猜城科技有限公司', // https://www.kanzhun.com/gsr6671156.html?ka=com1-review
          '初见科技', // https://www.kanzhun.com/gsr2031621.html?ka=com1-review
          '道通科技', // https://www.kanzhun.com/gsr479390tl56.html?ka=review-label8
          '尊豪网络科技有限公司', // https://m.kanzhun.com/pl6818466.html?sid=kzapp&from=singlemessage
          '浪潮软件', // https://www.kanzhun.com/gsr49271tl56.html?ka=review-label10  https://www.zhihu.com/question/53373183/answer/139767404
          '作业帮', // https://www.kanzhun.com/pl6288762.html
          '天津天地伟业科技有限公司', // https://www.kanzhun.com/gsr1634154tl56.html?ka=review-label11
          '上海壹米滴答供应链管理有限公司', // https://github.com/996icu/996.ICU/blob/master/blacklist/img/yimidida.jpeg
          '广州创思信息技术有限公司（9377 游戏）', '广州创思信息技术有限公司', '9377游戏', // https://www.zhihu.com/question/53318899
          '金杜律师事务所', // https://www.kanzhun.com/gsr14366.html
          '数美科技', // https://www.zhihu.com/question/290696102
          '快方送药', // https://www.kanzhun.com/pl5675303.html
          '苏州同思软件有限公司', // https://github.com/996icu/996.ICU/blob/master/blacklist/img/tongsi1.png  https://github.com/996icu/996.ICU/blob/master/blacklist/img/tongsi2.png  https://github.com/996icu/996.ICU/blob/master/blacklist/img/tongsi3.png  https://github.com/996icu/996.ICU/blob/master/blacklist/img/tongsi4.png  https://www.kanzhun.com/pl6983505.html?ka=comreview-showall2
        ],
        wlb955: [
          // TODO 
          'Autodesk',
          'Cisco',
          'coolapk', '酷安',
          'Douban', '豆瓣',
          'eBay',
          'EMC',
          'Ericsson',
          'Google',
          'HP',
          'HSBC',
          'IBM',
          'Intel',
          'LeetCode',
          'LintCode', '九章算法',
          'Microsoft',
          'Oracle',
          'PayPal',
          'Pivotal',
          'RingCentral',
          'SAP',
          'Splunk',
          'SUSE',
          'ThoughtWorks',
          'Vipshop', '唯品会',
          'VMware',
          'WeWork',
          'Works Applications',
        ],
      })
    }, 100)
  })
}

