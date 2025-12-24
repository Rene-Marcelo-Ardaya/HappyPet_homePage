import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ValueProposition = () => {
    const { t, language } = useLanguage();
    const [activeModule, setActiveModule] = useState(0);

    const modules = [
        {
            icon: 'group',
            title: t('moduleClients') || 'Gestión de Clientes',
            description: t('moduleClientsDesc') || 'Administra la información de tus clientes y sus mascotas en un solo lugar.',
            longDesc: language === 'es'
                ? 'Ya no necesitas múltiples herramientas desconectadas. Nuestro software hace que la gestión de clientes sea más fácil y rápida — para ti y tus clientes.'
                : language === 'pt'
                    ? 'Você não precisa mais de várias ferramentas desconectadas. Nosso software torna a gestão de clientes mais fácil e rápida.'
                    : 'You no longer need multiple disconnected tools. Our software makes client management easier and faster.',
            image: '/src/img/cliente.png',
            color: 'blue',
            floatingCard: { icon: 'person', title: 'Juan Pérez', subtitle: '3 mascotas registradas' }
        },
        {
            icon: 'point_of_sale',
            title: t('moduleCashRegister') || 'Caja',
            description: t('moduleCashRegisterDesc') || 'Control de ventas, cobros y gestión de pagos integrados.',
            longDesc: language === 'es'
                ? 'Factura en segundos, controla tus ventas y genera reportes automáticos. Todo integrado en un solo sistema.'
                : language === 'pt'
                    ? 'Fature em segundos, controle suas vendas e gere relatórios automáticos. Tudo integrado em um só sistema.'
                    : 'Invoice in seconds, control your sales and generate automatic reports. All integrated in one system.',
            image: '/src/img/caja.png',
            color: 'emerald',
            floatingCard: { icon: 'receipt', title: '$1,250.00', subtitle: 'Venta completada' }
        },
        {
            icon: 'inventory_2',
            title: t('moduleInventory') || 'Inventarios',
            description: t('moduleInventoryDesc') || 'Control de stock de medicamentos, productos y alertas de reposición.',
            longDesc: language === 'es'
                ? 'Mantén el control de tu inventario con alertas de stock bajo y reportes de movimientos.'
                : language === 'pt'
                    ? 'Mantenha o controle do seu estoque com alertas de baixo estoque e relatórios de movimentos.'
                    : 'Keep control of your inventory with low stock alerts and movement reports.',
            image: '/src/img/inventarios.png',
            color: 'amber',
            floatingCard: { icon: 'inventory', title: '145 productos', subtitle: 'En stock' }
        },
        {
            icon: 'medical_services',
            title: t('moduleVeterinary') || 'Veterinaria',
            description: t('moduleVeterinaryDesc') || 'Historial clínico, consultas y fichas médicas completas.',
            longDesc: language === 'es'
                ? 'Historial clínico completo, vacunas, desparasitaciones y fichas médicas. Todo en un solo lugar.'
                : language === 'pt'
                    ? 'Histórico clínico completo, vacinas, vermífugos e fichas médicas. Tudo em um só lugar.'
                    : 'Complete medical history, vaccines, deworming and medical records. All in one place.',
            image: '/src/img/veterinaria.png',
            color: 'rose',
            floatingCard: { icon: 'vaccines', title: 'Vacuna aplicada', subtitle: 'Hace 2 min' }
        },
        {
            icon: 'spa',
            title: t('moduleSpa') || 'SPA y Peluquería',
            description: t('moduleSpaDesc') || 'Gestión de servicios de estética, baños, cortes y tratamientos de belleza.',
            longDesc: language === 'es'
                ? 'Gestiona reservas de baños, cortes y tratamientos. Hasta 60 reservas diarias con recordatorios por WhatsApp.'
                : language === 'pt'
                    ? 'Gerencie reservas de banhos, tosas e tratamentos. Até 60 reservas diárias com lembretes por WhatsApp.'
                    : 'Manage bath, grooming and treatment bookings. Up to 60 daily reservations with WhatsApp reminders.',
            image: '/src/img/spa.png',
            color: 'violet',
            floatingCard: { icon: 'schedule', title: '12 reservas', subtitle: 'Para hoy' }
        },
        {
            icon: 'storefront',
            title: t('moduleStore') || 'Tienda',
            description: t('moduleStoreDesc') || 'Punto de venta para productos, accesorios y alimentos para mascotas.',
            longDesc: language === 'es'
                ? 'Gestiona tu tienda de productos, accesorios y alimentos. Control de inventario y punto de venta integrado.'
                : language === 'pt'
                    ? 'Gerencie sua loja de produtos, acessórios e alimentos. Controle de estoque e ponto de venda integrado.'
                    : 'Manage your product store, accessories and food. Inventory control and integrated point of sale.',
            image: '/src/img/tienda.png',
            color: 'cyan',
            floatingCard: { icon: 'shopping_bag', title: '25 ventas', subtitle: 'Esta semana' }
        }
    ];

    const colorClasses = {
        blue: { bg: 'bg-blue-500', light: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500' },
        emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500' },
        amber: { bg: 'bg-amber-500', light: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-500' },
        rose: { bg: 'bg-rose-500', light: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-500' },
        violet: { bg: 'bg-violet-500', light: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400', border: 'border-violet-500' },
        cyan: { bg: 'bg-cyan-500', light: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-500' }
    };

    const currentModule = modules[activeModule];
    const colors = colorClasses[currentModule.color];

    const benefits = [
        {
            icon: 'cloud',
            title: t('featureCloudTitle') || '100% en la Nube',
            description: t('featureCloudDesc') || 'Accede desde cualquier lugar sin instalar nada.',
            color: 'text-sky-500'
        },
        {
            icon: 'bolt',
            title: t('featureSpeedTitle') || 'Rápido y Fácil',
            description: t('featureSpeedDesc') || 'Interfaz intuitiva, productivo desde el día uno.',
            color: 'text-amber-500'
        },
        {
            icon: 'shield',
            title: t('featureSecurityTitle') || 'Seguro y Confiable',
            description: t('featureSecurityDesc') || 'Datos protegidos con respaldos automáticos.',
            color: 'text-emerald-500'
        },
        {
            icon: 'headset_mic',
            title: t('featureSupportTitle') || 'Soporte Dedicado',
            description: t('featureSupportDesc') || 'Equipo listo para ayudarte cuando lo necesites.',
            color: 'text-violet-500'
        }
    ];

    return (
        <section id="modules" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4">

                {/* Main Feature Section - Provet Style */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
                    {/* Left - Text Content */}
                    <div className="flex-1 lg:max-w-lg">
                        {/* Module Pills */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {modules.map((module, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveModule(index)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeModule === index
                                        ? `${colorClasses[module.color].bg} text-white shadow-lg`
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">{module.icon}</span>
                                    <span className="hidden sm:inline">{module.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Title with highlight */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            <span className={`${colors.text}`}>{currentModule.title}</span>
                            <span className="block mt-2">
                                {language === 'es' ? 'integrado' : language === 'pt' ? 'integrado' : 'integrated'}
                            </span>
                        </h2>

                        {/* Decorative line */}
                        <div className={`w-16 h-1 ${colors.bg} rounded-full mb-6`}></div>

                        {/* Description */}
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            {currentModule.longDesc}
                        </p>

                        {/* Feature list */}
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                <span className={`material-symbols-outlined ${colors.text}`}>check_circle</span>
                                {currentModule.description}
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                <span className={`material-symbols-outlined ${colors.text}`}>check_circle</span>
                                {language === 'es' ? 'Sincronización en tiempo real' : language === 'pt' ? 'Sincronização em tempo real' : 'Real-time synchronization'}
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                <span className={`material-symbols-outlined ${colors.text}`}>check_circle</span>
                                {language === 'es' ? 'Reportes y estadísticas' : language === 'pt' ? 'Relatórios e estatísticas' : 'Reports and statistics'}
                            </li>
                        </ul>

                        {/* CTA */}
                        <a
                            href="https://petsoft.pro/happypet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 ${colors.bg} text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-all`}
                        >
                            <span className="material-symbols-outlined">play_circle</span>
                            {t('liveDemo')}
                        </a>
                    </div>

                    {/* Right - Image with floating elements */}
                    <div className="flex-1 relative">
                        {/* Decorative elements */}
                        <div className={`absolute -top-6 -right-6 w-24 h-24 ${colors.light} rounded-full opacity-60`}></div>
                        <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${colors.light} rounded-full opacity-40`}></div>

                        {/* Floating icons */}
                        <div className={`absolute top-10 -left-4 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg border ${colors.border} z-10`}>
                            <span className={`material-symbols-outlined ${colors.text} text-[24px]`}>chat_bubble</span>
                        </div>
                        <div className={`absolute bottom-20 -right-4 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 z-10`}>
                            <span className="material-symbols-outlined text-slate-400 text-[24px]">notifications</span>
                        </div>

                        {/* Main circular image */}
                        <div className="relative mx-auto w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                            {/* Circle border */}
                            <div className={`absolute inset-0 rounded-full border-4 ${colors.border} opacity-30`}></div>

                            {/* Image */}
                            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                                <img
                                    src={currentModule.image}
                                    alt={currentModule.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-4 right-0 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 z-20">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 ${colors.light} rounded-lg`}>
                                        <span className={`material-symbols-outlined ${colors.text}`}>{currentModule.floatingCard.icon}</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">{currentModule.floatingCard.title}</p>
                                        <p className="text-xs text-slate-500">{currentModule.floatingCard.subtitle}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Time slots (like in reference) */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                                {['10:00', '11:00', '12:00', '14:00', '15:00'].map((time, i) => (
                                    <span key={i} className={`text-xs px-2 py-1 rounded ${i === 2 ? colors.bg + ' text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                                        {time}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div id="benefits" className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            {t('benefitsTitle') || 'Beneficios'}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            {language === 'es' ? 'Todo lo que necesitas para crecer' :
                                language === 'pt' ? 'Tudo que você precisa para crescer' :
                                    'Everything you need to grow'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-slate-700 shadow-lg mb-4">
                                    <span className={`material-symbols-outlined text-[28px] ${benefit.color}`}>
                                        {benefit.icon}
                                    </span>
                                </div>
                                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="mt-16 relative overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"></div>

                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
                    </div>

                    <div className="relative px-8 py-12 md:py-16 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {t('additionalTitle') || 'Y mucho más...'}
                        </h3>

                        <div className="flex flex-wrap justify-center gap-4 mb-8 text-white/90 text-sm">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full">
                                <span className="material-symbols-outlined text-[16px]">check</span>
                                {t('featureReportsAdv') || 'Reportes avanzados'}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full">
                                <span className="material-symbols-outlined text-[16px]">check</span>
                                {t('featureMultiUser') || 'Multi-usuario'}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full">
                                <span className="material-symbols-outlined text-[16px]">check</span>
                                {t('featureBackup') || 'Respaldos automáticos'}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full">
                                <span className="material-symbols-outlined text-[16px]">check</span>
                                {t('featureAccessControl') || 'Control de accesos'}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full">
                                <span className="material-symbols-outlined text-[16px]">check</span>
                                {t('featureReminders') || 'Recordatorios'}
                            </span>
                        </div>

                        <a
                            href="https://petsoft.pro/happypet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                        >
                            <span className="material-symbols-outlined">play_circle</span>
                            {t('liveDemo')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
