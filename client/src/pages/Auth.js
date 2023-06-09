import React, { useContext } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	const { user } = useContext(Context)
	const navigate = useNavigate()
	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>

				<Form className='d-flex flex-column'>
					<Form.Control className='mt-3' placeholder='Введите пароль' />
					<Form.Control className='mt-3' placeholder='Введите Email' />
					<div className='d-flex flex-row justify-content-between ps-3 mt-3'>
						{isLogin ? (
							<div>
								Нет аккаунта?
								<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
							</div>
						) : (
							<div>
								Есть аккаунт?
								<NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
							</div>
						)}
						<Button
							variant={'outline-success'}
							onClick={() => {
								user.setIsAuth(true)
								navigate(SHOP_ROUTE)
							}}
						>
							{isLogin ? 'Войти' : 'Регистрация'}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth
