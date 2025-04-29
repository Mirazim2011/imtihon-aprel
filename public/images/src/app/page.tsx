import Hero from "@/components/Hero";
import Item from "@/components/Item";
import { ProductType } from "@/interface";
import Login from "@/components/Login";
import Statistic from "@/components/Statistic";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: ProductType[] = await res.json();
  return (
    <>
      <Hero />
      <section>
        <div className="container-md px-22 mx-auto">
          <h2 className="text-5xl font-bold my-6 mb-4 text-center">
            SHOP DEALS
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 mx-auto">
            {data.map((product: ProductType) => (
              <Item key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </section>
      <Login />
      <Statistic />
    </>
  );
}
