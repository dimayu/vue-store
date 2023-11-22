<template>
	<div class="options">
		<AppInput
			type="text"
			placeholder="Search product"
			:modelValue="searchQuery"
			@input="$emit('update:searchQuery', $event.target.value)"
		>
		</AppInput>

		<div class="checkbox-container">
			<AppInputCheckbox
				v-for="category in categories"
				:modelValue="categoryName"
				:value="category"
				@update:modelValue="emit('update:categoryName', $event)"
				:id="category"
			>
				{{ category }}
			</AppInputCheckbox>
		</div>
	</div>
</template>

<script setup>
import {
	AppInput,
	AppInputCheckbox
} from "./";

const props = defineProps({
	searchQuery: {
		type: String,
	},
	categories: {
		type: Array,
		required: true
	},
	categoryName: {
		type: Array,
		required: true
	}
});

const emit = defineEmits([
	'update:searchQuery',
	'update:categoryName'
]);
</script>

<style lang="scss" scoped>
@import "../assets/variables";
.options {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
}

.checkbox-container {
	display: flex;
	align-items: center;
	gap: 24px;
}
</style>