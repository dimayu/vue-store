<template>
	<div class="checkbox-field">
		<input type="checkbox"
					 class="checkbox-field__input"
					 v-model="model"
					 :value="value"
					 :id="id"
		/>
		<label class="checkbox-field__label" :for="id">
			<slot></slot>
		</label>
	</div>
</template>

<script setup>
import { computed, defineEmits } from "vue";

const props = defineProps({
	modelValue: {
		type: [Array, Boolean]
	},
	value: {
		type: String
	},
	id: {
		type: String
	}
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit("update:modelValue", value);
	},
});

</script>

<style lang="scss" scoped>
@import "../../assets/variables";

.checkbox-field {
	&__input {
		position: absolute;
		opacity: 0;

		& + label {
			position: relative;
			cursor: pointer;
			padding: 0;
		}

		& + label:before {
			content: '';
			margin-right: 10px;
			display: inline-block;
			vertical-align: text-top;
			width: 20px;
			height: 20px;
			border: 1px solid $light---primary--500;
			box-sizing: border-box;
		}

		&:hover + label:before {
			background-color: $light---primary--300;
		}

		&:focus + label:before {
			box-shadow: $cards_shadow;
		}

		&:checked + label:before {
			background-color: $light---primary--500;
		}

		&:disabled + label {
			color: #b8b8b8;
			cursor: auto;
		}

		&:disabled + label:before {
			box-shadow: none;
			background: #ddd;
		}

		&:checked + label:after {
			content: '';
			position: absolute;
			left: 5px;
			top: 9px;
			background: white;
			width: 2px;
			height: 2px;
			box-shadow:
				2px 0 0 white,
				4px 0 0 white,
				4px -2px 0 white,
				4px -4px 0 white,
				4px -6px 0 white,
				4px -8px 0 white;
			transform: rotate(45deg);
		}
	}
}
</style>