import type { TranslationRecord, AboutTranslations } from '@/i18n/types';

export const about: TranslationRecord<AboutTranslations> = {
    es: {
        label: '// Sobre mí',
        title: 'Resolver problemas se trata de tomar decisiones.',
        p1: 'Mi horizonte es construir y mejorar siempre en equipo y con dedicación.',
        p2: 'Me apasiona encontrar soluciones, cualidad que transversa la programación. Empecé programando y hoy mentorizo otros desarrolladores, mi corazón está en ambos mundos.',
    },
    en: {
        label: '// About me',
        title: 'Solving problems is about making decisions.',
        p1: 'My goal is to constantly build and improve, always through teamwork and dedication.',
        p2: 'I\'m passionate about finding solutions, a trait that goes beyond coding. I started as a developer and today I mentor others; my heart belongs to both worlds.',
    }
} as const;
