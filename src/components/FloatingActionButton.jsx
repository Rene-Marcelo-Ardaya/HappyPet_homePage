import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingActionButton = ({ onClick }) => {
    const { t } = useLanguage();

    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 hover:scale-105 active:scale-95 transition-all"
        >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span className="font-bold text-sm">{t('chatWithSales')}</span>
        </button>
    );
};

export default FloatingActionButton;
