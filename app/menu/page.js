import MenuPage from '@/components/templates/MenuPage'
import React from 'react'

async function page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data`, { revalidate: 10 });    
    const data = await res.json();
    return (
        <div><MenuPage data={data} /></div>
    )
}

export default page