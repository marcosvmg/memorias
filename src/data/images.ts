    // src/data/images.ts

    export interface ImageData {
        id: number;
        src: string;
        alt: string;
        title: string;
        date: string; // Formato YYY-MM-DD
        category: string; // Novo campo para a categoria
        spotifyUrl?: string;
    }

    export const imagesData: ImageData[] = [
        {
            id: 1,
            src: '/gallery/foto-01.png',
            alt: '',
            title: '1º Encontro',
            date: '2025-09-06',
            category: 'Cabine',
            spotifyUrl: 'https://open.spotify.com/track/4UEgLd5C8zN1OeVwOS21hJ?si=7df424dbfc544097'
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
            title: 'kkk um makakinho',
            date: '2025-10-07',
            category: 'Selfie',
            spotifyUrl: 'https://open.spotify.com/track/5D8SzvASRr7V7ZrrXsh6SY?si=ef0bb0d8f65846ab'
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
            title: 'side-eye pós 6 vin',
            date: '2025-10-11',
            category: 'Selfie',
        },
        {
            id: 14,
            src: '/gallery/foto-14.png',
            alt: '',
            title: '1º fotinha no meu espelho',
            date: '2025-10-15',
            category: 'Selfie',
        },
        {
            id: 15,
            src: '/gallery/foto-15.png',
            alt: '',
            title: 'kkkk caxorro salsicha',
            date: '2025-10-18',
            category: 'Selfie',
        },
        {
            id: 16,
            src: '/gallery/foto-16.png',
            alt: '',
            title: 'kkkk caxorro salsicha 2',
            date: '2025-10-18',
            category: 'Selfie',
        },
        {
            id: 17,
            src: '/gallery/foto-17.png',
            alt: '',
            title: 'momentos antes de pega a maior xuva',
            date: '2025-10-18',
            category: 'Selfie',
        },

    ];