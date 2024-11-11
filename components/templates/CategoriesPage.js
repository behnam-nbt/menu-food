'use client'
import { useEffect, useState } from 'react'
import styles from './CategoriesPage.module.css'
import { useRouter, useSearchParams } from 'next/navigation'; 
import Card from '../modules/Card';
import Image from 'next/image';

function CategoriesPage({ data }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState({
    difficulty: searchParams.get('difficulty') || "",
    time: searchParams.get('time') || ""
  });

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const queryString = new URLSearchParams(query).toString();

  const searchHandler = () => {
    router.push(`/categories?${queryString}`);
  };

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select value={query.difficulty} name='difficulty' onChange={changeHandler}>
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} name='time' onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.cards}>
          {!data.length && <Image src="/images/search.png" width={350} height={350} alt='search' />}
          {data.map((food) => (<Card key={food.id} data={food} />))}
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage;
