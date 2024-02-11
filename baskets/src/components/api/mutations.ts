import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCart } from "./api"


export const useMutateCart = ()=> {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({mutationFn:(id:number)=>deleteCart(id), onSuccess:()=>{
        console.log("succes")
        queryClient.invalidateQueries("carts")
    }})
    return {mutate}
}