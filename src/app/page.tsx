// export default function Home() {
//   return <div>Tentang Saya</div>;
// }

// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Tentang Saya',
//   description: 'Halaman tentang saya.',
//   openGraph: {
//     title: 'Tentang Saya',
//     description: 'Halaman tentang saya.',
//   },
// };

// export default function Home() {
//   return (
//     <div className='mt-16 px-8'>
//       <header>
//         <h1 className='font-bold text-4x1 text-zinc-800'>Tentang Saya</h1>
//       </header>
//     </div>
//   );
// }

import type { Metadata } from 'next';

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
        <h1 className="font-extrabold text-4xl text-zinc-800">Tentang Saya</h1>
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



// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
// //       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
// //         <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={180}
// //           height={38}
// //           priority
// //         />
// //         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
// //           <li className="mb-2 tracking-[-.01em]">
// //             Get started by editing{" "}
// //             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
// //               src/app/page.tsx
// //             </code>
// //             .
// //           </li>
// //           <li className="tracking-[-.01em]">
// //             Save and see your changes instantly.
// //           </li>
// //         </ol>

// //         <div className="flex gap-4 items-center flex-col sm:flex-row">
// //           <a
// //             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={20}
// //               height={20}
// //             />
// //             Deploy now
// //           </a>
// //           <a
// //             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Read our docs
// //           </a>
// //         </div>
// //       </main>
// //       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/file.svg"
// //             alt="File icon"
// //             width={16}
// //             height={16}
// //           />
// //           Learn
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/window.svg"
// //             alt="Window icon"
// //             width={16}
// //             height={16}
// //           />
// //           Examples
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/globe.svg"
// //             alt="Globe icon"
// //             width={16}
// //             height={16}
// //           />
// //           Go to nextjs.org →
// //         </a>
// //       </footer>
// //     </div>
// //   );
// // }
