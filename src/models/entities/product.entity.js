// src\models\entities\category.js - (created by: logicinfo.com.br/ael)
import {BaseEntity} from './base.entity.js'


export  class Product extends BaseEntity {
    #id;
    #name;
    #price;
    #created_at;
    #updated_at;

    constructor(id, name, price, created_at, updated_at) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#created_at = created_at;
        this.#updated_at = updated_at;
    }
    
    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    get created_at() {
        return this.#created_at;
    }

    get updated_at() {
        return this.#updated_at;
    }

    set id(id) {
        this.#id = id;
    }

    set name(name) {
        this.#name = name;
    }

    set price(name) {
        this.#price = price;
    }

    set created_at(created_at) {
        this.#created_at = created_at;
    }

    set updated_at(updated_at) {
        this.#updated_at = updated_at;
    }
}