import Image from 'next/image'
import Link from 'next/link'
import styles from './Banner.module.css'

function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>OnlineFood</h2>
                <p>Food Delivery and Takeout!</p>
                <span>
                    OnlineFood is ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.
                </span>
                <Link href="/menu">See All</Link>
            </div>
            <div className={styles.right}>
                <Image src="/images/banner.png" width={350} height={300} alt='food' />
            </div>
        </div>
    )
}

export default Banner