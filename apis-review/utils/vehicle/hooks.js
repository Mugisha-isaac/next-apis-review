
import { fetcher } from "../fetch";
import useSWRInfinite from 'swr/infinite';

export function useVehiclesPages({creatorId,limit=10} = {}){
    const {data,error,size,...props} = useSWRInfinite((index,previousPageData)=>{
        if(previousPageData && previousPageData.vehicles.length === 0) return null;

        const searchParams = new URLSearchParams();
        searchParams.set('limit',limit);

        if(creatorId) searchParams.set('by',creatorId);

        if(index !==0){
            const before = new Date(
                new Date(previousPageData.vehicles[previousPageData.vehicles.length -1].createdAt
                    
                ).getTime()
            );

        searchParams.set('before', before.toJSON());     
        }

        return `api/vehicles?${searchParams.toString()}`;
    },
    
     fetcher,{
         refreshInterval:10000,
         revalidateAll:false
     }
    );

    const isLoadingInitialData = !data && !error;
    const isLoadingMore = isLoadingInitialData || (size>0 && data && typeof data[size-1] === 'undefined');
    const isEmpty = data ?.[0]?.length === 0;
    const isReachingEnd = isEmpty || (data&&data[data.length-1]?.vehicles?.length < limit);

    return {
        data, error, size, isLoadingMore, isReachingEnd, ...props
    }
}