import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">{slug}</h1>
      <p>Product details coming soon.</p>
    </div>
  );
}
