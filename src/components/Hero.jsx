import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="@container">
            <div className="flex flex-col gap-8 px-4 py-8 md:py-16 md:flex-row md:items-center max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="flex flex-col gap-6 md:w-1/2 md:pr-8">
                    <div className="flex flex-col gap-4 text-left">
                        <h1 className="text-slate-900 dark:text-white text-4xl font-extrabold leading-[1.1] tracking-tight @[480px]:text-5xl lg:text-6xl">
                            {t('title')} <span className="text-primary">{t('vets')}</span>
                        </h1>
                        <h2 className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed max-w-lg">
                            {t('subtitle')}
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
                        <a
                            href="https://petsoft.pro/happypet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl h-12 px-8 bg-primary hover:bg-sky-400 text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/25 transition-all active:scale-95"
                        >
                            {t('liveDemo')}
                        </a>
                        <a
                            href="https://wa.me/59160852098"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl h-12 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-base font-bold leading-normal tracking-wide hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
                        >
                            {t('contactSales')}
                        </a>
                    </div>
                    {/* Social Proof / Trust */}
                    <div className="flex items-center gap-4 mt-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 bg-cover bg-center" data-alt="User avatar 1" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5vn6rjcCKhO5ZbEBUX_JW47VH58fhgPNtrYtbc5eEm3OuFinmQpM-hlavZJvXpRf3vAhbgR4i_3ZwXdBqc3whXeyGG_FJxpxN2JfbWkf5rHtWQXLNW97X7J2EZAaV6JGlFcZESzaieOxtwfCrEExkA0VMWH8R2utMq9Lbt2Eqa0gXR7QM3oWgrNZC-LwCB6DjxHpVNd_6p7QrWQYIDl5cnf2de__s3nRFD7liKpsCqRy7A14FwElBVkTy5Q6yEG5T1K9PjcfO6dk")' }}></div>
                            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 bg-cover bg-center" data-alt="User avatar 2" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqVeRM5k4kosfiuvC_PG7IoN5VAJcsMLMEJzvGwzn6MRjCdiBBN1HacSne8GTksoZk38BiPJN2aCyqASS_7nKt8_sqQfqhAVm2QEEca3ngsqHzEkPPi5rac29SQthgCsuDziSFvpmIZNJm-KdSMkH4tx49hYFW6ZvmbxFTQqqTFG7IlRhiOCSCSPUncK9qMbN8HZeFCw04oUOCKYKiZn0nhXolfT2gQt4SkNy3kFOI1aRm2QW5nXvQVRVNHWhC6SD0orWBEfgOeIw")' }}></div>
                            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 bg-cover bg-center" data-alt="User avatar 3" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhm4ZD9GinG4ypFyGNomHSUfMvlH8ADKmqmIB_3n8jBUYoIJnsyHh4PmYSeFPo-kqUGOYSwBIqn8xJjtQtdmX1NMTAiQg8xeI8dI2VwMTouNVM19G05fYYVDZ984yKVmh385SZDeqBo7Z4iXzK6bDU53U3UlV8ZRRZ6QSzTThDDWcVjoQmiUWHzqGtURhAyotBSg54sQFnWT7AuWE_Jh4gM-aSQ6kOUwA3lZvhX-eR1VDmOqT6YnQJidQKVevMgrzSu1DUS0ePUe4")' }}></div>
                        </div>
                        <p>{t('trustedBy')}</p>
                    </div>
                </div>
                {/* Hero Visual */}
                <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group">
                        {/* This image represents the laptop interface with pets in the background */}
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Modern laptop displaying veterinary software dashboard with a blurred background of a golden retriever and cat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCrwILKxulHNcsyGeFuRTs42hyNr0i-Rs_bwlC8WcWLjo5zz6rw_hmPUkgh6BEa4FB9UcXrvJyGRmJZCCB00bhUiU4eXItVqE61KLHVuFPsD_0aXHmjsI5weu5jJU-n6GjDatdR6pzvB5yEzkBWXIdJDjapKeUpmecHBzn3CbK1sXC2NvMn8P_d9DETXi2nWc54py0IEsUtQEGYxiOiVBH8-hGp-eHWCy1litbCOht1cpfNh8_zMLIzOIs4Z0d4pHa6RUlhn2ALfY")' }}>
                        </div>
                        {/* Overlay Gradient for text readability if needed, though mostly visual here */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        {/* Floating UI Card Mockup overlaid on image */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur rounded-xl p-4 shadow-lg border border-slate-100 dark:border-slate-700 animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">pets</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{t('petName')}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{t('vaccinationDue')}</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="px-2 py-1 rounded-md bg-green-100 text-green-700 text-xs font-bold">{t('activeStatus')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
