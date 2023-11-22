<template>
	<div class="basket">
		<h2 class="basket__title">Basket</h2>
		<h3 class="basket__subtitle">Products</h3>

		<TransitionGroup tag="div" class="products">
			<div
				v-for="product in productsBasket"
				:key="product.id"
				class="products__item"
			>
				<div class="products__item__field">
					<span>Name:</span>
					<span>{{ product.title }}</span>
				</div>
				<div class="products__item__field">
					<span>Price:</span>
					<span>{{ product.price }} $</span>
				</div>
				<div class="products__item__field">
					<span>Quantity:</span>
					<span>{{ product.total }}</span>
				</div>
				<div class="products__item__field">
					<span>Total price:</span>
					<span>{{ product.total * product.price }} $</span>
				</div>
				<AppButton
					@click="emit('removeProduct', product.id)"
				>Remove</AppButton>
			</div>
		</TransitionGroup>

		<div class="basket__total-price">
			<span>Total amount of products</span>
			<span>{{ calculationTotalPrice }} $</span>
		</div>
	</div>
</template>

<script setup>
import {
	AppButton,
} from "./";

import { computed } from "vue";

const props = defineProps({
	productsBasket: {
		type: Array,
		required: true,
	}
});

const emit = defineEmits([
	'removeProduct'
]);

const calculationTotalPrice = computed(() => {
	let result = 0;
	props.productsBasket.forEach((item) => {
		result += item.price * item.total;
	});
	return result;
});

</script>

<style lang="scss" scoped>
@import "../assets/variables";

.basket {
	display: flex;
	flex-direction: column;
	gap: 16px;

	&__title {
		font-size: 24px;
	}

	&__subtitle {
		font-size: 20px;
	}

	&__total-price {
		display: flex;
		justify-content: space-between;
		font-size: 24px;
	}
}

.products {
	display: flex;
	flex-direction: column;
	gap: 16px;

	&__item {
		display: flex;
		flex-direction: column;
		gap: 12px;

		&__field {
			display: flex;
			justify-content: space-between;
		}

		.btn {
			min-width: 100%;
			width: 100%;
		}
	}
}

</style>