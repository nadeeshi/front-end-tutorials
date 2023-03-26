import { Mock_SHOPS } from "../assests/data/MockShopData";
import ShopList from "../components/ShopList";

function ShopPage() {
   // return <h2>Shop Page</h2>

   return(<>
        <h1>Shops</h1>

        {/*Display data as JSON format*/}
        {/*<pre>{JSON.stringify(Mock_SHOPS, null, ' ')}</pre> */}

        {/*Passing data into a component property */}
        <ShopList shops={Mock_SHOPS} />

        
   </>)
}

export default ShopPage;