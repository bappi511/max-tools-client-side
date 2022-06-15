import { useQuery } from "react-query";
import Product from "./Product";
import Loading from "../Shared/Loading";


const FeaturedProducts = () => {
    const { data: products, isLoading } = useQuery("products", () =>
        fetch("http://localhost:5000/product").then((res) =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="pt-24  px-3">
            <div className="container mx-auto" style={{ maxWidth: "1100px" }}>
                <div className="mb-5">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-center ">
                        New Collection
                    </h2>
                    <p className=" max-w-md mx-auto mt-5 mb-16">
                        You contribute over half of your life operating. Let us help
                        you find the right fit for you or your corporation.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            products.map((product) => (
                                <Product key={product._id}
                                    product={product}></Product>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
