import Link from "next/link";

export default function productDetails({
  params,
}: {
  params: { productId: string };
}) {
  return( <>
  <Link href="/products">Back to product list</Link>
   <h4>Product details page {params.productId}</h4>
  </>
  )
}
