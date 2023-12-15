import Nav from '../Main-page/Main-nav';
import Main_content from '../Main-page/Main-content'
import Logo from '../assects/Image&Svg/main1.png'
const array=[1,2,3]
const contents=array.map((content)=>{
    return <Main_content name="Home" img={Logo}/>
})
function Main(props){
    return(
        <div >
            <Nav/>
            <div className="main-content "> 
            {contents}
            </div>
        </div>
    )
}
export default Main;