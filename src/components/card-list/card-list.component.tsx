import { Monstors } from "../../App.old";
import Card from "../cards/cards.component";
import "./card-list.component.css";

type CardListProps = {
  monstors: Monstors[];
};

const CardList = ({ monstors }: CardListProps) => {
  return (
    <div className="card-list">
      {monstors.map((monstor) => (
        <Card key={monstor.id} monstor={monstor} />
      ))}
    </div>
  );
};

export default CardList;
