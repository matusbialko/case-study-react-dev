import ProductCard from '@/app/_components/product-card'

export type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
}

export default async function Products() {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
        const errText = await response.text()
        console.error(errText)
    }
    const productList: Product[] = await response.json()

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {productList.map((product: Product) => (
                <ProductCard
                    id={product?.id}
                    title={product?.title}
                    image={product?.image}
                    price={product?.price}
                    rating={product?.rating}
                    key={product?.id}
                />
            ))}
        </div>
    )
}