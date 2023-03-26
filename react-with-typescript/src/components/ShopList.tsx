import { Shop } from "../Models/Shop";
import ShopCard from "./ShopCard";

interface ShopListProps {
    shops: Shop[];
}

// Passign data to a component using Props
function ShopList({shops} : ShopListProps) {
    return (
        <div>
            <pre>{JSON.stringify(shops, null, ' ')}</pre>

            {/*Format the list data as list items */}
            <ul className="row">
                {shops.map((shop) => (
                    <li key={shop.id}>{shop.name}</li>
                ))}
            </ul>

            {/**Format the list data as Cards */}
            <div className="row">
                {shops.map((shop) => (
                    <div key={shop.id} className="cols-sm">
                        <div className="card">
                            <img src={shop.imageUrl} alt={shop.name} width={100} height={100} />
                            <section className="sectiion dark">
                                <h5 className="strong"> 
                                    <strong>{shop.name}</strong>
                                </h5>
                                <p>Description: {shop.description}</p>
                                <p>Budget: {shop.budget.toLocaleString()}</p>
                            </section>
                        </div>
                    </div>    
                ))}
                
            </div>

            
            {/**Render the reusable component */}
            <div className="row">
                {shops.map((shop) => (
                    <div key={shop.id} className="cols-sm">
                         <ShopCard shop={shop}></ShopCard>
                    </div>    
                ))}
                
            </div>

        </div>)

}

export default ShopList;