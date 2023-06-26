export let cache = new Map()

export const getItem = (key) => {
    if(!cache.has(key)){
        return false
    } else {
        return cache.get(key)
    }
} 

export const setItem = (key,value) => {
    cache.set(key, value)

    setTimeout(() => {
        cache.delete(key);
    }, 60 * 60 * 1000)

    return cache.get(key)
}
