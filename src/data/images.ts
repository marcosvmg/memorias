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
        {
            id: 4,
            src: '/gallery/foto-04.png',
            alt: '',
            title: 'saga mongagá',
            date: '2025-09-15',
            category: 'Selfie',
        },
        {
            id: 5,
            src: '/gallery/foto-05.png',
            alt: '',
            title: 'viaje de xirriro 😱',
            date: '2025-09-20',
            category: 'Selfie',
        },
        {
            id: 6,
            src: '/gallery/foto-06.png',
            alt: '',
            title: 'bem romamtiko',
            date: '2025-09-27',
            category: 'Selfie',
        },
        {
            id: 7,
            src: '/gallery/foto-07.png',
            alt: '',
            title: '#caxaça',
            date: '2025-09-27',
            category: 'Selfie',
        },

    ];