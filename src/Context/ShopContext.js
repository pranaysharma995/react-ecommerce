import { createContext, useCallback, useEffect, useState } from 'react'
import axios from 'axios'

export const ShopContext = createContext(null)

function ShopContextProvider ({ children }) {
  const [productData, setProductData] = useState([])
  const [cartData, setCart] = useState()

  const getDefaultCart =useCallback(() => {
      let obj = {}
      for (let i = 0; i < productData.length; i++) {
        obj[i] = 0
      }
      return obj
    },[productData])

  useEffect(
    function () {
      setCart(getDefaultCart())
    },
    [getDefaultCart]
  )

  useEffect(function () {
    axios
      .get('http://localhost:7000/product/show')
      .then(data => {
        if (data) {
          setProductData(data.data.products)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const addToCart = id => {
    setCart(prev => ({ ...prev, [id]: prev[id] + 1 }))
  }
  const removeFromCart = id => {
    setCart(prev => ({ ...prev, [id]: prev[id] - 1 }))
  }
  const contextValue = {productData, cartData, addToCart, removeFromCart }
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  )
}

export default ShopContextProvider
