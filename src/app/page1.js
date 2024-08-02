// app/page1/page.jsx
import Link from 'next/link';

const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <p>Welcome to Page 1!</p>
      <Link href="/page2">Go to Page 2</Link>
    </div>
  );
};

export default Page1;
