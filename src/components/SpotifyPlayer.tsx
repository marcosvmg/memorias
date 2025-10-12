// src/components/SpotifyPlayer.tsx

import React from 'react';

interface SpotifyPlayerProps {
    spotifyUrl: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ spotifyUrl }) => {
    if (!spotifyUrl) {
        return null;
    }

    // Extrai o ID da track ou do episódio da URL
    const urlParts = new URL(spotifyUrl).pathname.split('/');
    const trackId = urlParts[urlParts.length - 1];

    const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=1`;

    return (
        <iframe
            key={embedUrl} // Força a recriação do iframe quando a URL muda
            style={{ borderRadius: '12px' }}
            src={embedUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
    );
};

export default SpotifyPlayer;