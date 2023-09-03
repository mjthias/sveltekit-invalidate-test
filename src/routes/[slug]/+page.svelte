<script>
  export let data;
  $: slug = data.page.slug;
  $: title = data.page.title;
  $: imageUrl = data.page.imageUrl;

  async function revalidate() {
    const conn = await fetch(`/api/revalidate?path=/${slug}`);
    if (conn.ok) location.reload();
  }
</script>

<h1>{title}</h1>
<img src={imageUrl} alt="A cute dog, {title}" />

<button on:click={revalidate}>Revalidate</button>
