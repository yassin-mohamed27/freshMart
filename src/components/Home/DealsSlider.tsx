import DealsSliderClient from "./DealsSliderClient";

export default async function DealsSlider() {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products?limit=40",
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const json = await res.json();
    const products = json?.data ?? [];

    const deals = products
      .filter((p: any) => p.priceAfterDiscount)
      .slice(0, 12);

    return <DealsSliderClient products={deals} />;
  } catch (error) {
    console.error("Deals API error:", error);
    return null;
  }
}