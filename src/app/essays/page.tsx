// export default function Essays() {
//     return <div>Esai</div>;
// }

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esai Teknologi',
  description: 'Kumpulan esai tentang berbagai aspek teknologi modern.',
  openGraph: {
    title: 'Esai Teknologi',
    description: 'Kumpulan esai tentang berbagai aspek teknologi modern.',
  },
};

export default function Essays() {
  return (
    <div className="mt-16 px-8 max-w-5xl mx-auto">
      <header className="text-center">
        <h1 className="font-extrabold text-4xl text-zinc-800">Esai Teknologi</h1>
        <p className="text-zinc-600 mt-2">
          Kumpulan esai yang membahas berbagai aspek perkembangan teknologi modern.
        </p>
      </header>

      {/* Grid Layout */}
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Esai 1 */}
        <article className="p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-zinc-700">Internet of Things (IoT)</h2>
          <p className="text-zinc-600 mt-2">
            Bagaimana perangkat terhubung melalui internet dapat mengubah cara hidup kita?
          </p>
          <a href="#" className="text-blue-600 mt-3 inline-block">Baca selengkapnya →</a>
        </article>

        {/* Esai 2 */}
        <article className="p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-zinc-700">Kecerdasan Buatan (AI)</h2>
          <p className="text-zinc-600 mt-2">
            AI semakin berkembang dan berperan dalam banyak aspek kehidupan manusia.
          </p>
          <a href="#" className="text-blue-600 mt-3 inline-block">Baca selengkapnya →</a>
        </article>

        {/* Esai 3 */}
        <article className="p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-zinc-700">Blockchain dan Keamanan Data</h2>
          <p className="text-zinc-600 mt-2">
            Teknologi blockchain berperan dalam meningkatkan transparansi dan keamanan digital.
          </p>
          <a href="#" className="text-blue-600 mt-3 inline-block">Baca selengkapnya →</a>
        </article>

        {/* Esai 4 */}
        <article className="p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-zinc-700">Metaverse</h2>
          <p className="text-zinc-600 mt-2">
            Dunia digital interaktif yang mengubah cara kita berinteraksi secara virtual.
          </p>
          <a href="#" className="text-blue-600 mt-3 inline-block">Baca selengkapnya →</a>
        </article>

        {/* Esai 5 */}
        <article className="p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-zinc-700">Revolusi 5G</h2>
          <p className="text-zinc-600 mt-2">
            Jaringan 5G membawa internet kecepatan tinggi dan konektivitas yang lebih stabil.
          </p>
          <a href="#" className="text-blue-600 mt-3 inline-block">Baca selengkapnya →</a>
        </article>

        {/* Esai 6 */}
        <article className="p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-zinc-700">Keamanan Siber</h2>
          <p className="text-zinc-600 mt-2">
            Ancaman siber semakin berkembang, bagaimana cara melindungi data kita?
          </p>
          <a href="#" className="text-blue-600 mt-3 inline-block">Baca selengkapnya →</a>
        </article>
      </section>
    </div>
  );
}
