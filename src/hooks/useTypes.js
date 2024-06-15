import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../service/pokeapi";

const useTypes = () => {
    const { data } = useQuery({
        queryKey: ['types'],
        queryFn: async () => {
            const { results } = await apiFetch('/type');

            // Return only necessary types
            return results.filter(({ name }) => name !== 'unknown' && name !== 'shadow');
        }
    });

    return data;
};

export default useTypes;
