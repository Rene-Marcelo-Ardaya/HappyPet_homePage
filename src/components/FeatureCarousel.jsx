import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FeatureCarousel = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            icon: 'cloud_done',
            title: t('featureCloudTitle') || '100% en la Nube',
            description: t('featureCloudDesc') || 'Accede a tu clínica desde cualquier lugar, en cualquier dispositivo. Sin instalaciones, sin complicaciones.',
            color: 'sky',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
        },
        {
            icon: 'speed',
            title: t('featureSpeedTitle') || 'Rápido y Fácil',
            description: t('featureSpeedDesc') || 'Interfaz intuitiva diseñada para que tu equipo sea productivo desde el primer día.',
            color: 'emerald',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
        },
        {
            icon: 'security',
            title: t('featureSecurityTitle') || 'Seguro y Confiable',
            description: t('featureSecurityDesc') || 'Tus datos protegidos con encriptación bancaria. Respaldos automáticos diarios.',
            color: 'violet',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
        },
        {
            icon: 'support_agent',
            title: t('featureSupportTitle') || 'Soporte Dedicado',
            description: t('featureSupportDesc') || 'Equipo de soporte disponible para ayudarte cuando lo necesites.',
            color: 'amber',
            image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop'
        }
    ];

    const colorClasses = {
        sky: 'bg-sky-500',
        emerald: 'bg-emerald-500',
        violet: 'bg-violet-500',
        amber: 'bg-amber-500'
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [features.length]);

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-4">
                        ✨ {t('benefitsTitle') || 'Beneficios'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        {t('featuresTitle')}
                    </h2>
                </div>

                {/* Carousel */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Feature Tabs */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        {features.map((feature, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${activeIndex === index
                                        ? 'bg-slate-100 dark:bg-slate-700 shadow-lg'
                                        : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${activeIndex === index ? colorClasses[feature.color] : 'bg-slate-200 dark:bg-slate-600'} transition-colors`}>
                                        <span className={`material-symbols-outlined text-[24px] ${activeIndex === index ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`font-bold mb-1 transition-colors ${activeIndex === index ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`text-sm transition-colors ${activeIndex === index ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400 dark:text-slate-500'}`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                    {activeIndex === index && (
                                        <div className={`w-1 h-full ${colorClasses[feature.color]} rounded-full`}></div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Feature Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colorClasses[feature.color]} text-white text-sm font-medium mb-2`}>
                                            <span className="material-symbols-outlined text-[16px]">{feature.icon}</span>
                                            {feature.title}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Progress Indicators */}
                        <div className="flex justify-center gap-2 mt-4">
                            {features.map((feature, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                            ? `w-8 ${colorClasses[feature.color]}`
                                            : 'w-2 bg-slate-300 dark:bg-slate-600'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                        <p className="text-3xl md:text-4xl font-extrabold text-sky-600 dark:text-sky-400 mb-2">500+</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('statClinics') || 'Clínicas activas'}</p>
                    </div>
                    <div className="text-center p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                        <p className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-2">50k+</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('statPatients') || 'Mascotas registradas'}</p>
                    </div>
                    <div className="text-center p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                        <p className="text-3xl md:text-4xl font-extrabold text-violet-600 dark:text-violet-400 mb-2">99.9%</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('statUptime') || 'Tiempo activo'}</p>
                    </div>
                    <div className="text-center p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                        <p className="text-3xl md:text-4xl font-extrabold text-amber-600 dark:text-amber-400 mb-2">24/7</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t('statSupport') || 'Soporte disponible'}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCarousel;
