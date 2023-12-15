
import '../assects/styles/main.css';
import whatsapp from '../assects/Image&Svg/whatsapp.svg'
import phonepe from '../assects/Image&Svg/phonepe.svg'
import gpay from '../assects/Image&Svg/gpay.svg'
import Logo from '../assects/Image&Svg/Logo.png'
export default function Main_content(props){
    return(  
        <div className="main flex">
                <div className="main-img"><img id="m1" src={props.img}/></div>
                <div className="main-details">
                    <div className="details-nav flex">
                        <img id="d1" src={Logo} alt='logo'/>
                        <h2 id="d2">{props.name}</h2>
                    </div>
                    <div className="details-main">
Lorem ipsum dolor sit amet consectetur adipisicing elit
. Non nisi aut, exercitationem aperiam architecto consequuntur 
ex quibusdam explicabo, eum omnis fugiat voluptatum expedita 
quis dolor harum dolores voluptatem. Libero, maiores?
                    </div>
                    <div className="footer flex">
                        <div className="f1 flex fclass" href=""><img src={phonepe}className='mar'/>9080XXXXXupi</div>
                        <div className="f2 flex fclass" href=""><img src={whatsapp} className='mar'/>908000000</div>
                         <div className="f3 flex fclass" href=""><img src={gpay} className='mar'/>908000000</div>
                         
                    </div>
                </div>
        </div>
    )
}