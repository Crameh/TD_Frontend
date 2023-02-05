<body>
    <div class="bande">
        <h1> Locations WebApp </h1>
    </div>
    <div class="header">
        <a href="/"> HOME </a>
        <a href="/login"> LOGIN </a>
        <a href="/register"> REGISTER </a>
        <a href="/locations"> LOCATIONS </a>
        <a href="/logout"> LOGOUT </a>
    </div>
</body>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    body {
        position: fixed;
        width: 100%;
        
    }
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
    }
    .bande {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #7db5ea;
    }
    .header {
        height: 50px;
        background-color: #0066c7;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
    }
    a:hover {
        color : grey;
    }
</style>