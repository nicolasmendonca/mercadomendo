<script lang="ts">
	import { cartStore } from '../stores/cart.store';

	export let phoneNumber: number;

	let message: string = '';
	let name: string = '';
	let whatsappUrl: string;

	$: {
		const url = new URL(`https://wa.me/${phoneNumber}`);
		url.searchParams.set('text', message);
		whatsappUrl = url.toString();
	}

	$: {
		message = [
			`Hi, my name is ${name}`,
			'I would like to order the following items:',
			'',
			...$cartStore.countedItems.map(
				(item) => `${item.quantity} x ${item.name} ($${item.price * item.quantity})`
			)
		].join('\n');
	}
</script>

<!-- drawer component -->
<div
	id="drawer-cart"
	class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-96 dark:bg-gray-800 transition-transform left-0 top-0 -translate-x-full"
	tabindex="-1"
	aria-labelledby="drawer-cart-label"
>
	<h5
		id="drawer-label"
		class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="w-5 h-5 mr-2"
		>
			<path
				d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
			/>
		</svg>
		Checkout
	</h5>
	<button
		type="button"
		data-drawer-hide="drawer-cart"
		aria-controls="drawer-cart"
		class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
	>
		<svg
			aria-hidden="true"
			class="w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		>
		<span class="sr-only">Close menu</span>
	</button>
	<div class="mb-6">
		<div class="mb-6">
			<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Your name</label
			>
			<input
				bind:value={name}
				type="name"
				autocomplete="name"
				id="name"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="John Doe"
				required
			/>
		</div>
		<div class="mb-6">
			<div class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your order</div>
			<ul class="divide-y divide-gray-200 dark:divide-gray-600">
				{#each $cartStore.countedItems as countedItem}
					<li class="py-4 pr-4 flex justify-between items-center">
						<div class="flex items-center">
							<div class="ml-4">
								<div class="text-sm text-gray-900 dark:text-white">{countedItem.name}</div>
							</div>
						</div>
						<div class="text-sm font-medium text-gray-900 dark:text-white">
							${countedItem.price} x {countedItem.quantity} = ${countedItem.price *
								countedItem.quantity}
						</div>
					</li>
				{/each}

				<li class="py-4 pr-4 flex justify-between items-center dark:bg-gray-700">
					<div class="flex items-center">
						<div class="ml-4">
							<div class="text-sm font-bold text-gray-900 dark:text-white">Total:</div>
						</div>
					</div>
					<div class="text-sm font-bold text-gray-900 dark:text-white">
						${$cartStore.total}
					</div>
				</li>
			</ul>
		</div>
		<a
			type="submit"
			class="text-white text-center bg-green-700 hover:bg-green-800 w-full focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 block"
			href={whatsappUrl}>Send message</a
		>
	</div>
</div>
