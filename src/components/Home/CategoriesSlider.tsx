import CategoriesSliderClient from "./CategoriesSliderClient";

export default async function CategoriesSlider() {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories?limit=20",
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const json = await res.json();
    const categories = json?.data ?? [];

    return <CategoriesSliderClient categories={categories} />;
  } catch (error) {
    console.error("Categories API error:", error);
    return null;
  }
}