import axios from "axios"

export const getData = (async ()=>{
    const res = await axios.get('https://dummyjson.com/carts')
    const data = await res.data
    // console.log(data.carts) delete zadziałalby, gdyby operacja robiona była na normalnej bazie. invalidateQueries robi ponownego fetcha i pobiera się to samo. Aby zrobić to zadanie należałoby robić normalnymi fetchami/axiosem i wyłapywać response z delete dodawać do state usunięte
    return data
})

export const deleteCart = async (id:number)=>{
    // console.log("triger", id)
    const res = await axios.delete(`https://dummyjson.com/carts/${id}`)
    const data = await res.data
    return data
}