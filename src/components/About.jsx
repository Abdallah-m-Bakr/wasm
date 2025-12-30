import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { value: '250+', label: t('about.stats.projects') },
    { value: '180+', label: t('about.stats.clients') },
    { value: '15+', label: t('about.stats.awards') },
    { value: '14+', label: t('about.stats.years') },
  ];

  return (
    <section id="about" className="w-full py-24 pb-32 bg-white dark:bg-neutral-900 transition-colors duration-500 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 end-0 w-1/3 h-full bg-gradient-to-l from-amber-50/50 to-transparent dark:from-amber-950/20 dark:to-transparent" />
      
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium mb-4">
            {t('about.sectionTitle')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-800 dark:text-white mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative pb-8 lg:pb-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/10 dark:shadow-black/30">
              {/* Placeholder for interior design image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 dark:from-amber-900/40 dark:via-neutral-800 dark:to-orange-900/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto text-amber-600/30 dark:text-amber-500/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-amber-700/50 dark:text-amber-400/50 text-lg">Interior Design Showcase</p>
                </div>
              </div>
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-amber-400/30 dark:border-amber-500/20 rounded-2xl pointer-events-none" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 end-4 lg:bottom-4 lg:-end-4 xl:end-0 bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl shadow-xl shadow-amber-900/10 dark:shadow-black/30 max-w-[180px] sm:max-w-[200px] z-10">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent mb-2">
                14+
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t('about.stats.years')}
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('about.philosophy')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-start">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
