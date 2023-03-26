import { Shop } from "../../Models/Shop";
import bookShopImg from '../img/Online-Book-Store.jpg';
import computerShopImg from '../img/computer-shop.jpg';

export const Mock_SHOPS = [
    new Shop({
        id: 1,
        name: 'Book Shop',
        description: 'Online Book store where you can buy any kinds of books',
        imageUrl: bookShopImg,
        budget: 5672,
        isActive: true
    }),
    new Shop({
        id: 2,
        name: 'Computer Assests Shop',
        description: 'Online Computer assests store where you can buy any kinds of parts of computer',
        imageUrl: computerShopImg,
        budget: 15672,
        isActive: false
    })
]