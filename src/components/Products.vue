<template>
		<AppButton
			@click="isGrid = !isGrid"
		>{{!isGrid ? "List" : "Grid"}}</AppButton>

		<TransitionGroup tag="div" class="products" :class="{ list: !isGrid }">
			<Product
				v-for="product in products"
				:product="product"
				:class="{ list: !isGrid }"
				:key="product.id"
				@openModal="emit('openModal', product.id)"
			/>
		</TransitionGroup>
</template>

<script setup>
import { ref } from "vue";

import {
	AppButton,
	Product
} from "./";

const isGrid = ref(true);

const props = defineProps({
	products: {
		type: Array,
		required: true,
	},
});

const emit = defineEmits([
	'openModal'
]);
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.products {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 24px;

	&.list {
		grid-template-columns: repeat(1, 1fr);
	}
}

.btn {
	margin-left: auto;
	margin-bottom: 24px;
}

</style>