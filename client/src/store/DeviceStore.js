import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "Холодильники" },
            { id: 2, name: "Смартфоны" },
            { id: 3, name: "Ноутбуки" },
            { id: 4, name: "Телевизоры" },
        ];
        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" },
            { id: 3, name: "Lenovo" },
            { id: 4, name: "Honor" },
        ];
        this._devices = [
            {
                id: 1,
                name: "IPhone 12 pro",
                price: 80000,
                rating: 5,
                img: "https://static.re-store.ru/upload/resize_cache/iblock/c17/1160_880_17f5c944b3b71591cc9304fac25365de2/c17ffd485dd8adae3cbc7f2f992fa624.jpg",
            },
            {
                id: 2,
                name: "IPhone 12 pro",
                price: 80000,
                rating: 5,
                img: "https://static.re-store.ru/upload/resize_cache/iblock/c17/1160_880_17f5c944b3b71591cc9304fac25365de2/c17ffd485dd8adae3cbc7f2f992fa624.jpg",
            },
            {
                id: 3,
                name: "IPhone 12 pro",
                price: 80000,
                rating: 5,
                img: "https://static.re-store.ru/upload/resize_cache/iblock/c17/1160_880_17f5c944b3b71591cc9304fac25365de2/c17ffd485dd8adae3cbc7f2f992fa624.jpg",
            },
            {
                id: 4,
                name: "IPhone 12 pro",
                price: 80000,
                rating: 5,
                img: "https://static.re-store.ru/upload/resize_cache/iblock/c17/1160_880_17f5c944b3b71591cc9304fac25365de2/c17ffd485dd8adae3cbc7f2f992fa624.jpg",
            },
            {
                id: 5,
                name: "IPhone 12 pro",
                price: 80000,
                rating: 5,
                img: "https://static.re-store.ru/upload/resize_cache/iblock/c17/1160_880_17f5c944b3b71591cc9304fac25365de2/c17ffd485dd8adae3cbc7f2f992fa624.jpg",
            },
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    setTypes(types) {
        this._types = types;
    }

    setBrand(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}
