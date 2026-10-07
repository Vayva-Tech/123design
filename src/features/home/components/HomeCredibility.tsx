import { Container } from '@/components/layout';
import { CLIENT_LOGOS } from '../content';

const CREDIBILITY_PHASES = ['CON', 'EVT', 'DVT', 'PVT', 'PRODUCTION'] as const;

const CREDIBILITY_CAPABILITIES = [
  'INDUSTRIAL DESIGN',
  'ENGINEERING',
  'PROTOTYPING',
  'MANUFACTURING',
] as const;

export function HomeCredibility() {
  return (
    <div className="home-credibility" aria-label="Capabilities overview">
      <Container variant="content">
        <div className="home-credibility__inner">
          <p className="home-credibility__tagline">FROM IDEA TO PRODUCTION</p>
          <div className="home-credibility__phases" aria-label="Development phases">
            {CREDIBILITY_PHASES.map((phase, i) => (
              <span key={phase} className="home-credibility__phase">
                <span className="home-credibility__phase-label">{phase}</span>
                {i < CREDIBILITY_PHASES.length - 1 && (
                  <span className="home-credibility__phase-sep" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
          <div className="home-credibility__capabilities">
            {CREDIBILITY_CAPABILITIES.map((cap, i) => (
              <span key={cap} className="home-credibility__capability">
                {cap}
                {i < CREDIBILITY_CAPABILITIES.length - 1 && (
                  <span className="home-credibility__cap-sep" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </Container>
      <div className="home-credibility__logos" aria-label="Trusted by leading brands">
        <div className="home-credibility__logos-track">
          {CLIENT_LOGOS.map((logo) => (
            <span key={logo} className="home-credibility__logo">
              {logo}
            </span>
          ))}
          {CLIENT_LOGOS.map((logo) => (
            <span key={`${logo}-duplicate`} className="home-credibility__logo" aria-hidden="true">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
