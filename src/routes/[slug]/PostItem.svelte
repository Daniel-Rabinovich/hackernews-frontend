<script>
    export let post
    $: (post)
</script>

{#if post}
    <div>({post.score})
        <a href={post.url}>
            {post.title}
        </a>
        <br />
        <b>@{post.by}</b>
        <a href="/post/{post.id}">
            {#if post.kids} {post.kids.length} {:else} 0 {/if}
            comments
        </a>
    </div>
{/if}

<style>
div {
    padding:15px;
    background: #e9ddca;
    margin:5px auto;
}
</style>