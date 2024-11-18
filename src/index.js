import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './redux/store'
import App from './components/app/app'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
