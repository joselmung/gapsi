import React, {useState,useEffect} from 'react';
import SearchBar from '../components/searchBar';
import storeStyle from '../resources/styles/store.module.css';
import VirtualScroll from '../components/virtualScroll'
import {Product as productService} from '../services';
import Product from '../components/product'
import ShoppingCart from '../components/shoppingCart';
import { connect } from "react-redux"
const Store =  ({search}) =>{
    const [productList,setProductList] = useState([]);
   
    useEffect(()=>{
   
          loadMore();
          


    },[search]);

    const loadMore = async (v) => {
        let items = [];
        try{

            if(v === undefined){
                v = 1
            }
            console.log(v);
    
            let products = await fetch(`https://node-red-nxdup.mybluemix.net/productos/${search}/${v}`);
            products   = await products.json();
           
    
            products.data.products.map((product)=>{
             
                items.push(
                   <Product product={product} />
                )
    
            });

        }catch{

        }
        

     setProductList(items);
        

    }

    return(
        <div className={storeStyle.container}>
            <div className={storeStyle.searchBar}><SearchBar ></SearchBar></div>
            <div  className={storeStyle.shopping}>
                <ShoppingCart></ShoppingCart>
            </div>
            <div  className={storeStyle.products}>
                <VirtualScroll loadFunc={loadMore} items={productList} ></VirtualScroll>
            </div>
        </div>
    )
}
const stateToProps = ({ search }) => ({ search });
const dispatchToProps = (dispatch) => ({
});

 
const conn = connect(stateToProps, dispatchToProps);

export default conn(Store);