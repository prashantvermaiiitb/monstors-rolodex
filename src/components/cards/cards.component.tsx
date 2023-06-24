import { Monstors } from "../../App.old";
import "./cards.component.css";
type CardProps = {
  monstor: Monstors;
};
const Card = ({ monstor }: CardProps) => {
  return (
    <div className="card-container">
      <img
        alt="monstor"
        src={`https://robohash.org/${monstor.id}?set=set2&size=180x180`}
      />
      <h2>{monstor.name}</h2>
      <p>{monstor.email}</p>
    </div>
  );
};

export default Card;
