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
                <li>Add</li>
                <li>Manage</li>
                <li></li>
                <li>Profile</li></ul></div>
            <div className='dash-service'></div>
            </div>
    </div>)
}