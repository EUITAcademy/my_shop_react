import { defer, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/Loader.jsx";
import ItemDetails from "../components/ItemDetails.jsx";
import axios from "axios";
import { getToken } from "../util/token-manager.js";

function ItemDetailsPage() {

    const { product } = useLoaderData();

    return (
        <Suspense fallback={<Loader />}>
            {/* Await manages the deferred data (promise) */}
            <Await
                resolve={product}
            >
                {/* this calls back when the data is resolved */}
                {(resolvedProduct) => (
                    <ItemDetails item={resolvedProduct} />
                )}
            </Await>
        </Suspense>
    );
}

export default ItemDetailsPage;


async function loadProduct(id) {
    try {
        const response = await axios.get('http://localhost:8080/product/' + id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${getToken()}` 
            }
        });
        const data = response.data;
        return data.product;

    } catch (err) {
        const errorMessage = err.response.data.message;
        const status = err.response.status;
        // Will be intercepted by router and lead us to error page
        throw new Response(errorMessage, { status: status, statusText: errorMessage });
    }
}


export function loader(id) {
    return defer({ product: loadProduct(id) });
}

