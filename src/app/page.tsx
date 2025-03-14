import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Kenali lebih jauh tentang latar belakang dan perjalanan saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Kenali lebih jauh tentang latar belakang dan perjalanan saya.',
  },
};

export default function Home() {
  return (
    <div className="mt-16 px-8 max-w-3xl mx-auto">
      <header className="text-center">
        <Image
          src="/images/profile.png" 
          alt="Foto Profil"
          width={150} 
          height={150} 
          priority
          className="rounded-full mx-auto shadow-lg"
        />
        <h1 className="font-extrabold text-4xl text-zinc-800 mt-4">Tentang Saya</h1>
        <p className="text-zinc-600 mt-2">
          Halo! Saya seorang profesional yang memiliki ketertarikan dalam teknologi dan inovasi.
          Berikut adalah latar belakang serta perjalanan saya hingga saat ini.
        </p>
      </header>

      <section className="mt-8 p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-zinc-700">Latar Belakang Saya</h2>
        <p className="text-zinc-600 mt-2">
          Saya memiliki latar belakang di bidang teknologi informasi dan pengembangan perangkat lunak.
          Saya menyelesaikan pendidikan saya di bidang <strong>Teknik Informatika</strong> dan telah bekerja 
          di berbagai proyek yang berfokus pada pengembangan web, aplikasi berbasis cloud, dan kecerdasan buatan.
        </p>
      </section>

      <section className="mt-6 p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-zinc-700">Keahlian & Minat</h2>
        <ul className="list-disc list-inside text-zinc-600 mt-2">
          <li>Pengembangan Web (Frontend & Backend)</li>
          <li>Desain UI/UX yang menarik dan fungsional</li>
          <li>Pengolahan data</li>
          <li>Internet of Things</li>
        </ul>
      </section>

      <section className="mt-6 p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-zinc-700">Misi</h2>
        <p className="text-zinc-600 mt-2">
          Saya percaya bahwa teknologi harus menjadi solusi bagi berbagai permasalahan yang ada di dunia.
          Oleh karena itu, saya selalu berusaha mengembangkan solusi inovatif yang tidak hanya efisien,
          tetapi juga bermanfaat bagi banyak orang.
        </p>
      </section>
    </div>
  );
}