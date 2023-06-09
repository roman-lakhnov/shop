import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import Device from './pages/Device'
import Shop from './pages/Shop'
import {
	ADMIN_ROUTE,
	BASKET_ROUTE,
	DEVICE_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	SHOP_ROUTE
} from './utils/consts'

export const authRoutes = [
	{ path: ADMIN_ROUTE, element: <Admin /> },
	{ path: BASKET_ROUTE, element: <Basket /> }
]
export const publicRoutes = [
	{ path: REGISTRATION_ROUTE, element: <Auth /> },
	{ path: LOGIN_ROUTE, element: <Auth /> },
	{ path: SHOP_ROUTE, element: <Shop /> },
	{ path: DEVICE_ROUTE + '/:id', element: <Device /> }
]
