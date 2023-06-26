<script>
    import { fetchMany } from '$lib/fetch'
    export let data
    
    const getComments = async (comment,index) => {
        const newdata = await fetchMany(comment.kids)
        comment.kids = false
        data.comments.splice(index+1,0,...newdata)
        data = data
    }

</script>
<div>
    <div class="comment" id="{data.post.id}">
        <h2>{data.post.title}</h2>
        
        <b>@{data.post.by}</b> 
        { data.post.id } 
        {#if data.post.text}
            <p>{@html data.post.text}</p>
        {/if}
        {#if data.post.url}
            <p><a href={data.post.url}>{data.post.url}</a></p>
        {/if}
    </div>
    <div>
    {#if data.comments}
        {#each data.comments as comment,index}
        <div class="comment" id="{comment.id}">
            <b>@{comment.by}</b> 
            {comment.id} 
            
            {#if data.post.id !== comment.parent}
                <a href="#{comment.parent}">>{comment.parent}</a> 
            {/if}
            
            <p>{@html comment.text}</p>
            
            {#if comment.kids}
                <button on:click={() => getComments(comment,index)}>Load replies</button>  
            {/if}
        </div>
        {/each}
    {/if}
    </div>
</div>

<style>
.comment {
    padding:15px;
    background: #e9ddca;
    margin:5px auto;
    overflow-x:scroll;
}
</style>