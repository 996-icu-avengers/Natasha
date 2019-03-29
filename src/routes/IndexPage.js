import React from 'react';
import { connect } from 'dva';
import { List, Icon, Switch } from 'antd';
import styles from './IndexPage.css';
import icu996 from '../assets/996icu/996icu.png';


function IndexPage() {
  const data = [
    {name: 'Natasha', link: 'https://github.com/996-icu-avengers/Natasha'},
    {name: '955.WLB', link: 'https://github.com/formulahendry/955.WLB'},
    {name: '996.ICU', link: 'https://github.com/996icu/996.ICU'},
  ]
  return (
    <div className={styles.popup}>
      <List
        header={<div>
          <Icon component={props => (<img style={{ width: 24, weight: 24 }} src={icu996} />)} style={{ marginLeft: -8, marginRight: 10 }} />
          显示标签
          <Switch style={{ float: 'right' }} checkedChildren="显示" unCheckedChildren="关闭" defaultChecked />
        </div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item><Icon type="github" /><a style={{ marginLeft: 10 }} href={item.link}>{item.name}</a></List.Item>)}
      />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
