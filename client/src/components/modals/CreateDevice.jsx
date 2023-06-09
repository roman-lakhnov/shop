import React, { useContext, useState } from 'react'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap'
import { Context } from '../..'

const CreateDevice = ({ show, onHide }) => {
	const { device } = useContext(Context)
	const [info, setInfo] = useState([])
	return (
		<Modal show={show} onHide={onHide} size='lg' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Добавить устройство
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type => (
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand => (
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						className='mt-3'
						placeholder='Введите название устройства'
					></Form.Control>
					<Form.Control
						className='mt-3'
						placeholder='Введите стоимость устройства'
						type='number'
					></Form.Control>
					<Form.Control className='mt-3' type='file'></Form.Control>
					<hr />
				</Form>
				<Button variant='outline-dark'>Добавить новое свойство</Button>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-success' onClick={onHide}>
					Добавить
				</Button>
				<Button variant='outline-danger' onClick={onHide}>
					Закрыть
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateDevice