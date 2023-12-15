import logo from '../assects/Image&Svg/Logo.png';
import '../assects/styles/main.css';
export default function Main_nav(){
    return(
        <div>

        <div className="main-nav flex">   
                <img id="l1" src={logo} />
                <div className="slogon">
                <h2 id="s1">DONATE</h2>
                <h4 id="s2">A small step can change lots of lives</h4>
                </div>
            </div>
        </div>
    )
}