import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import star from '../assets/starS.jpg'

const Device = () => {
	const device = {
		id: 7,
		name: 'Iphone xs',
		price: 25000,
		rating: 5,
		img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
	}
	const description = [
		{ id: 1, title: 'оперативная память', description: '5 гб' },
		{ id: 2, title: 'камера', description: '12 мп' },
		{ id: 3, title: 'Процессор', description: 'Пентиум 3' },
		{ id: 4, title: 'Кол-во ядер', description: '2' },
		{ id: 5, title: 'Аккумулятор', description: '4000' }
	]
	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image width={300} height={300} src={device.img} />
				</Col>

				<Col md={4} className='d-flex flex-column align-items-center'>
					<h2>{device.name}</h2>
					<div
						className='d-flex align-items-center justify-content-center'
						style={{
							background: `url(${star}) no-repeat center center `,
							width: 240,
							height: 240,
							backgroundSize: 'cover',
							fontSize: 64
						}}
					>
						{device.rating}
					</div>
				</Col>

				<Col md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{
							width: 300,
							height: 300,
							fontSize: 32,
							border: '5px solid lightgray'
						}}
					>
						<h3>От:{device.price} eur</h3>
						<Button variant='outline-dark'>Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row>
				<h1>Характеристики:</h1>
				{description.map((info, index) => (
					<div
						key={info.id}
						style={{
							background: index % 2 === 0 ? '#F4F4F6' : 'transparent',
							padding: 10
						}}
					>
						{info.title}:{info.description}
					</div>
				))}
			</Row>
		</Container>
	)
}

export default Device
