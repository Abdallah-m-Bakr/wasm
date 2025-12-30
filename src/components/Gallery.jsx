import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      key: 'luxury_villa',
      image: '/images/projects/luxury_villa.jpg',
    },
    {
      key: 'modern_apartment',
      image: '/images/projects/modern_apartment.jpg',
    },
    {
      key: 'royal_palace',
      image: '/images/projects/royal_palace.jpg',
    },
    {
      key: 'penthouse',
      image: '/images/projects/penthouse.jpg',
    },
    {
      key: 'beach_house',
      image: '/images/projects/beach_house.jpg',
    },
    {
      key: 'office',
      image: '/images/projects/office.jpg',
    },
  ];

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="gallery" className="w-full py-24 pb-32 bg-white dark:bg-neutral-900 transition-colors duration-500 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute bottom-0 start-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-50/50 to-transparent dark:from-amber-950/20 dark:to-transparent" />

        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium mb-4">
              {t('gallery.sectionTitle')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-white mb-6">
              {t('gallery.title')}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full mt-6" />
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.key}
                className="group relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg shadow-amber-900/5 dark:shadow-black/20 hover:shadow-2xl hover:shadow-amber-600/15 dark:hover:shadow-amber-900/30 transition-all duration-500 cursor-pointer"
              >
                {/* Real Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={t(`gallery.projects.${project.key}`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
                    {t(`gallery.projects.${project.key}`)}
                  </h3>
                  <button 
                    onClick={() => handleViewProject(project)}
                    className="px-5 sm:px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-full transition-colors duration-300 flex items-center gap-2"
                  >
                    {t('gallery.viewProject')}
                    <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 end-4 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-e-2 border-white/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={closeModal}>
          <div 
            className="bg-white dark:bg-neutral-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-video">
              <img 
                src={selectedProject.image} 
                alt={t(`gallery.projects.${selectedProject.key}`)}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 end-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-white mb-4">
                {t(`gallery.projects.${selectedProject.key}`)}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {t('about.description')}
              </p>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  closeModal();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl transition-all duration-300"
              >
                {t('hero.secondary')}
                <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
