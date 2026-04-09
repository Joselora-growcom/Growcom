'use client';

import { useEffect } from 'react';

export default function CalendlySection() {

    // Clean up any potential duplicate scripts if navigating around
    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head?.appendChild(script);

        return () => {
            // Optional cleanup
        }
    }, []);

    return (
        <section id="calendly" className="relative bg-white py-12 sm:py-24 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-indigo-50/60" />
            </div>
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-5xl">
                    ¿Listo para escalar?
                </h2>
                <p className="mb-12 text-lg text-gray-600">
                    Selecciona una hora a continuación para hablar de tu estrategia de crecimiento.
                </p>

                <div
                    className="calendly-inline-widget w-full min-w-[320px] h-[750px] rounded-3xl overflow-hidden border border-gray-200/60 shadow-2xl shadow-indigo-900/10 ring-1 ring-black/5 bg-white"
                    data-url="https://calendly.com/pepelora-growcom/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&locale=es" style={{ minWidth: '320px', height: '1000px' }}
                />
            </div>
        </section>
    );
}
