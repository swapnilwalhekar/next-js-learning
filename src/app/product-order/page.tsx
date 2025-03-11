'use client';

import { useRouter } from "next/navigation";

export default function ProductOrder() {
    const router = useRouter();
    const handleClick = () => {
        console.log('Order placed');
        router.push('/');
    }

    return(
        <>
        <h4>Product order</h4>
        <button onClick={handleClick}>Order</button>
        </>
    )
}