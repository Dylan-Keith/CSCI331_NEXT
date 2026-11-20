
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
                setProducts(data.slice(0, 20));
            } catch {
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

            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200 text-black">
                        <th className="border p-3">Title</th>
                        <th className="border p-3">Image</th>
                        <th className="border p-3">Price</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td className="border p-3">
                                {product.title}
                            </td>

                            <td className="border p-3 text-center">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="mx-auto h-24 w-24 object-contain"
                                />
                            </td>

                            <td className="border p-3 text-center">
                                ${product.price.toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {filteredProducts.length === 0 && (
                <p className="mt-4">No products found.</p>
            )}
        </main>
    );
}
