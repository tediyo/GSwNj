import Link from 'next/link';

const page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <p>Welcome to Page 1!</p>
      <Link href="/page2">
        <a>Go to Page 2</a>
      </Link>
    </div>
  );
};

export default page1;
