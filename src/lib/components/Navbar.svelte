<script lang="ts">
	import { scale } from 'svelte/transition';
	import { cartStore } from '$lib/stores/cart.store';
</script>

<nav class="sticky top-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
	<div class="container flex flex-wrap items-center justify-between mx-auto">
		<a href="/" class="flex items-center">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="h-6 mr-3 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
				>MercadoMendo</span
			>
		</a>
		<!-- Cart icon button -->
		<button
			class="flex relative items-center justify-center w-12 h-12 border-2 border-blue-800 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
			aria-label="Cart"
			data-drawer-target="drawer-cart"
			data-drawer-show="drawer-cart"
			aria-controls="drawer-cart"
		>
			<span class="sr-only">Cart</span>
			<!-- Heroicon name: outline/shopping-cart -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
				/>
			</svg>
			{#if $cartStore.items.length > 0}
				{#key $cartStore.items.length}
					<div
						transition:scale={{
							start: 3
						}}
						class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
					>
						{$cartStore.items.length}
					</div>
				{/key}
			{/if}
		</button>
	</div>
</nav>
