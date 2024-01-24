import React, {
  createContext,
  useCallback,
  useEffect,
  useContext,
  useState,
} from "react";
import Products from "/src/Products_data/products";

const AppContext = createContext();

function Context({ children }) {
  const [products, setProducts] = useState([]);
  const [homeProducts, setHomeProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    populateProducts(Products);
    populateHomeProduct(Products);
  }, []);

  const populateProducts = (products) => {
    setProducts((prevState) => [...prevState, ...products]);
  };

  const populateHomeProduct = useCallback((products) => {
    const filteredProducts = products.splice(0, 6);

    setHomeProducts(filteredProducts);
  });

  const addToProductDetails = (id) => {
    const filteredProduct = products.filter((product) => product.id === id);
    setProductDetails(filteredProduct);
    window.scroll(0, 10);
  }

  const selectAmount = (num, id) => {
    const productAmountEdit = productDetails.map((item) => {
      if (item.id === id) {
        item = { ...item, amount: num };
      }
      return item;
    });
    
    setProductDetails(productAmountEdit);
  }

  const addToCart = () => {
    setCart((prevState => [...prevState, ...productDetails]));
  }

  return (
    <AppContext.Provider
      value={{
        homeProducts,
        products,
        addToProductDetails,
        productDetails,
        selectAmount,
        cart,
        addToCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
