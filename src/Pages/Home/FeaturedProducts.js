import { useQuery } from "react-query";
import Product from "./Product";
import Loading from "../Shared/Loading";


const FeaturedProducts = () => {
    const { data: products, isLoading } = useQuery("products", () =>
        fetch("https://aqueous-sierra-90066.herokuapp.com/product").then((res) =>
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
                        TRENDING PRODUCTS
                    </h2>
                    <p className=" max-w-md mx-auto mt-5 mb-16">
                        Rely on the Max Smart Manufacturing Platform to connect, automate, track,
                        and analyze your operations.

                    </p>
                </div>
                <div className="mt-10">
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {
                            products.slice(0, 4).map((product) => (
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
