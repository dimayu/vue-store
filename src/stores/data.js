import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useBasketStore = defineStore('basketStore', () => {
    const productsInBasket = ref([]);

    const addProductToBasket = (addProduct, quantity) => {
        addProduct.total = Number(quantity);
        productsInBasket.value.push(addProduct);
    };

    const removeProductFromBasket = (id) => {
        productsInBasket.value = productsInBasket.value.filter(item => item.id !== id);
    };

    return { productsInBasket, addProductToBasket, removeProductFromBasket }
})
