import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = ({ onMenuClick }) => {
    const { language, setLanguage, t } = useLanguage();

    const languages = [
        { code: 'en', flag: '🇺🇸', name: 'English' },
        { code: 'es', flag: '🇪🇸', name: 'Español' },
        { code: 'pt', flag: '🇧🇷', name: 'Português' }
    ];

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const currentLang = languages.find(l => l.code === language);

    return (
        <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-col px-4 py-3">
                <div className="flex items-center h-12 justify-between">
                    <div className="flex items-center gap-3">
                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 p-2">
                            <span className="material-symbols-outlined text-[28px]">pets</span>
                        </div>
                        <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">Petsoft</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Language Selector - Desktop */}
                        <div className="hidden sm:flex items-center gap-2 relative">
                            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-[20px]">translate</span>
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
                        <button
                            onClick={onMenuClick}
                            className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-transparent text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-[28px]">menu</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Language Selector Row (Visible only on small screens) */}
            <div className="flex sm:hidden px-4 pb-3 justify-end border-t border-slate-100 dark:border-slate-800 pt-2">
                <div className="flex items-center gap-2 relative">
                    <span className="material-symbols-outlined text-slate-400 text-[18px]">translate</span>
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="appearance-none bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-lg pl-3 pr-8 py-2 cursor-pointer border border-slate-200 dark:border-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.flag} {lang.name}
                            </option>
                        ))}
                    </select>
                    <span className="material-symbols-outlined text-slate-400 text-[16px] absolute right-2 pointer-events-none">expand_more</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
