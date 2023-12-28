import '../assects/styles/dashboard.css'
import logo from '../assects/Image&Svg/Logo.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
export default function Dashboard(){ 
    axios.defaults.withCredentials=true;
    const nav = useNavigate()
    const [addpost,setAddpost]=useState({
        owner:"",name:"",title:"",detail:"",phonepay:"",whatsapp:"",gpay:""
    })
    console.log(addpost)
    function handleInput(e) {
        const { name, value } = e.target;
        setAddpost({ ...addpost, [name]: value })
    }
    useEffect(()=>{
    axios.get("http://localhost:9000/dashboard")
    .then(response=>{
        if(response.data!=="Success"){
            nav('/login')
        }
        else{axios.get("http://localhost:9000/dashboarddata")
        .then(res=>{
            setAddpost({owner:res.data._id,name:res.data.name})
        })}
    })
    .catch(err=>{
        console.log(err)
    })
    },[])
     const handlesubmit=()=>{
      axios.post("http://localhost:9000/addpost",addpost)
      .then(res=>{
        toast.success(res.data)
      }).catch(err=>{
        console.log(err)
      })
     }
    return(
    <div className="container-dashboard">
        <div className="dashboard-nav flex">
                <img id="dash-logo" src={logo} />
            </div>
            <div className="dash-main">
            <div className="dash-info"><ul>
                <li><button>ADD</button></li>
                <div className="add flex">
                    <div id="dash-user-name"></div>
                    <input id="dash-input" type='text' name="title" value={addpost.title} onChange={handleInput}/>
                    <input id="dash-input" type='text' name="detail" value={addpost.detail} onChange={handleInput}/>
                    <input id="dash-input" type="text" name="phonepay" value={addpost.phonepay} onChange={handleInput}/>
                    <input id="dash-input" type="text" name="whatsapp" value={addpost.whatsapp} onChange={handleInput}/>
                    <input id="dash-input" type="text" name="gpay" value={addpost.gpay} onChange={handleInput}/>
                    <button onClick={handlesubmit}>submit</button>
                </div>
                <li><a href=''>Manage Post</a></li>
                {/* <li></li> */}
                <li><a href=''>Profile</a></li></ul></div>
            <div className='dash-service'></div>
            </div>
    </div>)
}