import CategoryMain from '../../components/categories-main/category-main.component';


const categories = [
  {
    "id": 1,
    "title": "Tools",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "Furnitures",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
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
    "title": "Home Appliances",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  },
  
]


const Home = () => {
  return (
      <div style={{marginTop: "40px"}}>
        <CategoryMain categories={categories}/>
      </div>
  );
}

export default Home;
