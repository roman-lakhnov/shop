import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
	const { user } = useContext(Context)
	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, element }) => (
					<Route key={path} path={path} element={element} />
				))}
			{publicRoutes.map(({ path, element }) => (
				<Route key={path} path={path} element={element} />
			))}
			<Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
		</Routes>
	)
})

export default AppRouter
