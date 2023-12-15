import '../assects/styles/home.css';
import footer1 from '../assects/Image&Svg/footer1.png'
import footer2 from '../assects/Image&Svg/footer2.png'
import footer3 from '../assects/Image&Svg/footer3.png'
function Footer(){
    return(
        <footer>
        <div class="bottom">
           <div class="con">
           <div class="c-1 chov"><a href='/donate'><img id="if1"src={footer1}/></a></div>
            <div class="c-2 chov"><a href='/donate'><img id="if2"src={footer2}/></a></div>
            <div class="c-3 chov"><a href='/donate'><img id="if2"src={footer3}/></a></div>
           </div> 
        </div>
    </footer>
    )
}
export default Footer;