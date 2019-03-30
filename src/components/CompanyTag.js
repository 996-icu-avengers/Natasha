import React, { Component } from 'react';
import ShadowDOM from 'react-shadow';
import { findDOMNode  } from 'react-dom';
import { store, action } from '../utils/store';

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
    const { background = {} } = store.getState();
    const styles = `.icu996 { color: red } .wlb955 { color: green }`
    return background.show && tag ? (
      <ShadowDOM>
        <span>
          <span>{name}</span>
          <span className={tag}>{tag}</span>
          <style type="text/css">{styles}</style>
        </span>
      </ShadowDOM>
    ) : name
  } 
}


