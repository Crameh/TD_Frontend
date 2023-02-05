<script>
    import { onMount } from "svelte";

    onMount(async () => {
        sessionStorage.setItem("token", "null")
        window.location.href = "/login"
    });
</script>