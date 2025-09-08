// src/data/images.ts

export interface ImageData {
    id: number;
    src: string;
    alt: string;
    title: string;
    date: string; // Formato YYY-MM-DD
    category: string; // Novo campo para a categoria
}

export const imagesData: ImageData[] = [
    {
        id: 1,
        src: '/gallery/foto-01.png',
        alt: '',
        title: '1º Encontro',
        date: '2025-09-06',
        category: 'Cabine',
    },
    {
        id: 2,
        src: '/gallery/foto-02.png',
        alt: '',
        title: '1º Encontro',
        date: '2025-09-06',
        category: 'Cabine',
    },
    {
        id: 3,
        src: '/gallery/foto-03.png',
        alt: '',
        title: '1º Encontro',
        date: '2025-09-06',
        category: 'Selfie',
    },
    // Para adicionar uma nova foto, preencha todos os campos
    // {
    //   id: 4,
    //   src: '/gallery/foto-04.jpg',
    //   alt: 'Descrição da quarta foto',
    //   title: 'Nossa Viagem',
    //   date: '2025-01-10',
    //   category: 'Viagem',
    // },
];