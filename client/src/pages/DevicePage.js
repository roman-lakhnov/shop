import React, { useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import star from '../assets/starS.jpg'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'
import { useEffect } from 'react'

const DevicePage = () => {
	const [device, setDevice] = useState({
		name: '',
		price: '',
		rating: '',
		img: '',
		info: []
	})

	const { id } = useParams()
	useEffect(() => {
		fetchOneDevice(id).then(data => setDevice(data))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image
						width={300}
						height={300}
						src={process.env.REACT_APP_API_URL + device.img}
					/>
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
				{device.info.map((info, index) => (
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

export default DevicePage
