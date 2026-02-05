import { Meta } from "@once-ui-system/core";
import { home, baseURL } from "@/resources";
import HomeContent from "@/components/HomeContent";
import { Projects } from "@/components/work/Projects"; 
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <HomeContent>
      {/* Kita masukkan Projects sebagai 'anak' dari HomeContent */}
      {/* Ini aman karena Projects dijalankan di Server, lalu hasilnya dikirim ke HomeContent */}
      <Projects />
      <SpeedInsights />
      <Analytics />
    </HomeContent>
  );
}