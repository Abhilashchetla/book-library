import React,{useState,useEffect,useContext, createContext} from "react";

export const Bookscontext = createContext();

export const Booksprovider=({children})=>{
    const[books,setbooks]=useState([]);

    useEffect(()=>{
        //To do:set books
        fetch("/books.json")
        .then(response=>response.json())
        .then(data=>setbooks(data))
        .catch((err)=>console.error(err))
    },[]);
    return(
        <Bookscontext.Provider value={books}>
            {children}
        </Bookscontext.Provider>
    )
}