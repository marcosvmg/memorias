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
        {
            id: 8,
            src: '/gallery/foto-08.png',
            alt: '',
            title: 'testo erado kk',
            date: '2025-10-02',
            category: 'Selfie',
        },
        {
            id: 9,
            src: '/gallery/foto-09.png',
            alt: '',
            title: 'nao fume',
            date: '2025-10-03',
            category: 'Selfie',
        },
        {
            id: 10,
            src: '/gallery/foto-10.png',
            alt: '',
            title: 'jogadô zezinho',
            date: '2025-10-03',
            category: 'Selfie',
        },
        {
            id: 11,
            src: '/gallery/foto-11.png',
            alt: '',
            title: 'kkk parece um makakinho',
            date: '2025-10-07',
            category: 'Selfie',
        },
        {
            id: 12,
            src: '/gallery/foto-12.png',
            alt: '',
            title: 'coracao sorvete sz <3',
            date: '2025-10-10',
            category: 'Selfie',
        },
        {
            id: 13,
            src: '/gallery/foto-13.png',
            alt: '',
            title: 'side-eye pós 2 vinho e 4 cantinho',
            date: '2025-10-11',
            category: 'Selfie',
        },

    ];