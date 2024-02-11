import {useQuery} from '@tanstack/react-query'
import { getData } from './api'

export const useBasketData = () => {
    const{data, isLoading, isError} = useQuery({queryKey:["carts"], queryFn:()=>getData()})
    return {data, isLoading, isError}
}