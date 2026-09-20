import { useParams } from "react-router-dom";
import { ProductDetailPage } from "@/components/ProductDetailPage";
import { products } from "@/data/products";
import NotFoundPage from "@/pages/NotFoundPage";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <NotFoundPage />;

  return <ProductDetailPage product={product} />;
}
