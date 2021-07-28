import { getConfig } from "@bigcommerce/storefront-data-hooks/api";

import getAllProducts from "@bigcommerce/storefront-data-hooks/api/operations/get-all-products";

export async function getStaticProps() {
  // Fetch data from external API
  const config = getConfig({ locale: "en-US" });
  const { products } = await getAllProducts({
    config,
    preview: true,
  });

  return { props: { products } };
}

export default function Home({ products }: { products: any }) {
  console.log(products);
  return <div>home</div>;
}
