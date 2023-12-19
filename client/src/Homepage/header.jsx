import '../assects/styles/home.css';
import Email_icon from '../assects/Image&Svg/email.svg';
import Phone_icon from '../assects/Image&Svg/phone.svg';
import Instagram_icon from '../assects/Image&Svg/insta.svg';
import Meta_icon from '../assects/Image&Svg/meta.svg';
import Linkdin_icon from '../assects/Image&Svg/linkdin.svg';
import Logo_icon from '../assects/Image&Svg/Logo.png';
function Header(){
return(<header>
        <div class="info">
            <div class="info-left">
                <a href="" id="i1">FAQ</a>
                <a href="" id="i2">HelpDesk</a>
                <a href="" id="i3">Support</a>
            </div>
            <div class="info-right">
                <div id="i4"><img src={Email_icon}/>Sample@gmail.com</div>
                <a href="" id="i5"><img src={Phone_icon}/></a>
                <a href="" id="i6"><img src={Instagram_icon}/></a>
                <a href="" id="i7"><img src={Meta_icon}/></a>
                <a href="" id="i8"><img src={Linkdin_icon}/></a>
            </div>
        </div>
        <div class="bg">
        <div class="nav">
            <div class="nav1"><img id="logohome"src={Logo_icon}/>
            </div>
            <div class="nav2">
                <div class="navbar">
                <a href="" id="n2">Home</a>
               <a href="/about" id="n3">About us</a>
               <a href="" id="n4">Stories</a>
               <a href="" id="n5">News</a>
               <a href="" id="n6">Causes</a>
               <a href="/signup" id="n7">Login</a>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="c1">
                <p id="c1"><span>SAVE</span> THE <span>LIFE</span></p>
                <p id="c2">Change is Coming,come be a Part of it</p>
            </div>
                <div class="c2">
                    <a href='/donate'><button id="c3">DONATE</button></a></div>
                </div>
        </div>
    </header>)
}
export default Header;