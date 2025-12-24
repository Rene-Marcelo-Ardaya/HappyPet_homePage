import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BusinessTypes = () => {
    const { language, t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    const businesses = [
        {
            id: 'veterinary',
            title: language === 'es' ? 'Clínica Veterinaria' : language === 'pt' ? 'Clínica Veterinária' : 'Veterinary Clinic',
            subtitle: language === 'es' ? 'Gestión clínica integral' : language === 'pt' ? 'Gestão clínica integral' : 'Complete clinic management',
            image: '/src/img/veterinary.png',
            icon: 'medical_services',
            color: 'emerald',
            features: language === 'es' ? [
                'Historial clínico completo de cada paciente',
                'Control de vacunas y desparasitaciones',
                'Recordatorios automáticos',
                'Control de inventario de productos'
            ] : language === 'pt' ? [
                'Histórico clínico completo de cada paciente',
                'Controle de vacinas e vermífugos',
                'Lembretes automáticos',
                'Controle de estoque de produtos'
            ] : [
                'Complete medical history for each patient',
                'Vaccine and deworming control',
                'Automatic reminders',
                'Product inventory control'
            ]
        },
        {
            id: 'spa',
            title: language === 'es' ? 'SPA y Peluquería' : language === 'pt' ? 'SPA e Banho & Tosa' : 'Pet Spa & Grooming',
            subtitle: language === 'es' ? 'Servicios de estética para mascotas' : language === 'pt' ? 'Serviços de estética para pets' : 'Pet grooming services',
            image: '/src/img/petspa.png',
            icon: 'spa',
            color: 'violet',
            features: language === 'es' ? [
                'Reservas de baños, cortes y tratamientos',
                'Hasta 60 reservas diarias gestionadas',
                'Recordatorios automáticos por WhatsApp',
                'Monitoreo de SPA'
            ] : language === 'pt' ? [
                'Reservas de banhos, tosas e tratamentos',
                'Até 60 reservas diárias gerenciadas',
                'Lembretes automáticos por WhatsApp',
                'Histórico de serviços por pet'
            ] : [
                'Bath, grooming and treatment bookings',
                'Up to 60 daily reservations managed',
                'Automatic WhatsApp reminders',
                'Service history per pet'
            ]
        },
        {
            id: 'store',
            title: language === 'es' ? 'Tienda de Mascotas' : language === 'pt' ? 'Pet Shop' : 'Pet Store',
            subtitle: language === 'es' ? 'Punto de venta y control de stock' : language === 'pt' ? 'Ponto de venda e controle de estoque' : 'Point of sale and stock control',
            image: '/src/img/petstore.png',
            icon: 'storefront',
            color: 'amber',
            features: language === 'es' ? [
                'Gestión de productos, accesorios y alimentos',
                'Control de inventario con alertas de stock',
                'Caja registradora integrada',
                'Reportes de ventas y productos más vendidos'
            ] : language === 'pt' ? [
                'Gestão de produtos, acessórios e alimentos',
                'Controle de estoque com alertas',
                'Caixa registradora integrada',
                'Relatórios de vendas e produtos mais vendidos'
            ] : [
                'Product, accessories and food management',
                'Inventory control with stock alerts',
                'Integrated cash register',
                'Sales reports and best-selling products'
            ]
        }
    ];

    const currentBusiness = businesses[activeIndex];

    const colorClasses = {
        emerald: {
            bg: 'bg-emerald-500',
            bgLight: 'bg-emerald-100 dark:bg-emerald-900/30',
            text: 'text-emerald-600 dark:text-emerald-400',
            border: 'border-emerald-500',
            gradient: 'from-emerald-500 to-teal-600'
        },
        violet: {
            bg: 'bg-violet-500',
            bgLight: 'bg-violet-100 dark:bg-violet-900/30',
            text: 'text-violet-600 dark:text-violet-400',
            border: 'border-violet-500',
            gradient: 'from-violet-500 to-purple-600'
        },
        amber: {
            bg: 'bg-amber-500',
            bgLight: 'bg-amber-100 dark:bg-amber-900/30',
            text: 'text-amber-600 dark:text-amber-400',
            border: 'border-amber-500',
            gradient: 'from-amber-500 to-orange-600'
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                        {language === 'es' ? 'Adaptado a todo tipo de negocios:' :
                            language === 'pt' ? 'Adaptado a todo tipo de negócios:' :
                                'Adapted to all types of businesses:'}
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            {language === 'es' ? 'desde los inicios hasta la expansión' :
                                language === 'pt' ? 'desde o início até a expansão' :
                                    'from startup to expansion'}
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        {language === 'es' ? 'Ya sea que gestiones una clínica veterinaria, un spa de mascotas o una tienda, HappyPet es flexible para apoyar la forma en que trabajas.' :
                            language === 'pt' ? 'Seja você gerenciando uma clínica veterinária, um spa para pets ou uma loja, HappyPet é flexível para apoiar a forma como você trabalha.' :
                                'Whether you manage a veterinary clinic, pet spa or store, HappyPet is flexible to support the way you work.'}
                    </p>
                </div>

                {/* Business Type Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {businesses.map((business, index) => (
                        <button
                            key={business.id}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all ${activeIndex === index
                                ? `bg-gradient-to-r ${colorClasses[business.color].gradient} text-white shadow-lg`
                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                }`}
                        >
                            <span className="material-symbols-outlined text-[20px]">{business.icon}</span>
                            {business.title}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[currentBusiness.color].gradient} rounded-3xl blur-3xl opacity-20`}></div>
                        <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 shadow-2xl">
                            <img
                                src={currentBusiness.image}
                                alt={currentBusiness.title}
                                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-6">
                        <div>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colorClasses[currentBusiness.color].bgLight} ${colorClasses[currentBusiness.color].text} text-sm font-semibold mb-4`}>
                                <span className="material-symbols-outlined text-[18px]">{currentBusiness.icon}</span>
                                {currentBusiness.subtitle}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {currentBusiness.title}
                            </h3>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                            <h4 className={`text-lg font-bold ${colorClasses[currentBusiness.color].text} mb-4 flex items-center gap-2`}>
                                <span className="material-symbols-outlined">check_circle</span>
                                {language === 'es' ? 'Lo que puedes hacer' : language === 'pt' ? 'O que você pode fazer' : 'What you can do'}
                            </h4>
                            <ul className="space-y-3">
                                {currentBusiness.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-300">
                                        <span className={`material-symbols-outlined ${colorClasses[currentBusiness.color].text} text-[20px] mt-0.5`}>
                                            chevron_right
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex items-center justify-center gap-4 pt-4">
                            <button
                                onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                                disabled={activeIndex === 0}
                                className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>

                            <div className="flex gap-2">
                                {businesses.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${activeIndex === index
                                            ? `${colorClasses[businesses[activeIndex].color].bg} w-8`
                                            : 'bg-slate-600 hover:bg-slate-500'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setActiveIndex(prev => Math.min(businesses.length - 1, prev + 1))}
                                disabled={activeIndex === businesses.length - 1}
                                className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessTypes;
