import React, { Component } from 'react';
import { render  } from 'react-dom';
import { connect } from 'dva';
import CompanyTag from '../components/CompanyTag';


class Zhaopin extends Component {

  renderCompanyTag() {
    const { background={show: true, latestRequest: {}} } = this.props;
    const company_in_sou = document.querySelectorAll('a.company_title');
    console.log('company_in_sou', company_in_sou.length);
    [].map.call(company_in_sou, (company_node) => {
      if (!company_node.getAttribute('icu996')) {
        company_node.setAttribute('icu996', Date.now())
        //console.log(company_node)
      }
      try{
        render(<CompanyTag show={background.show} latestRequest={background.latestRequest} />, company_node)
      }catch(e) {
        console.log(e)
      }
    })
  }
  render() {
    const { background={latestRequest: {}} } = this.props;
    this.renderCompanyTag()
    return <div className="icu996 wlb955">{background.latestRequest.requestId}</div>
  }
}



Zhaopin.propTypes = {
};

export default connect(({common}) => {
  return common
})(Zhaopin);
