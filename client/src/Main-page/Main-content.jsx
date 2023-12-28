
import '../assects/styles/main.css';
import whatsapp from '../assects/Image&Svg/whatsapp.svg'
import phonepe from '../assects/Image&Svg/phonepe.svg'
import gpay from '../assects/Image&Svg/gpay.svg'
import Logo from '../assects/Image&Svg/Logo.png'
import { useEffect } from 'react';
export default function Main_content({name,posts}){
    return(  
        <>
        {posts.map((post,index)=>(
        <div className="main flex">
                <div className="main-img"><img id="m1" src={''}/></div>
                <div className="main-details">
                    <div className="details-nav flex">
                        <img id="d1" src={Logo} alt='logo'/>
                        <h2 id="d2">{name}</h2>
                    </div>
                    <div className="details-main">
                        <div>{post.title}</div>
                        <div>{post.detail}</div>
                    </div>
                    <div className="footer flex" key={index}>
                        <div className="f1 flex fclass" href=""><img src={phonepe}className='mar'/>{post.gpay}</div>
                        <div className="f2 flex fclass" href=""><img src={whatsapp} className='mar'/>{post.whatsapp}</div>
                         <div className="f3 flex fclass" href=""><img src={gpay} className='mar'/>{post.gpay}</div>
                         
                    </div>
                </div>
        </div>
        ))}
        </>
    )
}