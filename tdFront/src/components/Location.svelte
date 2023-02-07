<script>
	import Popup from "./Popup.svelte";
    import * as api from "../api.js";

    export let create;
    export let location;
    export let role;
    export let token;

    let pop = false;
    
    const deleteLocation = async () => {
        return await api.sendRequest('DELETE', `http://localhost:3000/locations/${location._id}`, token)
        .then(() => window.location.href = "/locations")
    }
    const switchPopup = () => {
        if (sessionStorage.getItem("pop") == "false") pop = false;
        pop = !pop;
        sessionStorage.setItem("pop", "true");
    }
</script>

<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>

<body>
    <div class="container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="card">
            {#if create}
            <div class="plus">
                <span class="material-symbols-outlined" on:click={switchPopup}> add_circle </span>
            </div>
            {/if}
            {#if !create}
            <div class="card_bande">
                {#if role == "admin"}
                <h1 id="filmName">{location.filmName}</h1>
                {/if}
                {#if role == "user"}
                <h1 id="filmName" class="titleUser" on:click={switchPopup}>{location.filmName}</h1>
                {/if}
                    {#if role == "admin"}
                        <div class="actions">
                            <span class="edit material-symbols-outlined" on:click={switchPopup}> edit </span>
                            <span class="delete material-symbols-outlined" on:click={deleteLocation}> delete </span>
                        </div>
                    {/if}
            </div>
            <div class="infos">
                <h3> Type : {location.filmType} </h3>
                <h3> Director : {location.filmDirectorName} </h3>
                <h3> Location : {location.address} </h3>
                <h3> Year : {location.year} </h3>
            </div>
            {/if}
        </div>
    </div>
    {#if pop}
    <Popup location="{location}" pop="{pop}" add="{create}" token="{token}" role="{role}"></Popup>
    {/if}
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@200;500&display=swap');
    .container {
        margin: 10px;
        border: 1px solid;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .card {
        background-color: #6fa8dc;
        width: 100%;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 15px;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Oswald', sans-serif;
    }
    .card .plus {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card .plus span {
        font-size: 100px;
    }
    .card .plus span:hover{
        cursor: pointer;
        color: grey;
    }
    .card h3 {
        padding-left: 20px;
        color:#0066c7;
    }
    .card_bande {
        background-color: #3d85c6;
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 15px 15px 0 0;
        justify-content: center;
    }
    .card_bande h1{
        font-family: 'Montserrat', sans-serif;
        font-family: 'Oswald', sans-serif;
        color: whitesmoke;
        width: 80%;
        text-align: center;
    }
    .card_bande span{
        cursor: pointer;
        font-size: 25px;
        padding: 5px;
    }
    .card_bande .edit:hover{
        color: grey;
    }
    .card_bande .delete:hover{
        color: red;
    }
    .titleUser {
        cursor: pointer;
    }
</style>