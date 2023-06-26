import { setItem, getItem } from "$lib/cache"

export const fetchMany = async (keys) => {
    let data = keys.map(async (id) => {
        if(!getItem(id)){
            const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            const item = await response.json();
            setItem(id,item)
            return item
        } else {
            return getItem(id)
        }
    })
    return await Promise.all(data);
} 