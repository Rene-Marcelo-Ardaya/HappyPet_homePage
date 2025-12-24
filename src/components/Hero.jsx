import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
    const { t, language } = useLanguage();

    return (
        <section className="relative bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row min-h-[85vh]">

                    {/* Left Side - Content */}
                    <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-0">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                                {language === 'es' ? 'Software Veterinario #1' :
                                    language === 'pt' ? 'Software Veterinário #1' :
                                        '#1 Veterinary Software'}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            {t('title')}
                            <span className="block text-emerald-600 dark:text-emerald-400 mt-2">
                                {t('vets')}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed">
                            {t('subtitle')}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href="https://petsoft.pro/happypet/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5"
                            >
                                <span className="material-symbols-outlined text-[20px]">play_circle</span>
                                {t('liveDemo')}
                            </a>
                            <a
                                href="https://wa.me/59160852098"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-semibold rounded-xl hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                {t('contactSales')}
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-emerald-500 text-[18px]">verified</span>
                                <span>+500 {language === 'es' ? 'negocios' : 'businesses'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-emerald-500 text-[18px]">cloud_done</span>
                                <span>100% cloud</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-emerald-500 text-[18px]">support_agent</span>
                                <span>{language === 'es' ? 'Soporte' : 'Support'} 24/7</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex-1 relative flex items-center justify-center p-6 lg:p-0">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-sky-50 dark:from-emerald-900/10 dark:to-sky-900/10"></div>

                        {/* Decorative circles */}
                        <div className="absolute top-10 right-10 w-20 h-20 rounded-full border-4 border-emerald-200 dark:border-emerald-800 opacity-60"></div>
                        <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full bg-sky-200 dark:bg-sky-800 opacity-60"></div>
                        <div className="absolute top-1/3 left-5 w-8 h-8 rounded-full bg-emerald-300 dark:bg-emerald-700 opacity-40"></div>

                        {/* Main Image Container */}
                        <div className="relative z-10 w-full max-w-xl">
                            {/* Shadow/glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 rounded-3xl blur-2xl"></div>

                            {/* Image frame */}
                            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                                {/* Browser bar */}
                                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex-1 mx-3">
                                        <div className="flex items-center gap-2 bg-white dark:bg-slate-600 rounded-md px-3 py-1 text-xs text-slate-500 dark:text-slate-300">
                                            <span className="material-symbols-outlined text-green-500 text-[12px]">lock</span>
                                            petsoft.pro/happypet
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard Image */}
                                <img
                                    src="/src/img/Image.jpeg"
                                    alt="HappyPet Dashboard"
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Floating notification */}
                            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl px-4 py-3 shadow-xl border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">calendar_today</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{t('dashboardReservations')}</p>
                                        <p className="text-xs text-slate-500">{t('dashboardActiveToday')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating sync badge */}
                            <div className="absolute -top-3 -right-3 bg-emerald-500 text-white rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-sm font-medium">
                                <span className="material-symbols-outlined text-[16px]">sync</span>
                                {t('dashboardSynced')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
