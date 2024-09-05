import Header from "../Components/Header/Header";
import discover from "../Components/Image/discover.jpg"
function Home (){
    return(
    <div className="bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${discover})` }}>
     <Header/>
    </div>
    )
}
export default Home;