import Nav from '../Main-page/Main-nav';
import Main_content from '../Main-page/Main-content'
import Logo from '../assects/Image&Svg/main1.png'
import { useEffect } from 'react';
import axios from 'axios';

function Main(props){
    useEffect(()=>{
        axios.get("http://localhost:9000/getpost")
        .then(res=>{
            <Main_content />
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        },[])
    return(
        <div >
            <Nav/>
            <div className="main-content "> 
            </div>
        </div>
    )
}
export default Main;