import React from 'react';
import { connect } from 'dva';
import { List, Icon, Switch } from 'antd';
import styles from './IndexPage.css';
import icu996 from '../assets/996icu/996icu.png';


function IndexPage({ background={}, dispatch }) {
  const data = [
    {name: '996.ICU', link: 'https://github.com/996icu/996.ICU'},
    {name: '955.WLB', link: 'https://github.com/formulahendry/955.WLB'},
    {name: '996.LIST', link: 'https://github.com/fengT-T/996_list'},
    {name: '996.LAW', link: 'https://github.com/Y1ran/996.Law'},
    {name: '996.YAOCL', link: 'https://github.com/boycott996/yaocl'},
    {name: '996.Leave', link: 'https://github.com/623637646/996.Leave'},
    {name: '996.RIP', link: 'https://996.rip/', icon: 'link'},
    {name: '996.Petition', link: 'https://github.com/xokctah/996.petition'},
    {name: '996.action', link: 'https://github.com/CPdogson/996action'},
    {name: '996.avengers', link: 'https://github.com/996-icu-avengers/Natasha'},
    {name: '996.OD', link: 'https://github.com/gnoloehz/996.OD'},
    {name: 'support.996.ICU', link: 'https://github.com/msworkers/support.996.ICU'},
  ]
  return (
    <div className={styles.popup}>
      <List
        header={<div>
          <Icon component={props => (<img alt="996icu" style={{ width: 24, weight: 24 }} src={icu996} />)} style={{ marginLeft: -8, marginRight: 10 }} />
          显示标签
          <Switch
            style={{ float: 'right' }}
            checked={background.show}
            checkedChildren="显示"
            unCheckedChildren="关闭"
            defaultChecked
            onChange={e => {
              console.log('onChange', e)
              dispatch({ type: 'common/changeShowStatus', show: e })
            }}
          />
        </div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item><Icon type={item.icon || "github"} /><a style={{ marginLeft: 10 }} target="_blank" href={item.link}>{item.name}</a></List.Item>)}
      />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({common}) => {
  return common
})(IndexPage);
