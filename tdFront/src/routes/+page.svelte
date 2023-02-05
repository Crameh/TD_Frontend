<script>
  import Header from '../components/Header.svelte';
</script>

<Header></Header>
<body>
  <div class="container">
    <img src="https://avatars.githubusercontent.com/u/15144640?v=4" alt="">
    <h1> The best teacher </h1>
  </div>

</body>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@200;500&display=swap');
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 180px;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Oswald', sans-serif;
  }
  img {
    border-radius: 50%;
  }
</style>