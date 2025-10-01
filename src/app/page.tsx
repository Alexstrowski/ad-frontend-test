import { envVars } from "@/config/envs";
import { GamesSection } from "@/features/catalog/components/GamesSection";
import { API_ROUTES } from "@/services/routes";
import { GamesListResponse } from "@/types/api";

interface PageHomeProps {
  searchParams: {
    page?: string;
    genre?: string;
  };
}

export default async function Home({ searchParams }: PageHomeProps) {
  const page = searchParams.page || 1;
  const genre = searchParams.genre || "";

  const params = new URLSearchParams({
    page: page.toString(),
    ...(genre && { genre }),
  });
  const response = await fetch(
    `${envVars.API_URL}${API_ROUTES.GET_GAMES}?${params}`,
    {
      next: { revalidate: 60 },
    }
  );
  const initialData: GamesListResponse = await response.json();
  return (
    <main className="flex min-h-screen flex-col text-base">
      <GamesSection initialData={initialData} />
    </main>
  );
}
