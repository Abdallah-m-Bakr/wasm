import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-amber-50/50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 transition-colors duration-500" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 start-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-amber-400/20 dark:from-amber-700/20 dark:to-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 end-10 w-96 h-96 bg-gradient-to-tr from-amber-300/20 to-orange-300/20 dark:from-amber-800/15 dark:to-orange-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-100/40 to-transparent dark:from-amber-900/10 rounded-full" />
      </div>

      {/* Wood Grain Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0id29vZCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDIwME0wIDMwaDIwME0wIDUwaDIwME0wIDcwaDIwME0wIDkwaDIwME0wIDExMGgyMDBNMCAxMzBoMjAwTTAgMTUwaDIwME0wIDE3MGgyMDBNMCAxOTBoMjAwIiBzdHJva2U9IiM4QjQ1MTMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCN3b29kKSIvPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-600" />
          <div className="w-2 h-2 bg-amber-600 rotate-45" />
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-600" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
            {t('hero.title')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, '#gallery')}
            className="w-full sm:w-auto group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-2xl shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {t('hero.cta')}
            <svg className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="w-full sm:w-auto px-8 py-4 border-2 border-amber-600 dark:border-amber-500 text-amber-700 dark:text-amber-400 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-500 dark:hover:text-neutral-900 font-semibold rounded-2xl transition-all duration-300 text-center"
          >
            {t('hero.secondary')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator - outside content div */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600/50 dark:border-amber-500/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-amber-600 dark:bg-amber-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
