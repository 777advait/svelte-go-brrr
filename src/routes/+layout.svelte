<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Svelte + TS + Vite</title>
</svelte:head>

{@render children()}
