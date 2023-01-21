<script lang="ts">
	import AddToCartButton from './AddToCartButton.svelte';
	import ECommerceImage from './ECommerceImage.svelte';
	import ECommercePrice from './ECommercePrice.svelte';
	import ECommerceRating from './ECommerceRating.svelte';
	import ECommerceTitle from './ECommerceTitle.svelte';

	export let imageSrc: string;
	export let name: string;
	export let rating: number;
	export let price: number;
	export let onAddToCart: () => void;
</script>

<div
	class="inline-block w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
>
	<slot name="image">
		<ECommerceImage {imageSrc} />
	</slot>
	<div class="px-5 py-5">
		<slot name="title">
			<ECommerceTitle {name} />
		</slot>
		<slot name="rating">
			<ECommerceRating {rating} />
		</slot>
		<div class="flex items-center justify-between">
			<slot name="price">
				<ECommercePrice price="${price}" />
			</slot>
			<slot name="cta">
				<AddToCartButton on:click={onAddToCart} />
			</slot>
		</div>
	</div>
</div>
