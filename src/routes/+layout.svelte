<script>
    import NavBar from '$lib/components/NavBar.svelte';
</script>

<div class="app-container">
    <NavBar />
    <slot />
</div>

<style>
    .app-container {
      max-height: 100vh; /* Viewport Height */
      overflow-y: auto; /* Enables scroll only if needed */
    }
</style>
