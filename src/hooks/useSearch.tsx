import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IBook } from "../types";

const useSearch = (query: string) =>
{
    //Data fetching
    const searchBooks = async ():Promise<IBook[]> => {
        //axios to request Google Books API 
        const response = await axios.get("https://www.googleapis.com/books/v1/volumes?", 
        {
            params: { q: query, },
        });

        return response.data.items;
    };
    
    //tanstack query for caching 
    return useQuery({
        //takes array of strings
        queryKey: [query],
        queryFn: searchBooks,
        enabled: false,
    });

};

export default useSearch;