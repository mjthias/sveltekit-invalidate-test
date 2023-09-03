<script>
  export let data;
  $: title = data.page.title;
  $: imageUrl = data.page.imageUrl;
</script>

<h1>{title}</h1>
<img src={imageUrl} alt="A cute dog, {title}" />
