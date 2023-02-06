<script>
	import Header from "../../components/Header.svelte";
    import * as api from "../../api.js";
    
    export let data;

    let errorRegister = data.errorRegister;
    let user = {
        "username": "",
        "password": ""
    };
    
    const registerFunction = async () => {
        const response = await api.sendRequest('POST', "http://localhost:3000/users/register", "", user);
        response.username == user.username ? window.location.href = "/login" : errorRegister = true;
    }
</script>

<head>
    <title>Register Page</title>
</head>

<body>
    <Header></Header>
    <div class="wrapper">
        <div class="container">
            <h2> REGISTER </h2>
            <form class="form" on:submit={registerFunction}>
                <input type="text" id="username" name="username" placeholder="username" bind:value={user.username} required>
                <input type="password" id="password" name="password" placeholder="password" bind:value={user.password} required>
                <input type="submit" class="submit" value="REGISTER"/>
            </form>
            {#if errorRegister}
            <span> An error occured ! </span>
            {/if}
        </div>
    </div>
</body>

<style lang="css">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    body {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .wrapper {
        height: 75vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 160px;
    }
    .container {
        height: 300px;
        width: 400px;
        border: 3px solid white;
        border-radius: 25px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
    }
    .container h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
    }
    input[type=submit] {
        background-color : #6fa8dc;
        padding: 15px 32px;
        font-size: 12px;
        margin: 20px 5px;
        border: 2px solid #f6f6f6;
        display: inline-block;
        height: 100%;
        border-radius: 5px 5px 5px 5px;
        width: 65%;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        color : white;
        font-weight: 500;
    }
    input[type=submit]:hover {
        background-color: #39ace7;
        cursor: pointer;
    }
    input[type=text], input[type=password] {
        background-color: #f6f6f6;
        border: none;
        color: #0d0d0d;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 5px;
        width: 85%;
        border: 2px solid #f6f6f6;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        -webkit-border-radius: 5px 5px 5px 5px;
        border-radius: 5px 5px 5px 5px;
    }

    input[type=text]:focus, input[type=password]:focus {
        background-color: #fff;
        border-bottom: 2px solid #5fbae9;
    }

    input[type=text]::placeholder, input[type=password]::placeholder {
        color: grey;
    }
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .submit {
        margin-top: 20px;
        height: 30px;
    }
</style>