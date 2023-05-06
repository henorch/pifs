import { HomeContainer, 
    MainContainer, 
    MainContainer2,
     Main2Inner1, 
     Main2Inner2,
    CategoryContainer } from "./home.styled";
import Image1  from "../../images/pexels-cottonbro-studio-4108723.jpg";


const Category = ({title, imageUrl}) => {
   return (
       <CategoryContainer>
           <div className='background-image' style={{
               backgroundImage: `url(${imageUrl})`,
             }}/>
             <div className='category-body-container'>
               <h3>{title}</h3>
               <span>SHOP NOW</span>
             </div>
           </CategoryContainer>
           )
     }


    

const Home = () => {
    console.log(`${Image1}`);
    return (
        <HomeContainer>
            <MainContainer style={{
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/f/f5/Electronic_circuit.jpg")',
                backgroundRepeat: "no"
            }}> 
                <Category title="Home Appliances"/>
            </MainContainer>
            
            <MainContainer2>
                <Main2Inner1>
                <Category title="Kitchen Equipments"/>
                </Main2Inner1>
                <Main2Inner2>
                <Category title="Clothings"/>
                </Main2Inner2>
            </MainContainer2>
            <MainContainer2>
            <Main2Inner1>
            <Category title="Jeweries"/>
            </Main2Inner1>
            <Main2Inner2>
            <Category title="Footwares"/>
            </Main2Inner2>
            <Main2Inner1><Category title="Others"/></Main2Inner1>
            </MainContainer2>
            <MainContainer2>
            <Category title="Office Surplies"/>
            </MainContainer2>
        </HomeContainer>
    )
}
export default Home;