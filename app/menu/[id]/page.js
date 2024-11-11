// app/menu/[id]/page.js
import DetailsPage from '@/components/templates/DetailsPage';
import { notFound } from 'next/navigation';
import React from 'react';

// This function generates the paths for static generation
export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data.map((food) => ({
        id: food.id.toString(),
    }));
}

// Set ISR revalidation interval
// export const revalidate = 10;

async function FoodDetails({ params }) {
    const { id } = await params;  // No need for `await` here
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/${id}`, { next: { revalidate: 10 } });
    
    // Handle 404 if data for this `id` is not found
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    return (
        <div>
            <DetailsPage data={data} />
        </div>
    );
}

export default FoodDetails;
