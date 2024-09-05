import Card from "../Components/Cards/Card";
import Header from "../Components/Header/Header";
import discover from "../Components/Image/discover.jpg";

function Home() {
  return (
    <div className="relative bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${discover})` }}>
      <Header />
      <div className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Card />
      </div>
    </div>
  );
}

export default Home;
