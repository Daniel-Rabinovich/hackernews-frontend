<script>
    import PostItem from './PostItem.svelte'
    import { page } from '$app/stores'
    export let data 
    let numPages = [...Array(10).keys()]
    $: ({ posts, slug } = data)
</script>

{#each posts as post}
    <PostItem post={post} />
{:else}
    <div>Loading...</div>
{/each}

<div class="nav">
{#each numPages as numPage}
    {#if numPage === +$page.params.slug}
        <div><b><a href="{numPage}">{numPage}</a></b></div>
    {:else}
        <div><a href="{numPage}">{numPage}</a></div>
    {/if}
{/each}
</div>


<style>
.nav {
    display:grid;
    grid-template-columns: repeat(10,1fr);
    grid-gap: 5px;
    
}
.nav div {
    background:#e9ddca;
    text-align:center;
}
.nav a {
    display:block;
    padding:10px;
    text-decoration: none;
}
</style>
