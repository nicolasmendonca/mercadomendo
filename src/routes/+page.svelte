<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import CartDrawer from '$lib/components/CartDrawer.svelte';
	import ECommerceCard from '$lib/components/ECommerceCard/ECommerceCard.svelte';

	import { type CartItem, cartStore } from '$lib/stores/cart.store';

	import type { PageData } from './$types';

	const handleAddItem = (item: CartItem) => {
		cartStore.update((cart) => cart.addItem(item));
	};

	export let data: PageData;
</script>

<Navbar />

<CartDrawer phoneNumber={data.phoneNumber} />

<div class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
	{#each data.products as product}
		<ECommerceCard
			imageSrc={product.thumbnail}
			name={product.title}
			rating={product.rating}
			price={product.price}
			onAddToCart={() => {
				handleAddItem({ id: product.id, name: product.title, price: product.price });
			}}
		/>
	{/each}
</div>
