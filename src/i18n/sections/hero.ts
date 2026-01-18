import type { TranslationRecord, HeroTranslations } from '@/i18n/types';

export const hero: TranslationRecord<HeroTranslations> = {
    es: {
        title: "Software Engineer Lead & AI Architect",
        description: "Mentorizo, diseño e implemento sistemas que solucionan problemas reales.",
    },
    en: {
        title: "Software Engineering Lead & AI Architect",
        description: "I mentor, design, and implement systems that solve real-world problems.",
    }
} as const;
