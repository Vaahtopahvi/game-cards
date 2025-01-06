import Card from "./components/Card";
import img1 from "./assets/image1.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";
import img4 from "./assets/image4.png";
import img5 from "./assets/image5.png";
import CardStacker from "./components/CardStacker";

const App = () => {
  const data = [
    {
      name: "Wise Old Man",
      subtitle: "Resident of Gielinor",
      rating: "4.6",
      background: { top: "#2d3142", bottom: "#c5a3cf" },
      image: img1,
    },
    {
      name: "The Binding of Isaac",
      subtitle: "Isaac, the basement Boy",
      rating: "5.0",
      background: { top: "#1B1B1B", bottom: "#632842" },
      image: img2,
    },
    {
      name: "God Of War",
      subtitle: "Furious Kratos",
      rating: "4.3",
      background: { top: "#4b1e11", bottom: "#f17b3e" },
      image: img3,
    },
    {
      name: "Silent Hill 2",
      subtitle: "Pyramid Head, scary",
      rating: "4.8",
      background: { top: "#6B2F2F", bottom: "#7F4E33" },
      image: img4,
    },
    {
      name: "Battlefield 4",
      subtitle: "One of the great old modern battlefields",
      rating: "4.9",
      background: { top: "#0b132b", bottom: "#f28a30" },
      image: img5,
    },
  ];

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      <CardStacker data={data}></CardStacker>
    </div>
  );
};

export default App;
