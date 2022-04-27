import React from "react"
import {useParams} from "react-router-dom"

function ProductDetail() {
    const {productId} = useParams()
    console.log(productId)
    return (
        <h1>Product Detail Page</h1>
    )
}

export default ProductDetail