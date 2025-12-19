import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PricingCard = ({ plan, price, features, isPopular, isComingSoon, ctaText, ctaLink, popularText, comingSoonText, month }) => {
    return (
        <div className={`relative flex flex-col rounded-2xl p-6 ${isPopular ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-500/25 scale-105 z-10' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg'} transition-all duration-300 hover:shadow-xl ${isComingSoon ? 'opacity-90' : ''}`}>
            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        ⭐ {popularText}
                    </span>
                </div>
            )}

            {/* Coming Soon Badge */}
            {isComingSoon && (
                <div className="absolute -top-3 right-4">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                        🚧 {comingSoonText}
                    </span>
                </div>
            )}

            {/* Plan Header */}
            <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        {price}
                    </span>
                    <span className={`text-sm ${isPopular ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {month}
                    </span>
                </div>
            </div>

            {/* Features List */}
            <ul className="flex-1 space-y-3 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className={`material-symbols-outlined text-[18px] mt-0.5 ${isPopular ? 'text-emerald-200' : 'text-emerald-500'}`}>
                            check_circle
                        </span>
                        <span className={`text-sm ${isPopular ? 'text-emerald-50' : 'text-slate-600 dark:text-slate-300'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <a
                href={isComingSoon ? '#' : ctaLink}
                target={isComingSoon ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`block w-full py-3 px-4 rounded-xl font-bold text-center transition-all ${isComingSoon
                        ? 'bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                        : isPopular
                            ? 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg'
                            : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-500/25'
                    }`}
                onClick={(e) => isComingSoon && e.preventDefault()}
            >
                {isComingSoon ? `🔜 ${comingSoonText}` : ctaText}
            </a>
        </div>
    );
};

const Pricing = () => {
    const { t } = useLanguage();

    const plans = [
        {
            plan: t('planStandard'),
            price: '$29',
            features: [
                t('featurePatients100'),
                t('featureBasicSchedule'),
                t('featureMedicalHistory'),
                t('featureEmailReminders'),
                t('featureEmailSupport'),
                t('featureUsers1')
            ],
            isPopular: false,
            isComingSoon: false,
            ctaText: t('pricingGetStarted'),
            ctaLink: 'https://wa.me/59160852098?text=' + encodeURIComponent('Hola, me interesa el plan Estándar')
        },
        {
            plan: t('planPro'),
            price: '$59',
            features: [
                t('featurePatients500'),
                t('featureAISchedule'),
                t('featureAdvancedHistory'),
                t('featureEmailSMSReminders'),
                t('featureAutoBilling'),
                t('featureReports'),
                t('featureUsers5'),
                t('featurePrioritySupport')
            ],
            isPopular: true,
            isComingSoon: true,
            ctaText: t('pricingGetStarted'),
            ctaLink: 'https://wa.me/59160852098?text=' + encodeURIComponent('Hola, me interesa el plan Pro')
        },
        {
            plan: t('planGold'),
            price: '$99',
            features: [
                t('featureUnlimitedPatients'),
                t('featureAllProFeatures'),
                t('featureTelemedicine'),
                t('featureMultiBranch'),
                t('featureCustomAPI'),
                t('featureAdvancedIntegrations'),
                t('featureUnlimitedUsers'),
                t('featureSupport247'),
                t('featureTrainingIncluded')
            ],
            isPopular: false,
            isComingSoon: true,
            ctaText: t('pricingGetStarted'),
            ctaLink: 'https://wa.me/59160852098?text=' + encodeURIComponent('Hola, me interesa el plan Gold')
        }
    ];

    return (
        <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-4">
                        💰 {t('pricingBadge')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        {t('pricingTitle')}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        {t('pricingSubtitle')}
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-stretch max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            {...plan}
                            popularText={t('pricingPopular')}
                            comingSoonText={t('pricingInDevelopment')}
                            month={t('pricingMonth')}
                        />
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                        <span className="material-symbols-outlined text-[18px]">info</span>
                        <span>{t('pricingNote')}</span>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-slate-400 dark:text-slate-500">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">lock</span>
                        <span className="text-sm">{t('pricingSecurePayment')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">support_agent</span>
                        <span className="text-sm">{t('pricingSupportIncluded')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">cancel</span>
                        <span className="text-sm">{t('pricingCancelAnytime')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
