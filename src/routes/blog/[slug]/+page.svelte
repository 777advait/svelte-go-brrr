<script lang="ts">
	import { error } from "@sveltejs/kit";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<h1>{data.slug}</h1>
