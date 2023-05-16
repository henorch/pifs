import {useLocation} from 'react-router-dom';
import { DetailContainer, DetailPad, ImageContainer, InfoPad, MainContainer } from './detail.styled';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../../components/button/button.components';

const DetailPage = () => {
    const location = useLocation();
    const { addItemToCart } = useContext(CartContext)
    const {state: {id, name, description, price, imgurl}} = location;

    const addProductToCart = () => addItemToCart(location.state)
    return(
        <MainContainer>
            <DetailContainer>
            <ImageContainer src={`${imgurl}`} 
            style={{
                width:"250px",
                height:"250px"
            }} />
            <DetailPad>
            <InfoPad as="h4"><span>{name}</span></InfoPad>
            <InfoPad as="h2">&#8358;{price}</InfoPad>
            <InfoPad as="h5">{description}</InfoPad>
            <InfoPad>
            <Button 
            onClick={
                addProductToCart
            }
             style={{
                background:'green'
            }}>Add to cart</Button>
            </InfoPad>
            </DetailPad>
            
            </DetailContainer>
            <InfoPad>{description}</InfoPad>
            </MainContainer>
    )
}

export default DetailPage