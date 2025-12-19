import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Sidebar = ({ isOpen, onClose }) => {
    const { t } = useLanguage();

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar Drawer */}
            <aside
                className={`fixed top-0 left-0 bottom-0 w-72 bg-emerald-600 dark:bg-emerald-800 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex flex-col h-full bg-emerald-600 dark:bg-emerald-800 text-white">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[28px] text-white">pets</span>
                            <span className="text-xl font-bold tracking-tight">Petsoft</span>
                        </div>
                        <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    {/* Nav Items */}
                    <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
                        <a href="https://petsoft.pro/happypet/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/10 text-emerald-50 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="font-medium">{t('navDemo')}</span>
                        </a>
                        <a href="#pricing" onClick={onClose} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/10 text-emerald-50 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">payments</span>
                            <span className="font-medium">{t('navPricing')}</span>
                        </a>
                        <a href="https://wa.me/59160852098" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/10 text-emerald-50 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">mail</span>
                            <span className="font-medium">{t('navContact')}</span>
                        </a>
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-white/10 bg-emerald-700/50">
                        <div className="p-3 bg-white/10 rounded-xl">
                            <p className="text-xs font-medium text-emerald-100 mb-2">Need help?</p>
                            <a
                                href="https://wa.me/59160852098"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-2 bg-white text-emerald-700 rounded-lg text-sm font-bold shadow-sm hover:bg-emerald-50 transition-colors text-center"
                            >
                                {t('contactSales')}
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
