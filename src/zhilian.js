import { render  } from 'react-dom';
import CompanyTag from './components/CompanyTag';

console.log('start in zhilian')
setInterval(() => {
  const company_in_sou = document.querySelectorAll('a.company_title');
  [].map.call(company_in_sou, (company_node) => {
    if (!company_node.getAttribute('icu996')) {
      company_node.setAttribute('icu996', Date.now())
      //console.log(company_node)
      render(<CompanyTag />, company_node)
    }
  })
}, 1000)
