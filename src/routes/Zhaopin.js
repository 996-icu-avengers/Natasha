import React, { Component } from 'react';
import { render  } from 'react-dom';
import { connect } from 'dva';
import CompanyTag from '../components/CompanyTag';


class Zhaopin extends Component {

  renderCompanyTag() {
    const { background={show: true} } = this.props;
    const company_in_sou = document.querySelectorAll('a.company_title');
    [].map.call(company_in_sou, (company_node) => {
      if (!company_node.getAttribute('icu996')) {
        company_node.setAttribute('icu996', Date.now())
        //console.log(company_node)
      }
      render(<CompanyTag show={background.show} />, company_node)
    })
  }
  render() {
    this.renderCompanyTag()
    return <div className="icu996 wlb955"></div>
  }
}



Zhaopin.propTypes = {
};

export default connect(({common}) => {
  return common
})(Zhaopin);
