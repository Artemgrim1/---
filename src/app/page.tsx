import { prisma } from "@/src/lib/prisma";

function formatPrice(pennies: number) {
  return (pennies / 100).toLocaleString("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });
}

export default async function Home() {
  let listings: any[] = [];
  let dbOk = true;

  try {
    listings = await prisma.listing.findMany({ orderBy: { createdAt: "desc" }, take: 24 });
  } catch (e) {
    dbOk = false;
    listings = [
      { id: "demo-1", title: "iPhone 13, 128 ГБ", city: "Краснодар", category: "Электроника", price: 459900, images: ["/placeholder.png"] },
      { id: "demo-2", title: "Аренда студии 25 м²", city: "Краснодар", category: "Недвижимость", price: 2500000, images: ["/placeholder.png"] },
    ];
  }

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold">Arbat — объявления рядом</h1>
      <p className="text-sm opacity-70 mt-1">{dbOk ? "Данные из базы" : "Демо-данные (БД не настроена)"}</p>

      <div className="grid gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listings.map((l) => {
          let firstImg: string | undefined;
          if (Array.isArray(l.images)) firstImg = l.images[0];
          else {
            try { firstImg = JSON.parse(l.images || "[]")[0]; } catch {}
          }
          return (
            <article key={l.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={firstImg || "/placeholder.png"} alt={l.title} className="h-full w-full object-cover" />
              </div>
              <h2 className="mt-3 line-clamp-2 font-semibold">{l.title}</h2>
              <p className="text-xs opacity-70">{l.city} • {l.category}</p>
              <p className="mt-1 font-bold">{formatPrice(l.price)}</p>
            </article>
          );
        })}
      </div>
    </main>
  );
}
