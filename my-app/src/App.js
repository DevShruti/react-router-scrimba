import React from "react"

import Home from "./Home"
import Products from "./Products"
import {Link, Routes, Route} from "react-router-dom"
import ProductDetail from "./ProductDetail"

function App() {    
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
          
            <Routes>
                <Route exact path="/"  element={<Home />}>
                    </Route>
                <Route path="/products" element={<Products />}>
                  </Route>
                  <Route path="/products/:productId" element={<ProductDetail/>}>
                </Route>
      
            </Routes>
          
            {/**
 * Challenge:
 * 
 * 1. Create a ProductDetail component
 * 2. Link each product name to a detail page of that product 
 *    under the route "/products/{insert product id here}" (e.g.: "/products/2")
 * 3. Clicking the product name should replace the product list page with
 *    the detail page of that component.
 * 
 * Hint: Check out the `useParams` lesson if you need a refresher.
 */}
            
        </div>
    )
}

export default App