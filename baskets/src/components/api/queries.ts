export const fetchData = (async ()=>{
    const res = await fetch('https://dummyjson.com/carts')
    return await res.json()
})