import Card from '../cards/cards.component';
import './card-list.component.css';

const CardList = (props) => {
    return (
        <div className='card-list'>
            {
                props.monstors.map(monstor => <Card key={monstor.id} monstor={monstor} />)
            }
        </div>
    );
}

export default CardList;