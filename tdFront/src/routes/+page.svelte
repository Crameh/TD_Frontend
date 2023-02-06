<script>
  import Header from '../components/Header.svelte';
</script>

<Header></Header>
<body>
  <div class="container">
    <h1> TD - Frontend - Develop a frontend application </h1>
    <p>
      The frontend is composed of at least:
      <ul>
        <li>One login page (containing a link to the register page)</li>
        <li>One register page</li>
        <li>One “Location” page in which all locations are listed in a paginated array</li>
    </ul>
    <p>
      <h3>User Stories</h3>
      <ul>
        <li>As a random visitor, I want to be able to register an account or log-in, so I can
          access all features</li>
        <li>As a random visitor, I want to be redirected to the login/register page when I click on
          “location" tab, so that I know I must log-in to see its content
          </li>
        <li>As a logged-in user, I want to see locations and be able to click on one location to
          open a modal containing details, so that the website is useful</li>
        <li>As an “admin" user, I want to see a “Add Location” button in the location page, so
          that I can create a new location
          </li>
        <li>As an “admin" user, I want to see a button to edit locations in the array of locations,
          so that I can edit existing locations</li>
        <li>As an “admin" user, I want to see a button to delete locations in the array of
          locations so that I can delete existing locations</li>
      </ul>

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
</style>