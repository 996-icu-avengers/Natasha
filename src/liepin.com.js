import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  onError: () => {
    console.log(arguments)
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/common').default);

// 4. Router
app.router(require('./routes/liepin.com.js').default);

// 5. Start
const root = document.createElement('div');
root.setAttribute('id', 'icu996')
document.getElementsByTagName('body')[0].appendChild(root)
app.start('#icu996');


