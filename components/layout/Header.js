import Link from "next/link"
import styles from "./Layout.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link href="/">FoodWeb</Link>
      </div>
      <div className={styles.right}>
        <ul>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/categories">Categories</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header