import { Link } from 'react-router-dom';

export default function HeroSection({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  secondaryCtaText, 
  secondaryCtaLink,
  backgroundImage = '/images/hero-bg.jpg'
}) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(0.4)' }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {ctaText && (
              <Link to={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && (
              <Link to={secondaryCtaLink} className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}