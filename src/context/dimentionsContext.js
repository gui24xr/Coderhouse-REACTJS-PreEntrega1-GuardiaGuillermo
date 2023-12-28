import { createContext, useState } from "react";



export const DimentionsContext = createContext()


export const DimentionsProvider = ({children}) => {

   
    
    const [screenDimention, setScreenDimention] = useState(0)
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState(null)
    const [availableStock, setAvailableStock] = useState(0)

   
    return(
        <DimentionsContext.Provider 
        
            value={
                    {
                    selectedProductID,
                    setSelectedProductID, 
                    selectedQuantity, 
                    setSelectedQuantity,
                    selectedSize, 
                    setSelectedSize,
                    availableStock, 
                    setAvailableStock,
                    
                }
                }>
            {children}
        </DimentionsContext.Provider>
    )
}