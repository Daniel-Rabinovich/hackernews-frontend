import { fetchMany } from '$lib/fetch'

export async function load({ params }) {
        const result = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        let postIds = await result.json()
        
        postIds = postIds.slice(params.slug*10,params.slug*10 + 10)

        let posts = fetchMany(postIds)

        return {
            posts
        } 
}