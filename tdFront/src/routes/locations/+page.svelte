<script>
	import { goto } from "$app/navigation";
    import { onMount } from "svelte";
	import Header from "../../components/Header.svelte";
	import Location from "../../components/Location.svelte";
    import * as api from "../../api.js";

    export let data;

    let locations = [];
    let userRole;

    onMount(async () => {
        await api.sendRequest('GET', "http://localhost:3000/users/me", sessionStorage.getItem("token"))
        .then(data => userRole = data.role).catch(() => goto("/login"))

        await api.sendRequest("GET", "http://localhost:3000/locations", sessionStorage.getItem("token"))
        .then(data => locations = data)
    });
</script>

<body>
    <Header></Header>
    <div class="after">
        {#if userRole == "admin"}
        <div class="location">
            <Location location="{data.null_location}" create="{true}" role="{userRole}"> </Location>
        </div>
        {/if}
        {#each locations as location (location._id)}
        <div class="location">
            <Location location="{location}" create="{false}" role="{userRole}"></Location>
        </div>
        {/each}
    </div>
    
</body>

<style>
    .after {
        margin-top: 160px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: space-around;
    }
    .location {
        width: 30%;
        margin: 1.5%;
    }
</style>