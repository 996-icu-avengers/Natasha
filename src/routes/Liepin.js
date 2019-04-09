import React, { Component } from 'react';
import { render  } from 'react-dom';
import { connect } from 'dva';
import CompanyTag from '../components/CompanyTag';


class Liepin extends Component {

  renderCompanyTag() {
    const { background={show: true, latestRequest: {}} } = this.props;
    const company_in_search = document.querySelectorAll('.sojob-list .company-name > a');
    console.log('company_in_search', company_in_search.length);
    [].map.call(company_in_search, (company_node) => {
      if (!company_node.getAttribute('title')) {
        company_node.setAttribute('title', company_node.innerText)
      }
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
    return <div className="icu996 wlb955" style={{ display: 'none' }}>{background.latestRequest && background.latestRequest.requestId}</div>
  }
}



Liepin.propTypes = {
};

export default connect(({common}) => {
  return common
})(Liepin);

