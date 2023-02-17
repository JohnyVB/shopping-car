import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { useFilters } from "./hooks/useFilters";
import { products as initialProducts } from './mocks/products.json';

export const App = () => {
  const [products] = useState(initialProducts);

  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}
