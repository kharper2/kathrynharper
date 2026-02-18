import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Kathryn Harper';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#000000',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}
        >
          Kathryn Harper
        </h1>
        <p
          style={{
            fontSize: 32,
            color: '#666666',
            marginBottom: 12,
          }}
        >
          CS at Harvard
        </p>
        <p
          style={{
            fontSize: 28,
            color: '#999999',
          }}
        >
          AI/ML, systems, and decision-making
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
