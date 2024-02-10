import axios from "axios"

export const fetchData = (async ()=>{
    const res = await fetch('https://dummyjson.com/carts')
    return await res.json()
})

export const deleteCart = (id:string|number)=>{return axios.delete(`https://dummyjson.com/carts/${id}`)
}