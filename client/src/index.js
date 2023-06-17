import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore'

console.log(process.env.REACT_APP_API_URL)

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Context.Provider
		value={{
			user: new UserStore(),

			device: new DeviceStore()
		}}
	>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Context.Provider>
)
