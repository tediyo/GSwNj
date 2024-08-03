import Link from 'next/link';

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <p>Welcome to Page 2!</p>
      <Link href="/page1">
        <a>Go to Page 1</a>
      </Link>
    </div>
  );
};

export default Page2;
