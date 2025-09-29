import { GamesSection } from "@/features/catalog/components/GamesSection";
import { GamesListResponse } from "@/types/api";

export default async function Home({ searchParams }: any) {
  const page = searchParams.page || 1;
  const genre = searchParams.genre || "";

  const params = new URLSearchParams({
    page: page.toString(),
    ...(genre && { genre }),
  });
  const response = await fetch(`http://localhost:3000/api/games?${params}`, {
    next: { revalidate: 60 },
  });
  const initialData: GamesListResponse = await response.json();
  return (
    <main className="flex min-h-screen flex-col justify-between text-base">
      <GamesSection initialData={initialData} />
    </main>
  );
}
