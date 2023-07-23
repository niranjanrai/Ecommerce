import NavBar from "../features/navbar/NavBar";
import { ProductList } from "../features/product-list/ProductList.js";
function Home() {
  return (
    <NavBar>
      <ProductList></ProductList>
    </NavBar>
  );
}

export default Home;
