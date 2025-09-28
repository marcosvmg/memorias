// src/app/page.tsx

import Image from 'next/image';
import { imagesData } from '@/data/images'; // Nossa única fonte de verdade

export default function GalleryPage() {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString + 'T00:00:00');
        return date.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    // Ordena as imagens diretamente aqui
    const sortedImages = [...imagesData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <header className="text-center mb-8 md:mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-indigo-300">
                        memórias.
                    </h1>
                    <p className="text-lg text-zinc-700 mt-2">
                        registros di nois
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {sortedImages.map((image) => (
                        <div key={image.id} className="group flex flex-col overflow-hidden rounded-lg bg-zinc-900 shadow-md">
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill={true}
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-indigo-100 mb-2">
                                    {image.title}
                                </h3>
                                <div className="mt-auto flex justify-between items-center text-xs">
                                    <p className="text-zinc-500">{formatDate(image.date)}</p>
                                    <span className="bg-indigo-500/20 text-indigo-300 font-medium px-2 py-1 rounded-full">
                                        {image.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="text-center mt-12 py-4">
                    <p className="text-zinc-600">L&M</p>
                </footer>
            </div>
        </main>
    );
}