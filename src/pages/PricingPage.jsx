import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const PricingPage = () => {
    const { language, setLanguage, t } = useLanguage();

    const languages = [
        { code: 'en', flag: '🇺🇸', name: 'English' },
        { code: 'es', flag: '🇪🇸', name: 'Español' },
        { code: 'pt', flag: '🇧🇷', name: 'Português' },
        { code: 'gn', flag: '🇵🇾', name: 'Guaraní' }
    ];

    const plans = [
        {
            name: t('planStandard'),
            price: '$10',
            isPopular: true,
            isComingSoon: false,
            icon: 'star',
            gradient: 'from-emerald-500 to-teal-600',
            ctaLink: 'https://wa.me/59160852098?text=' + encodeURIComponent('Hola, me interesa el plan Estándar')
        },
        {
            name: t('planPro'),
            price: '---',
            isPopular: false,
            isComingSoon: true,
            icon: 'rocket_launch',
            gradient: 'from-violet-500 to-purple-600',
            ctaLink: '#'
        },
        {
            name: t('planGold'),
            price: '---',
            isPopular: false,
            isComingSoon: true,
            icon: 'workspace_premium',
            gradient: 'from-amber-500 to-orange-600',
            ctaLink: '#'
        }
    ];

    const features = [
        { key: 'featureUnlimitedPets', icon: 'pets' },
        { key: 'featureClientPetManagement', icon: 'groups' },
        { key: 'featureSpaReservations', icon: 'spa' },
        { key: 'featureWhatsAppReminders', icon: 'chat' },
        { key: 'featureUsers5', icon: 'group' },
        { key: 'featureReports', icon: 'analytics' },
        { key: 'featureProductManagement', icon: 'inventory_2' },
        { key: 'featureAccessControl', icon: 'admin_panel_settings' },
    ];

    const stats = [
        { value: '500+', label: language === 'es' ? 'Negocios activos' : 'Active businesses', icon: 'store' },
        { value: '50K+', label: language === 'es' ? 'Mascotas registradas' : 'Registered pets', icon: 'pets' },
        { value: '99.9%', label: language === 'es' ? 'Tiempo activo' : 'Uptime', icon: 'speed' },
        { value: '24/7', label: language === 'es' ? 'Soporte' : 'Support', icon: 'support_agent' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src="/src/img/logo.png"
                                alt="HappyPet Logo"
                                className="h-10 w-auto object-contain transition-transform group-hover:scale-110"
                            />
                            <p className="hidden sm:block text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Petsoft</p>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a
                                href="https://petsoft.pro/happypet/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/50 hover:scale-105 transition-all"
                            >
                                {t('navDemo')}
                            </a>
                            <Link to="/#modules" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                {t('modulesTitle')}
                            </Link>
                            <Link to="/#benefits" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                {t('benefitsTitle')}
                            </Link>
                            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500">
                                {t('navPricing')}
                            </span>
                        </nav>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Language Selector */}
                            <div className="flex items-center gap-2 relative">
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="appearance-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold rounded-full pl-3 pr-8 py-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border-none"
                                >
                                    {languages.map((lang) => (
                                        <option key={lang.code} value={lang.code}>
                                            {lang.flag} {lang.name}
                                        </option>
                                    ))}
                                </select>
                                <span className="material-symbols-outlined text-slate-500 text-[18px] absolute right-2 pointer-events-none">expand_more</span>
                            </div>

                            {/* Contact CTA */}
                            <a
                                href="https://wa.me/59160852098"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                            >
                                <span className="material-symbols-outlined text-[18px]">chat</span>
                                {t('navContact')}
                            </a>
                            {/* Mobile Contact Icon */}
                            <a
                                href="https://wa.me/59160852098"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex sm:hidden items-center justify-center w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                            >
                                <span className="material-symbols-outlined text-[20px]">chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Mobile Navigation Row */}
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex justify-center gap-6 py-2">
                        <a
                            href="https://petsoft.pro/happypet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            {t('navDemo')}
                        </a>
                        <Link to="/" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            {t('modulesTitle')}
                        </Link>
                        <Link to="/" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            {t('benefitsTitle')}
                        </Link>
                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 border-b border-emerald-500">
                            {t('navPricing')}
                        </span>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-8 shadow-lg shadow-emerald-500/10">
                        <span className="material-symbols-outlined text-[18px] animate-bounce">local_offer</span>
                        💰 {t('pricingBadge')}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                        <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                            {t('pricingTitle')}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
                        {t('pricingSubtitle')}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="https://petsoft.pro/happypet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-500/30 transition-all active:scale-95 hover:-translate-y-1"
                        >
                            <span className="material-symbols-outlined group-hover:animate-pulse">play_circle</span>
                            {t('liveDemo')}
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <a
                            href="https://wa.me/59160852098"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-2xl font-bold text-lg shadow-xl border border-slate-200 dark:border-slate-700 transition-all active:scale-95 hover:-translate-y-1"
                        >
                            <span className="material-symbols-outlined text-emerald-500">chat</span>
                            {t('contactSales')}
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group p-4 md:p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all hover:-translate-y-1"
                            >
                                <span className="material-symbols-outlined text-emerald-500 text-[28px] mb-2 group-hover:scale-110 transition-transform inline-block">{stat.icon}</span>
                                <div className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">{stat.value}</div>
                                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="relative py-12 md:py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`group relative flex flex-col items-center rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${plan.isPopular
                                    ? 'bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-2xl shadow-emerald-500/30 scale-105 z-10'
                                    : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl'
                                    } ${plan.isComingSoon ? 'opacity-80' : ''}`}
                            >
                                {/* Decorative glow */}
                                {plan.isPopular && (
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 blur-xl opacity-50 -z-10"></div>
                                )}

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${plan.isPopular
                                    ? 'bg-white/20'
                                    : `bg-gradient-to-br ${plan.gradient} shadow-lg`
                                    }`}>
                                    <span className={`material-symbols-outlined text-[32px] ${plan.isPopular ? 'text-white' : 'text-white'}`}>
                                        {plan.icon}
                                    </span>
                                </div>

                                {/* Popular Badge */}
                                {plan.isPopular && (
                                    <div className="absolute -top-4">
                                        <span className="bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">verified</span>
                                            {t('pricingPopular')}
                                        </span>
                                    </div>
                                )}

                                {/* Coming Soon Badge */}
                                {plan.isComingSoon && (
                                    <div className="absolute -top-4">
                                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg animate-pulse flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">construction</span>
                                            {t('pricingInDevelopment')}
                                        </span>
                                    </div>
                                )}

                                <h3 className={`text-2xl font-bold mt-2 mb-2 ${plan.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                    {plan.name}
                                </h3>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className={`text-5xl font-extrabold ${plan.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                        {plan.price}
                                    </span>
                                    {!plan.isComingSoon && (
                                        <span className={`text-sm ${plan.isPopular ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-400'}`}>
                                            {t('pricingMonth')}
                                        </span>
                                    )}
                                </div>

                                {!plan.isComingSoon && (
                                    <a
                                        href={plan.ctaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 ${plan.isPopular
                                            ? 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg hover:shadow-xl'
                                            : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/25'
                                            }`}
                                    >
                                        {t('pricingGetStarted')}
                                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Story Banner */}
            <section className="py-12 md:py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-700 shadow-2xl shadow-purple-500/30">
                        <div className="flex flex-col md:flex-row items-center">
                            {/* Image */}
                            <div className="w-full md:w-2/5 h-48 md:h-auto">
                                <img
                                    src="/src/img/testimonial.png"
                                    alt="Happy veterinary clinic"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-8 md:p-12 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                                    {language === 'es'
                                        ? <>Cómo nuestros clientes vieron un <span className="text-cyan-300">aumento del 14%</span> en la facturación de veterinaria y spa después de cambiarse a HappyPet</>
                                        : language === 'pt'
                                            ? <>Como nossos clientes viram um <span className="text-cyan-300">aumento de 14%</span> no faturamento de veterinária e spa após mudar para HappyPet</>
                                            : <>How our customers saw a <span className="text-cyan-300">14% increase</span> in veterinary and spa billing after switching to HappyPet</>
                                    }
                                </h3>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/5 rounded-full translate-y-1/2"></div>
                    </div>
                </div>
            </section>

            {/* Divider with icon */}
            <div className="flex items-center justify-center py-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent max-w-md"></div>
                <div className="mx-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-white text-[24px]">compare</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent max-w-md"></div>
            </div>

            {/* Included in Subscription - Comparison Table */}
            <section className="relative py-12 md:py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-4">
                            <span className="material-symbols-outlined text-[16px]">checklist</span>
                            {language === 'es' ? 'Funcionalidades' : 'Features'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                            {language === 'es' ? 'Incluido en tu Suscripción' :
                                language === 'pt' ? 'Incluído na sua Assinatura' :
                                    language === 'gn' ? 'Oĩmava ne Suscripción-pe' :
                                        'Included in your Subscription'}
                        </h2>
                    </div>

                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/80 dark:to-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                            <div className="p-4 md:p-6">
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px] text-slate-400">compare_arrows</span>
                                    {language === 'es' ? 'Comparación' :
                                        language === 'pt' ? 'Comparação' : 'Comparison'}
                                </span>
                            </div>
                            <div className="p-4 md:p-6 text-center bg-emerald-50/50 dark:bg-emerald-900/20">
                                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">star</span>
                                    {t('planStandard')}
                                </span>
                            </div>
                            <div className="p-4 md:p-6 text-center">
                                <span className="text-sm font-bold text-slate-400 flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                                    {t('planPro')}
                                </span>
                            </div>
                            <div className="p-4 md:p-6 text-center">
                                <span className="text-sm font-bold text-slate-400 flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                                    {t('planGold')}
                                </span>
                            </div>
                        </div>

                        {/* Feature Rows */}
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-4 border-b border-slate-100 dark:border-slate-700/50 last:border-b-0 transition-colors hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 ${index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50/50 dark:bg-slate-900/20'
                                    }`}
                            >
                                <div className="p-4 md:p-5 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">{feature.icon}</span>
                                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                                        {t(feature.key)}
                                    </span>
                                </div>
                                {/* Standard - Available */}
                                <div className="p-4 md:p-5 flex items-center justify-center bg-emerald-50/30 dark:bg-emerald-900/10">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px]">check</span>
                                    </div>
                                </div>
                                {/* Pro - Coming Soon */}
                                <div className="p-4 md:p-5 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-[20px]">check</span>
                                    </div>
                                </div>
                                {/* Gold - Coming Soon */}
                                <div className="p-4 md:p-5 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-[20px]">check</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 md:py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12">
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            <div className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[24px]">lock</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t('pricingSecurePayment')}</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-violet-600 dark:text-violet-400 text-[24px]">support_agent</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t('pricingSupportIncluded')}</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[24px]">event_available</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t('pricingCancelAnytime')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">copyright</span>
                        {new Date().getFullYear()} HappyPet by Petsoft. {t('allRightsReserved')}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default PricingPage;
