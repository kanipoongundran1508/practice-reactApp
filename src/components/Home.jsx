import axios from "axios";
import { useEffect } from "react";

export const Home = () => {

    async function getPost() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log("Error fetching API",err);
        }    
    }


    async function getPostUsingAxios() {
        try {
            await axios("https://jsonplaceholder.typicode.com/posts").then((res)=>{
                console.log(res.data)
            })


        } catch (err) {
            console.log("Error fetching API",err);
        }
    }
    

    useEffect(()=> {
        getPostUsingAxios();
    },[] )


    return(
        <div>
            This is Home page
        </div>
    )

    


    
}