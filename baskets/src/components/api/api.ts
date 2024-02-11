import axios from "axios"

export const getData = (async ()=>{
    const res = await axios.get('https://dummyjson.com/carts')
    const data = await res.data
    console.log(data)
    return data
})

export const deleteCart = async (id:number)=>{
    // console.log("triger", id)
    const res = await axios.delete(`https://dummyjson.com/carts/${id}`)
    const data = await res.data
    return data
}