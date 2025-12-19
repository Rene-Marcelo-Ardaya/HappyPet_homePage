import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ValueProposition = () => {
    const { t } = useLanguage();

    return (
        <section className="flex flex-col gap-10 px-4 py-12 md:py-20 bg-white dark:bg-slate-900/50 @container">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col gap-4 mb-10 text-center md:text-left">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">{t('whyChoose')}</span>
                    <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold leading-tight tracking-tight md:text-4xl max-w-2xl">
                        {t('whyChooseSubtitle')}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-slate-800 p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[28px]">shield</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold">{t('securityTitle')}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t('securityDesc')}</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-slate-800 p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[28px]">schedule</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold">{t('schedulingTitle')}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t('schedulingDesc')}</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-slate-800 p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[28px]">videocam</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold">{t('telemedicineTitle')}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t('telemedicineDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
