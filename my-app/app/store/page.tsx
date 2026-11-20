
"use client";

import { useEffect, useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export default function Store() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );

                if (!response.ok) {
                    throw new Error("Could not retrieve products.");
                }



                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError("There was a problem loading the products.");
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className="p-8">
            <h1 className="mb-6 text-3xl font-bold">
                Online Store
            </h1>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-6 w-full rounded border p-2 text-black"
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-lg border p-4 shadow"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="mb-4 h-48 w-full object-contain"
                        />

                        <h2 className="font-bold">{product.title}</h2>

                        <p className="mt-2">${product.price.toFixed(2)}</p>

                        <p className="mt-2 text-sm text-gray-500">
                            {product.category}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}
