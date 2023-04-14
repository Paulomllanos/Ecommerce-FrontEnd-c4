import ProductContext from "./ProductContext"
import { useReducer } from "react"
import productReducer from "./productReducer"
import axiosClient from "../../config/axiosClient"


const ProductProvider = ({children}) => {

    const initialState = {
        products: [],
        product: [{
            id: "",
            name: "",
            SKU: "",
            description: "",
            price: "",
            image: "",
            stock: ""
        }]
    }

    const [productState, dispatch] = useReducer(productReducer, initialState)

    // productState el estado actual
    const getProducts = async() => {
        try {
            const products = await axiosClient.get("/products")
            const productsInfo = products.data.info;
    
            dispatch(
                {
                    type: "GET_PRODUCTS", 
                    payload: productsInfo 
                })
        } catch (error) {
            console.log(error)
        }
    }
    
    const getProduct = async(id) => {
        try {
            const product = await axiosClient.get(`/products/${id}`)
            const productInfo = product.data.info;
    
            dispatch(
                {
                    type: "GET_PRODUCT", 
                    payload: productInfo 
                })
        } catch (error) {
            console.log(error)
        }
    }

    const reduceStock = async(cartItems) => {
        const productos = { cartItems }
        const result = await axiosClient.put("/product/reduce-stock", productos)
        console.log(result)
    }
    
    return(
      <ProductContext.Provider value={{getProducts, products: productState.products, product: productState.product, getProduct, reduceStock }}>{children}</ProductContext.Provider>  
    )
}

export default ProductProvider;