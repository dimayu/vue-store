<template>
	<Header/>
	<div class="body">
		<main class="main">
			<ProductsFilter
				v-model:searchQuery="searchQuery"
				v-model:categoryName="categoryName"
				:categories="productsCategories"
			>
			</ProductsFilter>

			<Products
				:products="sortedAndSearchedProducts"
				@openModal="openModalAddProduct"
			/>
		</main>

		<aside class="aside">
			<ProductsBasket
				:productsBasket="basketStore.productsInBasket"
				@removeProduct="removeProductFromBasket"
			/>
		</aside>
	</div>

	<AppModal
		v-show="isModalVisible"
		@closeModal="closeModalAddProduct"
	>
		<template v-slot:header>
			Specify quantity
		</template>

		<template v-slot:body>
			This is a new modal body.
			<div
				v-if="isModalVisible"
				class="range"
			>
				<input type="range"
							 :max="addProduct.countInStorage"
							 v-model="quantity"
							 min="1"
							 step="1"
							 class="range__input"
				/>
				<p class="range__quantity">Quantity: {{ quantity }}</p>
			</div>
			<AppButton
				@click="addProductToBasket"
			>
				Add
			</AppButton>
		</template>
	</AppModal>
</template>

<script setup>
import {computed, ref} from "vue";

import dataProducts from "./data/products";

import {
	Header,
	Products,
	ProductsFilter,
	AppModal,
	AppButton,
	ProductsBasket,
} from "./components";

import { useBasketStore } from './stores/data'

const basketStore = useBasketStore();

const searchQuery = ref('')
const categoryName = ref([]);
const isModalVisible = ref(false);
const idProduct = ref('');
const quantity = ref(1);

const result = {};
const categories = dataProducts.map(item => result[item.category] = true);
const productsCategories = Object.keys(result);

const filterProducts = computed(() => {
	if (categoryName.value.length > 0) {
		return dataProducts.filter(product => categoryName.value.some(cat => product.category.includes(cat)));
	} else return dataProducts;
});

const sortedAndSearchedProducts = computed(() => {
	return filterProducts.value.filter(product => product.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const openModalAddProduct = (id) => {
	isModalVisible.value = true;
	idProduct.value = id;
}

const closeModalAddProduct = () => {
	isModalVisible.value = false;
	quantity.value = 1;
}

const addProduct = computed(() => {
	return dataProducts.find(product => product.id === idProduct.value);
});

const addProductToBasket = () => {
	basketStore.addProductToBasket(addProduct.value, quantity.value);
	isModalVisible.value = false;
	quantity.value = 1;
};

const removeProductFromBasket = (id) => {
	basketStore.removeProductFromBasket(id)
};

</script>

<style lang="scss" scoped>
@import "./assets/variables";

.body {
	max-width: 1140px;
	display: flex;
	gap: 32px;
	margin: 0 auto;
}

.main {
	display: flex;
	flex-direction: column;

	.btn {
		margin-left: auto;
		margin-bottom: 32px;
	}
}

.aside {
	min-width: 400px;
	background-color: $light---neutral--300;
	padding: 24px;
	box-sizing: border-box;
	align-self: flex-start;
}

.range {
	&__input	{
		-webkit-appearance: none;
		width: 100%;
		height: 8px;
		border-radius: 5px;
		background-color: $light---neutral--400;
		outline: none;
		margin: 12px 0;

		&::-webkit-slider-thumb {
			appearance: none;
			width: 14px;
			height: 14px;
			border-radius: 50%;
			background: $light---primary--500;
			cursor: pointer;
			transition: background .15s ease-in-out;

			&:hover {
				background: $light---primary--500;
			}
		}
	}

	&__quantity {
		margin-bottom: 12px;
	}
}
</style>
