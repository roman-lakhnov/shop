import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
	// eslint-disable-next-line
	const { user } = useContext(Context)
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
							<Button variant={'outline-light'}>Админ панель</Button>
							<Button
								className='ms-2'
								variant={'outline-light'}
								onClick={() => user.setIsAuth(false)}
							>
								Выйти
							</Button>
						</Nav>
					) : (
						<Nav style={{ marginLeft: 'auto' }}>
							<Button
								variant={'outline-light'}
								onClick={() => user.setIsAuth(true)}
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
