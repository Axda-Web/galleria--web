export default async function PaintingPage({
  params,
}: {
  params: Promise<{ paintingSlug: string }>;
}) {
  const { paintingSlug } = await params;

  return <div>{paintingSlug}</div>;
}
