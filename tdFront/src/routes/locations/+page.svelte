<script>
	import Header from "../../components/Header.svelte";
	import Location from "../../components/Location.svelte";

    export let data;

    const locations = data.locations;
    const userRole = data.userRole;
    const token = data.token;

</script>

<body>
    <Header></Header>
    <div class="after">
        {#if userRole == "admin"}
        <div class="location">
            <Location location="{data.null_location}" create="{true}" role="{userRole}" token="{token}"> </Location>
        </div>
        {/if}
        {#each locations as location (location._id)}
        <div class="location">
            <Location location="{location}" create="{false}" role="{userRole}" token="{token}"></Location>
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