import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();

    const languages = [
        { code: 'en', flag: '🇺🇸', name: 'English' },
        { code: 'es', flag: '🇪🇸', name: 'Español' },
        { code: 'pt', flag: '🇧🇷', name: 'Português' },
        { code: 'gn', flag: '🇵🇾', name: 'Guaraní' }
    ];

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const navLinks = [
        { label: t('navDemo'), href: 'https://petsoft.pro/happypet/', external: true, highlight: true },
        { label: t('modulesTitle'), href: '#modules', external: false },
        { label: t('benefitsTitle'), href: '#benefits', external: false },
        { label: t('navPricing'), href: '#pricing', external: false }
    ];

    return (
        <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 p-2">
                            <span className="material-symbols-outlined text-[24px]">pets</span>
                        </div>
                        <p className="hidden sm:block text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Petsoft</p>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                className={`text-sm font-medium transition-all ${link.highlight
                                    ? 'px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/50 hover:scale-105'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Rights Side Actions */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Language Selector */}
                        <div className="flex items-center gap-2 relative">
                            <select
                                value={language}
                                onChange={handleLanguageChange}
                                className="appearance-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold rounded-full pl-3 pr-8 py-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 border-none"
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
            {/* Mobile Navigation Row - Simple horizontal scroll for links if needed, or just let them be accessed via Hero CTA */}
            <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex justify-center gap-6 py-2">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
