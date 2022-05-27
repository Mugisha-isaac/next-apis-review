import { fetcher } from "../fetch";
import useSWR from 'swr';


export function useCurrentUser(){
    return useSWR('/api/user', fetcher);
}

export function useUser(id){
    return useSWR(`api/user/${id}`, fetcher);
}