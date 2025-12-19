import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FeatureCarousel = () => {
    const { t } = useLanguage();

    return (
        <section className="flex flex-col gap-10 py-12 md:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
            <div className="px-4 max-w-7xl mx-auto w-full text-center">
                <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                    {t('featuresTitle')}
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Discover the tools that will transform your daily operations.
                </p>
            </div>

            <div className="px-4 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Item 1 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-video rounded-2xl bg-cover bg-center shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDd9kd_xzJ8mYblSB93RKX2sfl9MULOkzJwa8L0-B-JnU6aN4hz3uau58GbkE9o1cCdZwG1oJkaJ0DqtD9boVyPMLkrv15Aje6RxBZGc8OwhrawDYqgkEW_zz6UzpcMx0_Gx-QppH-etQgHDLMz514BwHJsYjxjU4-3j62JR3_3T-s5Fr51HcJrobWPYBm46cvj98H_GwVH71YU5Rzx7ohXLwKlUqMeErJwf2mWKd5TEzCm6A0S14y-8fmuwbem59Av9KPx73WDB3c")' }}></div>
                        </div>
                        <div className="p-2">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <span className="material-symbols-outlined text-[24px]">description</span>
                                <span className="text-xs font-bold uppercase tracking-wider">{t('recordsBadge')}</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-normal mb-2">{t('recordsTitle')}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">{t('recordsDesc')}</p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-video rounded-2xl bg-cover bg-center shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1bKDHrAhCYN6Fs9RA2au4NMJ-qjvf2w1T2myXkETvZApVjQ0ou3ty1qcEkOa4w62j6XGWdE7vyUficeZpiJyh_Cx-e1ApNj0OGnuUWf_gqrrw4t02YHV2pwL0fQ-10PwSBt3kqhVFTjo0H0GTI9WCNKIXnhv3kQg8jD09TTwkQe5OGp3of9T6RN6euwACyIDlmEideOrk6Ycp1k6akU0QQ8iPnzIkRnWzJ5rtxWAiUJDlbzxWp3G9f1BjEgp0VknRNpmoIoaqzu8")' }}></div>
                        </div>
                        <div className="p-2">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <span className="material-symbols-outlined text-[24px]">smartphone</span>
                                <span className="text-xs font-bold uppercase tracking-wider">{t('mobileBadge')}</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-normal mb-2">{t('mobileTitle')}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">{t('mobileDesc')}</p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="w-full aspect-video rounded-2xl bg-cover bg-center shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7blqhrG1i7gh6rBiDNoG9csIoIfsu6n8ak_kVg0-cYYu1hi9P4JSUgZIAZ1EPQGk-2ZuO4LjAdjsLFTzptoPSXOBJKQ2RLSdlIkkPA8kaFRhBksa6pImelixMPLkZA3fRbMS6tOyoYmktqlN3ojkXBqHfusTO68VkUabNuwzgTLdx25b4Kcbh6H3HNyG8cYTY-Rg2b7RQKbJ52LqIVIu2u5rFj1Omwv1FwP3pQVvDsBe0TviVCPyyHGKeH3rxNDsUq_SZK4d857A")' }}></div>
                        </div>
                        <div className="p-2">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                                <span className="text-xs font-bold uppercase tracking-wider">{t('billingBadge')}</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-normal mb-2">{t('billingTitle')}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">{t('billingDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCarousel;
