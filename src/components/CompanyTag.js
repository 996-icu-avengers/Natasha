import React, { Component } from 'react';
import ShadowDOM from 'react-shadow';
import { findDOMNode  } from 'react-dom';
import { action } from '../utils/store';

export default class CompanyTag extends Component {
  state = {
    name: '',
    tag: '',
  }
  componentDidMount() {
    const node = findDOMNode(this).parentNode;
    const name = node.getAttribute('title');
    if (name) {
      this.setState({ name })
      action({ type: 'background/getTagByCompanyName', name}).then(({ err, res, req }) => {
        //console.log('getTagByCompanyName', err, res, req)
        if (!err) {
          const { tag } = res;
          this.setState({ tag })
        }
      })
    }
  }
  render() {
    const { name, tag } = this.state;
    const { show=true } = this.props;
    const styles = `.icu996 { color: red; border: 1px solid red; border-radius: 3px; margin: 0 3px 0 3px; } .wlb955 { color: green; border: 1px solid green; border-radius: 3px; margin: 0 3px 0 3px; }`
    return show && tag ? (
      <ShadowDOM>
        <span>
          <span>{name}</span>
          <span className={tag}>{tag === 'icu996' ? '996ICU' : '955WLB'}</span>
          <style type="text/css">{styles}</style>
        </span>
      </ShadowDOM>
    ) : name
  } 
}


