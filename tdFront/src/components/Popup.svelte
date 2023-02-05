<script>
    import * as api from "../api.js";

    export let location;
    export let pop;
    export let add;

    const editLocation = async(id) =>{
        closePopup();
        return await api.sendRequest('PATCH', `http://localhost:3000/locations/${location._id}`, sessionStorage.getItem("token"), location)
        .then(() => window.location.href = "/locations")
    }
    const addLocation = async () => {
        return await api.sendRequest('POST', "http://localhost:3000/locations/", sessionStorage.getItem("token"), location)
        .then(() => window.location.href = "/locations")
    }
    const closePopup = () => {
        pop = false;
        sessionStorage.setItem("pop", "false");
    }
</script>

<body>
    {#if pop}
    <div class="popup">
        <div class="center">
            
            <div class="details">

                <div class="details_head">
                    <div class="case">
                        <span>Title : </span>
                        <input name="title" bind:value={location.filmName} id="title">
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <h2 on:click={closePopup}> &#10060; </h2>
                </div>
                
                <div class="details_body">
                    <div class="details_left">
                        <div class="case">
                            <span>Film Type :</span>
                            <input name="filmType" bind:value={location.filmType} id="filmType">
                        </div>
                        <div class="case">
                            <span>Film Director :</span>
                            <input name="filmDirectorName" bind:value={location.filmDirectorName} id="filmDirectorName">
                        </div>
                        <div class="case">
                            <span>Film Producer :</span>
                            <input name="filmProducerName" bind:value={location.filmProducerName} id="filmProducerName">
                        </div>
                        <div class="case">
                            <span>Address :</span>
                            <input name="address" bind:value={location.address} id="address">
                        </div>
                        <div class="case">
                            <span>District :</span>
                            <input name="district" bind:value={location.district} id="district">
                        </div>
                    </div>

                    <div class="details_right">
                        <div class="case">
                            <span>Coordinates x :</span>
                            <input name="geoX" bind:value={location.geolocation.coordinates[0]} id="geoX">
                        </div>
                        <div class="case">
                            <span>Coordinates y :</span>
                            <input name="geoY" bind:value={location.geolocation.coordinates[1]} id="geoY">
                        </div>
                        <div class="case">
                            <span>Year :</span>
                            <input name="year" bind:value={location.year} id="year">
                        </div>
                        <div class="case">
                            <span>startDate :</span>
                            <input name="startDate" bind:value={location.startDate} id="startDate">
                        </div>
                        <div class="case">
                            <span>endDate :</span>
                            <input name="endDate" bind:value={location.endDate} id="endDate">
                        </div>

                        <div class="details_actions">
                            {#if add}
                            <button type="button" on:click={addLocation}> OK </button>
                            {/if}
                            {#if !add}
                            <button type="button" on:click={editLocation}> OK </button>
                            {/if}
                        </div>

                    </div>   

                </div>  
               
            </div>
        </div>
    </div>
    {/if}
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@200;500&display=swap');
    .popup {
        top : 70px;
        left: 0;
        height: 100%;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .center {
        margin-top: -160px;
        height: 75%;
        width: 75%;
        background-color: bisque;
    }
    .details{
        height: 100%;
        width: 100%;
        background-color: #0b5394;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
    }
    .details input {
        background-color: #0b5394;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
        width: 65%;
    }
    .details_head{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 20%;
    }
    .details_head .case{
        width: 95%;
        display: flex;
        justify-content: center;
    }
    .details_head h2:hover{
        cursor: pointer;
    }
    .details_body {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }
    .details_left, .details_right {
        width: 50%;
        height: 500px;
        display: flex;
        flex-direction: column;
        margin-left: 5%;
    }
    .details_left .case, .details_right .case {
        height: 16%;
    }
    .details_actions {
        display: flex;
        justify-content: end;
        align-items: center;
        padding-right: 5%;
        margin-bottom: 10%;
    }
    .details_actions button {
        margin-top: -30px;
        background-color: #6fa8dc;
        height: 50px;
        width: 60%;
        border-radius: 5px;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
    }
    .details_actions button:hover{
        cursor: pointer;
    }
</style>