import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import {useParams} from 'react-router-dom';
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RecentView from "../Components/RecentView/RecentView";

function Product()
{
    const {productData}=useContext(ShopContext);
    const {productID}=useParams();
    const product=productData.find((e) => e._id === productID);
    return(
       <div>
        {
            product &&
            <><Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RecentView />
            </>
        }

        </div>
    )
}

export default Product;