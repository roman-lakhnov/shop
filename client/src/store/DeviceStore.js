import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Холодильнии' },
			{ id: 2, name: 'Смартфоны' },
			{ id: 3, name: 'Ноутбуки' },
			{ id: 4, name: 'Теливизоры' }
		]
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
			{ id: 3, name: 'Lenovo' },
			{ id: 4, name: 'Asus' }
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
				id: 2,
				name: 'Iphone 7 plus',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			},
			{
				id: 3,
				name: 'MacBook',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			},
			{
				id: 4,
				name: 'Iphone xs',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			},
			{
				id: 5,
				name: 'Iphone xs',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			},
			{
				id: 6,
				name: 'Iphone xs',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			},
			{
				id: 7,
				name: 'Iphone xs',
				price: 25000,
				rating: 5,
				img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-Max-image.jpg'
			}
		]
		this._selectedType = {}
		this._selectedBrand = {}
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
	setSelectedType(type) {
		this._selectedType = type
	}
	setSelectedBrand(brand) {
		this._selectedBrand = brand
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
	get selectedType() {
		return this._selectedType
	}
	get selectedBrand() {
		return this._selectedBrand
	}
}
