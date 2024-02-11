import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCart } from "./api"


export const useMutateCart = ()=> {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({mutationFn:(id:number)=>deleteCart(id), onSuccess:(data)=>{
        // console.log("succes", data)
        queryClient.invalidateQueries("carts")
    }})
    return {mutate}
}