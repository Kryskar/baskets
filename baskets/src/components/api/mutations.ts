import { useMutation, useQueryClient } from "react-query"
import { deleteCart } from "./api"


export const useMutateCart = ()=> {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({mutationFn:(id:string|number)=>deleteCart(id), onSuccess:()=>{
        queryClient.invalidateQueries('carts')
    }})
    return {mutate}
}