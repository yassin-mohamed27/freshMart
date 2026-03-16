import FeaturedProductsSliderClient from "./FeaturedProductsSliderClient";

export default async function FeaturedProductsSlider() {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products?limit=12",
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch featured products");
    }

    const json = await res.json();
    const products = json?.data ?? [];

    return <FeaturedProductsSliderClient products={products} />;
  } catch (error) {
    console.error("FeaturedProducts API error:", error);
    return null; // الصفحة لا تنهار، ولن يظهر 500
  }
}