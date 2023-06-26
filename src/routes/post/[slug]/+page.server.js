import { fetchMany } from "$lib/fetch"

export const load = async ({ params }) => {

    let post = await fetchMany([+params.slug])
    post = post[0]
   

    let comments = false
    try {
        comments = await fetchMany(post.kids.map(i => +i))
    } catch (e) {
        console.log(e)
    }
    
    
    return {
        slug: params.slug,
        post,
        comments
    }
}
