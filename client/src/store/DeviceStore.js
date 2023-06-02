import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Холодильнии' },
			{ id: 1, name: 'Смартфоны' }
		]
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 1, name: 'Apple' }
		]

		this._devices = [
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			},
			{
				id: 1,
				name: 'Iphone 12 pro',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			}
		]
		makeAutoObservable(this)
	}
	setTypes(types) {
		this._types = types
	}
	setBrands(brands) {
		this._brands = brands
	}
	setDevices(devices) {
		this._devices = devices
	}
	get types() {
		return this._types
	}
	get brands() {
		return this._brands
	}
	get devices() {
		return this._devices
	}
}
