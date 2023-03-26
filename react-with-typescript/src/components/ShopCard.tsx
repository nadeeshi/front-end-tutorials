import { Shop } from "../Models/Shop";

interface ShopCardProps {
    shop: Shop;
}

function formatDescription(description: string) {
    return description.substring(0, 60) + '...';
}

function ShopCard(props: ShopCardProps) {
    const{shop} = props;

    return(
        <div className="card">
            <img src={shop.imageUrl} alt={shop.name} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{shop.name}</strong>
                </h5>
                <p>{formatDescription(shop.description)}</p>
                <p>Bugest: {shop.budget.toLocaleString()}</p>
            </section>
        </div>
    );
}

export default ShopCard;