<template>
	<header class="header">
		<img src="/public/logo.svg" alt="logo" width="77" height="10" class="header__logo">
		<h1 class="header__title">Online Store</h1>
	</header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "../assets/variables";
.header{
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 32px;
	margin-bottom: 48px;
	background-color: $light---neutral--300;
	border-top: 1px solid $light---primary--500;
	border-bottom: 1px solid $light---primary--500;

	&__logo {
		width: 200px;
		margin-right: 32px;
	}

	&__title {
		font-size: 24px;
		font-weight: 600;
		color: $light---primary--600;
	}
}
</style>