<script>
  import "../app.css";
  export let data;
</script>

<nav>
  <a href="/">Home</a>
  {#each data.pages as page}
    <a href="/{page.slug}">{page.title}</a>
  {/each}
</nav>

<slot />

<style>
  a {
    margin-right: 1rem;
  }
</style>
