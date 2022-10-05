import "./styles.css";
import { photosData } from "./constants/data";
import Card from "./components/Card/Card";

export default function App() {
  return (
    <div className="App">
      <div className="cardsContainer">
        {photosData.map(({ id, title, thumbnailUrl }) => (
          <Card id={id} key={id} title={title} thumbnailUrl={thumbnailUrl} />
        ))}
      </div>
    </div>
  );
}
