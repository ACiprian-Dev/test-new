import { useRouter } from 'next/router';

export default function FilterPage() {
  const router = useRouter();
  const { season, size, brand } = router.query;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Filter Results</h1>
      <p>Season: {season}</p>
      <p>Size: {size}</p>
      <p>Brand: {brand}</p>
    </div>
  );
}
