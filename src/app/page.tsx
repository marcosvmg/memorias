// src/app/page.tsx
"use client";

import Image from 'next/image';
import { imagesData, ImageData } from '@/data/images';
import { Camera, Music, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotifyPlayer from '@/components/SpotifyPlayer';

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString + 'T00:00:00');
        return new Intl.DateTimeFormat('pt-BR', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
        }).format(date);
    };

    const sortedImages = [...imagesData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen w-full">
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-center p-4"
                    >
                        {/* --- INÍCIO DA CORREÇÃO DE OPACIDADE --- */}
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            // A opacidade do fundo foi reduzida de /75 para /50 e a borda foi refinada.
                            className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-white/50  overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-3 right-3 z-10 p-1 rounded-full bg-black/10 text-slate-800 hover:bg-black/20 transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <div className="relative aspect-square">
                                <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{selectedImage.title}</h3>
                                <p className="text-sm text-slate-600 mb-4">{formatDate(selectedImage.date)}</p>
                                {selectedImage.spotifyUrl && <SpotifyPlayer spotifyUrl={selectedImage.spotifyUrl} />}
                            </div>
                        </motion.div>
                        {/* --- FIM DA CORREÇÃO DE OPACIDADE --- */}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-4 py-12 md:py-20">
                <header className="relative mb-12 md:mb-16 flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-black/5 bg-white/60 backdrop-blur-lg ">
                    <div className="relative flex flex-col items-center gap-4">
                        <Image src="/logomemorias.svg" alt="Logo Memórias" width={64} height={64} className="h-16 w-16" />
                        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                            memórias
                        </h1>
                    </div>
                    <p className="mt-2 text-lg text-slate-600">
                        Nossos registros. Nosso lugar.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {sortedImages.map((image) => (
                        <motion.div
                            key={image.id}
                            onClick={() => setSelectedImage(image)}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/50 shadow-lg cursor-pointer"
                            whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    priority={image.id <= 4}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                                <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-white/30 shadow-lg flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                                    <div className="w-full">
                                        <h3 className="text-base font-semibold text-slate-900 mb-1 leading-tight">{image.title}</h3>
                                        <p className="text-xs text-slate-700">{formatDate(image.date)}</p>
                                    </div>
                                    <div className="w-full md:w-auto md:flex-shrink-0 flex justify-end items-center gap-2">
                                        {image.spotifyUrl && <Music size={16} className="text-indigo-400" />}
                                        <span className="flex items-center gap-2 bg-indigo-100 text-indigo-400 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200">
                         <Camera size={14} />
                                            {image.category}
                      </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <footer className="mt-16 py-4 text-center">
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-slate-500">feito com</p>
                        <Image src="/favorite.svg" alt="Amor" width={20} height={20} />
                    </div>
                </footer>

            </div>
        </main>
    );
}