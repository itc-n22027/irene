import styles from 'styles/sub3.module.css'

export default function Sample () {
  return (
    <>
      <div className={styles.box}>
        <h1>Cafe Prep</h1>
        <nav class='box-body'>
          <h2>Drink</h2>
          <ul>
            <li>Coffee</li>
            <li>Latte</li>
            <li>Espresso</li>
          </ul>
        </nav>
      </div>
    </>
  )
}
