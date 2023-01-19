import styles from 'styles/sub3.module.css'
export default function Sample () {
  return (
    <>
  ┆ <div className={styles.box}>
    <h1>Prep Mart</h1>
    <ul class='col_3'>
      <li>
        <h2 classname='meat'>Meat</h2>
        <ul class='menu'>
          <li>Beef</li>
          <li>Chicken</li>
          <li>Other</li>
        </ul>
      </li>
      <li>
        <h2 class='fish'>Fish</h2>
        <ul class='menu'>
          <li>Tuna</li>
          <li>Shrimp</li>
          <li>Other</li>
        </ul>
      </li>
      <li>
        <h2 class='vegetable'>Vegetable</h2>
        <ul class='menu'>
          <li>Tomato</li>
          <li>Lettuce</li>
          <li>Other</li>
        </ul>
      </li>
    </ul>
 </div>
    </>
  )
}

