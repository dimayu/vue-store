<template>
	<div class="products__item">
		<picture class="products__item__img">
			<img src="/public/product.png" :alt="product.title">
		</picture>
		<div class="products__item__text">
			<h4 class="products__item__category">{{ product.category }}</h4>
			<h3 class="products__item__title">{{ product.title }}</h3>
			<p class="products__item__price">{{ product.price }} $</p>
			<Button @click="emit('openModal')">Add to basket</Button>
		</div>
	</div>
</template>

<script setup>
import Button from "./UI/AppButton.vue";

const props = defineProps({
	product: {
		type: Object,
		required: true,
	}
});

const emit = defineEmits([
	'openModal'
]);

</script>

<style lang="scss" scoped>
@import "../assets/variables";

.products__item {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px 12px;
	background-color: $light---neutral--200;
	text-align: center;

	&__category {
		font-size: 18px;
		color: $light---secondary--300;
	}

	&__title {
		margin-bottom: 12px;
		font-size: 20px;
		color: $light---secondary--900;
	}

	&__price {
		margin-bottom: 12px;
		font-size: 20px;
		font-weight: 600;
		color: $light---primary--700;
	}

	&.list {
		flex-direction: row;
		gap: 24px;
	}
}

</style>