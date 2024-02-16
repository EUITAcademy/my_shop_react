import ShopGrid from "../components/ShopGrid.jsx";
import { defer, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/Loader.jsx";
import { getToken } from "../util/token-manager.js";

import axios from "axios";

export default function ShopPage() {

  const { products } = useLoaderData();

  return (

    <Suspense fallback={<Loader />}>
      {/* Await manages the deferred data (promise) */}
      <Await resolve={products}>
        {/* this calls back when the data is resolved */}
        {(resolvedProducts) => (
          <ShopGrid items={resolvedProducts} />
        )}
      </Await>
    </Suspense>
  );
}


async function loadProducts() {
  try {
    // Axios offers several advantages over native Fetch method
    // such as neat error handling, request cancellation and other features
    const response = await axios.get('http://localhost:8080/products', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
    });

    const data = response.data;
    return data.products;

  } catch (err) {
    const errorMessage = err.response.data.message;
    const status = err.response.status;
    // Will be intercepted by router and lead us to error page
    throw new Response(errorMessage, { status: status, statusText: errorMessage });
  }
}


export async function loader() {
  return defer({ products: loadProducts() });
}

