import CategoryMain from '../../components/categories-main/category-main.component';
import { HomeContainer } from './home.styled';


const categories = [
  {
    "id": 1,
    "title": "Tools",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "Equipments",
    "imageUrl": "https://i.imgur.com/5JTT0kc.jpg"
  },
  {
    "id": 3,
    "title": "Wares",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "Office Surplies",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "Furnitures",
    "imageUrl": "https://i.imgur.com/W0FAXxX.jpg"
  },
  
]


const Home = () => {
  return (
      <HomeContainer>
        <CategoryMain categories={categories}/>
      </HomeContainer>
  );
}

export default Home;
