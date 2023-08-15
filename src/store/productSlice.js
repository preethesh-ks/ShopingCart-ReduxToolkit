import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "../utils/StatusCode";
const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state,action){
    //         state.data=action.payload;
    // },
  
  },
    extraReducers:(builder)=>{
            builder
            .addCase(getProducts.pending, (state,action)=>{
                state.status = StatusCode.LOADING;
            })
            .addCase(getProducts.fulfilled,(state,action)=>{
                state.data = action.payload;
                state.status = StatusCode.IDLE;
            })
            .addCase(getProducts.rejected,(state,action)=>{
                state.status = StatusCode.ERROR
            })
    }
});

// export const {getProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get',async()=>{
     try {
       const api = await axios.get("https://fakestoreapi.com/products");
       console.log(api.data);
       const result = api.data;
        return result;
      
     } catch (err) {
       console.log(err);
        throw err;
     }
           
})

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//            try {
//              const api = await axios.get("https://fakestoreapi.com/products");
//              console.log(api.data);
//              const result = api.data;
             
//              dispatch(fetchProducts(result));
            
//            } catch (err) {
//              console.log(err);
//            }
           
         
//     }
// }