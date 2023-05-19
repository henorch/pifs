import { createContext, useState } from "react";
import { PRODUCTS } from "../assets/product";
import { useEffect } from "react";
import { addCollectionAndDocument } from "../utils/firebase/firebase";
import { HOMEAPPLINACES } from "../assets/firebasedata/home_appliances";
import { INTERRIOR } from "../assets/firebasedata/Interior_decoration";
export const ProductContext = new createContext({
    products: PRODUCTS,
    filteredProduct: null,
    setProductFiltred: () => null
})


export const ProductProvider = ({children}) => {
    const [products] = useState(PRODUCTS)
    const [filteredProduct, setProductFiltred] = useState(PRODUCTS)
  
    const value = {
        products,
        filteredProduct,
        setProductFiltred
    }

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}