import { ImageResponse } from 'next/og';

export const alt = 'Work — Product Development Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#11110F',
          color: '#F5F4F0',
          fontFamily: 'Inter, system-ui, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '20px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#A3A099',
            textTransform: 'uppercase',
          }}
        >
          Portfolio
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Our Work
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '28px',
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#A3A099',
              maxWidth: '800px',
            }}
          >
            200+ products shipped across consumer, medical, defense,
            electronics and industrial sectors.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '18px',
            color: '#6B6962',
          }}
        >
          <span>Consumer</span>
          <span>Medical</span>
          <span>Defense</span>
          <span>Electronics</span>
          <span>123.design</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
