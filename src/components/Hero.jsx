import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col gap-8 md:flex-row md:items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 md:w-1/2 md:pr-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-sm font-medium">
                            <span className="material-symbols-outlined text-[16px]">pets</span>
                            <span>Software Veterinario #1</span>
                        </div>

                        <div className="flex flex-col gap-4 text-left">
                            <h1 className="text-slate-900 dark:text-white text-4xl font-extrabold leading-[1.1] tracking-tight @[480px]:text-5xl lg:text-6xl">
                                {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">{t('vets')}</span>
                            </h1>
                            <h2 className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed max-w-lg">
                                {t('subtitle')}
                            </h2>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
                            <a
                                href="https://petsoft.pro/happypet/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl h-14 px-8 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-sky-500/25 transition-all active:scale-95"
                            >
                                <span className="material-symbols-outlined">play_circle</span>
                                {t('liveDemo')}
                            </a>
                            <a
                                href="https://wa.me/59160852098"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl h-14 px-8 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-base font-bold leading-normal tracking-wide hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-emerald-300 transition-all active:scale-95"
                            >
                                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                {t('contactSales')}
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-emerald-500 text-[20px]">verified</span>
                                <span>+500 clínicas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sky-500 text-[20px]">cloud_done</span>
                                <span>100% en la nube</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-amber-500 text-[20px]">support_agent</span>
                                <span>Soporte 24/7</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual - Software Preview */}
                    <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
                        <div className="relative">
                            {/* Main Dashboard Preview */}
                            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                                {/* Browser Header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-white dark:bg-slate-600 rounded-md px-3 py-1 text-xs text-slate-500 dark:text-slate-300 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[14px]">lock</span>
                                            petsoft.pro/happypet
                                        </div>
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="flex">
                                    {/* Sidebar Preview */}
                                    <div className="w-16 bg-gradient-to-b from-sky-600 to-sky-700 p-2 space-y-3">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <span className="material-symbols-outlined text-white text-[20px]">pets</span>
                                        </div>
                                        <div className="p-2 hover:bg-white/10 rounded-lg cursor-pointer">
                                            <span className="material-symbols-outlined text-white/70 text-[20px]">group</span>
                                        </div>
                                        <div className="p-2 hover:bg-white/10 rounded-lg cursor-pointer">
                                            <span className="material-symbols-outlined text-white/70 text-[20px]">point_of_sale</span>
                                        </div>
                                        <div className="p-2 hover:bg-white/10 rounded-lg cursor-pointer">
                                            <span className="material-symbols-outlined text-white/70 text-[20px]">inventory_2</span>
                                        </div>
                                        <div className="p-2 hover:bg-white/10 rounded-lg cursor-pointer">
                                            <span className="material-symbols-outlined text-white/70 text-[20px]">spa</span>
                                        </div>
                                        <div className="p-2 hover:bg-white/10 rounded-lg cursor-pointer">
                                            <span className="material-symbols-outlined text-white/70 text-[20px]">medical_services</span>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-800/50">
                                        {/* Welcome Header */}
                                        <div className="mb-4">
                                            <h4 className="text-lg font-bold text-slate-800 dark:text-white">¡Bienvenido a HappyPet!</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Panel de Control</p>
                                        </div>

                                        {/* Stats Cards */}
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            <div className="bg-white dark:bg-slate-700 rounded-lg p-3 shadow-sm">
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 bg-sky-100 dark:bg-sky-900/30 rounded-lg">
                                                        <span className="material-symbols-outlined text-sky-600 text-[16px]">pets</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-lg font-bold text-slate-800 dark:text-white">128</p>
                                                        <p className="text-[10px] text-slate-500">Pacientes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-white dark:bg-slate-700 rounded-lg p-3 shadow-sm">
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                                                        <span className="material-symbols-outlined text-emerald-600 text-[16px]">calendar_today</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-lg font-bold text-slate-800 dark:text-white">12</p>
                                                        <p className="text-[10px] text-slate-500">Citas hoy</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-white dark:bg-slate-700 rounded-lg p-3 shadow-sm">
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                                                        <span className="material-symbols-outlined text-amber-600 text-[16px]">payments</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-lg font-bold text-slate-800 dark:text-white">$2.4k</p>
                                                        <p className="text-[10px] text-slate-500">Ventas</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Activity List */}
                                        <div className="bg-white dark:bg-slate-700 rounded-lg p-3 shadow-sm">
                                            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 mb-2">Próximas citas</p>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-xs">
                                                    <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center">🐕</div>
                                                    <div className="flex-1">
                                                        <p className="font-medium text-slate-700 dark:text-slate-200">Max - Vacunación</p>
                                                        <p className="text-slate-400 text-[10px]">10:00 AM</p>
                                                    </div>
                                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">Confirmada</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">🐈</div>
                                                    <div className="flex-1">
                                                        <p className="font-medium text-slate-700 dark:text-slate-200">Michi - Consulta</p>
                                                        <p className="text-slate-400 text-[10px]">11:30 AM</p>
                                                    </div>
                                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px] font-medium">Pendiente</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-xl border border-slate-200 dark:border-slate-700 animate-bounce-slow">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                                        <span className="material-symbols-outlined text-emerald-600">trending_up</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700 dark:text-white">+23% ventas</p>
                                        <p className="text-[10px] text-slate-400">este mes</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-xl border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg">
                                        <span className="material-symbols-outlined text-sky-600">cloud_sync</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700 dark:text-white">Sincronizado</p>
                                        <p className="text-[10px] text-slate-400">hace 2 min</p>
                                    </div>
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
