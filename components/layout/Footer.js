import styles from './Layout.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <a href='https://behnamnabati.com/' target='_blank' rel='noreferrer'>
        A Food Project With Next.js &copy;
      </a>
    </div>
  )
}

export default Footer