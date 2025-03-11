import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function reviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  const random = getRandomInt(2);
  
  if (random === 1) {
    throw new Error( `Random error generated for number ${random}`);
  }

  return (
    <>
      <div>
        product id is: {params.productId} review id is: {params.reviewId} on
        detail page
      </div>
      <div>Random number: {random}</div>
    </>
  );
}
