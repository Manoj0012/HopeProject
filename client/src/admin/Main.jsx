import Nav from '../Homepage/header';
import Main_content from '../Main-page/Main-content'
import Logo from '../assects/Image&Svg/main1.png'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Main(){
    const [postdata,setPostdata]=useState([])   
    // console.log(postdata)  
    useEffect(()=>{
        axios.get("http://localhost:9000/getpost")
        .then(res=>{
            setPostdata(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        },[])
    return(
        <div >
            <Nav/>
            <div className="main-content ">
            {postdata.map((post) => (
    <Main_content key={post._id} posts={post} /> )
    
    )}
            </div>
        </div>
    )
}
export default Main;