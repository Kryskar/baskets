import {useQuery} from '@tanstack/react-query'
import { fetchData } from './queries'

export const useBasketData = () => {
    const{data, isLoading, isError} = useQuery({queryKey:["carts"], queryFn:()=>fetchData()})
    return {data, isLoading, isError}
}