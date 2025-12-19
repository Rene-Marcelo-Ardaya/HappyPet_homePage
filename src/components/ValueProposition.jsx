import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ModuleCard = ({ icon, title, description, color }) => {
    const colorClasses = {
        sky: 'bg-sky-100 dark:bg-sky-900/30 text-sky-600',
        emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600',
        amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600',
        violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600',
        rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600',
        cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600',
    };

    return (
        <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`inline-flex p-3 rounded-xl ${colorClasses[color]} mb-4 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[28px]">{icon}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
        </div>
    );
};

const ValueProposition = () => {
    const { t } = useLanguage();

    const modules = [
        {
            icon: 'group',
            title: t('moduleClients') || 'Gestión de Clientes',
            description: t('moduleClientsDesc') || 'Administra la información de tus clientes y sus mascotas en un solo lugar.',
            color: 'sky'
        },
        {
            icon: 'point_of_sale',
            title: t('moduleCashRegister') || 'Caja',
            description: t('moduleCashRegisterDesc') || 'Control de ventas, cobros y gestión de pagos integrados.',
            color: 'emerald'
        },
        {
            icon: 'inventory_2',
            title: t('moduleInventory') || 'Inventarios',
            description: t('moduleInventoryDesc') || 'Control de stock de medicamentos, productos y alertas de reposición.',
            color: 'amber'
        },
        {
            icon: 'medical_services',
            title: t('moduleVeterinary') || 'Veterinaria',
            description: t('moduleVeterinaryDesc') || 'Historial clínico, consultas y fichas médicas completas.',
            color: 'rose'
        },
        {
            icon: 'spa',
            title: t('moduleSpa') || 'SPA y Peluquería',
            description: t('moduleSpaDesc') || 'Gestión de servicios de estética, baños, cortes y tratamientos de belleza.',
            color: 'violet'
        },
        {
            icon: 'storefront',
            title: t('moduleStore') || 'Tienda',
            description: t('moduleStoreDesc') || 'Punto de venta para productos, accesorios y alimentos para mascotas.',
            color: 'cyan'
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-sm font-semibold mb-4">
                        🚀 {t('modulesTitle') || 'Módulos Integrados'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        {t('whyChoose')}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        {t('whyChooseSubtitle')}
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module, index) => (
                        <ModuleCard key={index} {...module} />
                    ))}
                </div>

                {/* Additional Features */}
                <div className="mt-16 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {t('additionalTitle') || 'Y mucho más...'}
                            </h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sky-200">check_circle</span>
                                    <span>{t('featureReportsAdv') || 'Reportes avanzados'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sky-200">check_circle</span>
                                    <span>{t('featureMultiUser') || 'Multi-usuario'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sky-200">check_circle</span>
                                    <span>{t('featureBackup') || 'Respaldos automáticos'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sky-200">check_circle</span>
                                    <span>{t('featureAccessControl') || 'Control de accesos'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sky-200">check_circle</span>
                                    <span>{t('featureHR') || 'Gestión de RRHH'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sky-200">check_circle</span>
                                    <span>{t('featureReminders') || 'Recordatorios'}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://petsoft.pro/happypet/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 font-bold rounded-xl shadow-lg hover:bg-sky-50 transition-all active:scale-95"
                            >
                                <span className="material-symbols-outlined">play_circle</span>
                                {t('liveDemo')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
