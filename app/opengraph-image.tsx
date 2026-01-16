import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Kathryn Harper';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Fetch the profile photo and convert to base64
  const photoData = await fetch(
    new URL('../public/photo.jpg', import.meta.url)
  ).then((res) => res.arrayBuffer());
  const photoBase64 = Buffer.from(photoData).toString('base64');
  const photoSrc = `data:image/jpeg;base64,${photoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          fontFamily: 'system-ui, sans-serif',
          padding: 80,
          gap: 60,
        }}
      >
        {/* Profile Photo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 280,
            height: 280,
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <img
            src={photoSrc}
            alt="Kathryn Harper"
            style={{
              width: 320,
              height: 320,
              objectFit: 'cover',
              objectPosition: '40% 25%',
            }}
          />
        </div>

        {/* Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#000000',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Kathryn Harper
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#666666',
              marginBottom: 12,
              lineHeight: 1.4,
            }}
          >
            ML/AI, systems, and decision-making.
          </p>
          <p
            style={{
              fontSize: 28,
              color: '#666666',
              lineHeight: 1.4,
            }}
          >
            Off-hours: card games and Rubik's cubes.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
