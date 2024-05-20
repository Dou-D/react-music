import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'

import App from '@/App'
import './assets/css/index.scss'

import store from './store'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
)
