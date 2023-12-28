import Nav from '../Main-page/Main-nav';
import Main_content from '../Main-page/Main-content'
import Logo from '../assects/Image&Svg/main1.png'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Main(){
    const [postdata,setPostdata]=useState([])   
    console.log(postdata)  
    useEffect(()=>{
        axios.get("http://localhost:9000/getpost")
        .then(res=>{
           const userdata=res.data 
           const accumdata=[]
           userdata.forEach(user => {
            const postarray={
                name:user.name,
                 post:user.post}
               accumdata.push(postarray)
          });
            setPostdata(accumdata)
        })
        .catch(err=>{
            console.log(err)
        })
        },[])
    return(
        <div >
            <Nav/>
            <div className="main-content "> 
            {postdata.map(user => (
                <Main_content key={user.name} name={user.name} posts={user.post}/>
            ))}
            </div>
        </div>
    )
}
export default Main;