import './Liste.css';
import Cart from './Card/Cart'

const plantList =  {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isBestSale: false
    };

function Liste() {

  return (
    <div className="list-group list-group-checkable d-grid gap-2 border-0 w-auto"  >
         <Cart scaleValue={plantList} />
    </div>
  );
}

export default Liste;