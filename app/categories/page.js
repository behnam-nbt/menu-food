import CategoriesPage from '@/components/templates/CategoriesPage'
import React from 'react'

async function categories({ searchParams }) {

    const { difficulty, time } = await searchParams;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data`);
    const data = await res.json();

    const filteredData = data.filter((item) => {
        const difficultyItems = item.details.filter((detail) =>
            detail.Difficulty && detail.Difficulty === difficulty
        );

        const timeResult = item.details.filter((detail) => {
            const cookingTime = detail["Cooking Time"] || ""
            const [timeDetail] = cookingTime.split(" ")
            if (time === "less" && timeDetail && +timeDetail <= 30) {
                return detail
            } else if (time === "more" && +timeDetail >= 30) {
                return detail;
            }
        })
        if (time && difficulty && timeResult.length && difficultyItems.length) {
            return item;
        } else if (!time && difficulty && difficultyItems.length) {
            return item;
        } else if (time && !difficulty && timeResult.length) {
            return item;
        }
    })
    return (
        <div><CategoriesPage data={filteredData} /></div>
    )
}

export default categories