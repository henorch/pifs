import { createContext, useState } from "react";
import { PRODUCTS } from "../assets/product";
export const ProductContext = new createContext({
    products: PRODUCTS,
    filteredProduct: null,
    setProductFiltred: () => null
})


export const ProductProvider = ({children}) => {
    const [products] = useState(PRODUCTS)
    const [filteredProduct, setProductFiltred] = useState(null)

    const value = {
        products,
        filteredProduct,
        setProductFiltred
    }

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}