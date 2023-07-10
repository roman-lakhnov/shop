import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '..'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
	// eslint-disable-next-line
	const { user } = useContext(Context)
	const navigate = useNavigate()

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
	}
	return (
		<div>
			<Navbar className='ps-3' bg='dark' variant='dark'>
				<Container>
					<NavLink
						className={'text-decoration-none'}
						style={{ color: 'white' }}
						to={SHOP_ROUTE}
					>
						Купи Девайс
					</NavLink>
					{user.isAuth ? (
						<Nav className='ms-auto'>
							<Button
								variant={'outline-light'}
								onClick={() => navigate(ADMIN_ROUTE)}
							>
								Админ панель
							</Button>
							<Button
								className='ms-2'
								variant={'outline-light'}
								onClick={() => {
									logOut()
								}}
							>
								Выйти
							</Button>
						</Nav>
					) : (
						<Nav style={{ marginLeft: 'auto' }}>
							<Button
								variant={'outline-light'}
								onClick={() => navigate(LOGIN_ROUTE)}
							>
								Авторизация
							</Button>
						</Nav>
					)}
				</Container>
			</Navbar>
		</div>
	)
})

export default NavBar
