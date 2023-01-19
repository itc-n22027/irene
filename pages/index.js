import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <ul>
        <li>
          <h1> CodePrep </h1>
          <Link href='/sub1' legacyBehavior>
            <a> １ページ </a>
          </Link>
        </li>
        <li>
          <Link href='/sub2' legacyBehavior>
            <a> ２ページ </a>
          </Link>
        </li>
        <li>
          <Link href='/sub3' legacyBehavior>
            <a> ３ページ </a>
          </Link>
        </li>
        <li>
          <Link href='/sub4' legacyBehavior>
            <a> ４ページ </a>
          </Link>
        </li>
        <li>
          <Link href='/sub5' legacyBehavior>
            <a> ５ページ </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
