// // pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      
      <nav>
        <ul>
          <li>
            <Link href="/page1">Go to Page 1</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
