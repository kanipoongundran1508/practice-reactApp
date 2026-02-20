import axios from "axios";
import { useEffect } from "react";
import ProfilePic from './components/Profile.jpg';

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
            <div className="card">
                <img className="card-img"  src={ProfilePic} alt="Card-image" />
                <h2 className='card-title'>Kanipoongundran</h2>
                <p className='card-text'>I'm Learning FullStack Developer</p>
            </div>
            <button>Submit</button> <br />
            

        </div>
    )

    


    
}