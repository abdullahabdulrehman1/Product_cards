import { configureStore } from "@reduxjs/toolkit/dist";
// import produc from "./features/product/productSlice.js";
import ProductSlice from "../features/productlist/ProductSlice.js";
import productreducer from "../features/productlist/ProductSlice.js"
const store = configureStore({
    reducer: {
        product: productreducer,
    }
});
export default store;
