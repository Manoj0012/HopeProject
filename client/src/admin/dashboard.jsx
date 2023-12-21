import '../assects/styles/dashboard.css'
import logo from '../assects/Image&Svg/Logo.png'
export default function dashboard(){
    return(
    <div class="container-dashboard">
        <div className="dashboard-nav flex">
                <img id="dash-logo" src={logo} />
            </div>
            <div className="dash-main">
            <div className="dash-info"><ul>
                <li><button>ADD</button></li>
                <div className="add">
                    <input type='text' />
                    <button>submit</button>
                </div>
                <li><a href=''>Manage Post</a></li>
                {/* <li></li> */}
                <li><a href=''>Profile</a></li></ul></div>
            <div className='dash-service'></div>
            </div>
    </div>)
}