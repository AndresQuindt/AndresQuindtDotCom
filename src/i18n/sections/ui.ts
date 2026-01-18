import type { TranslationRecord, UITranslations } from '@/i18n/types';

export const ui: TranslationRecord<UITranslations> = {
    es: {
        menu: {
            home: "HOME",
            about: "SOBRE MI",
            skills: "HABILIDADES",
            experience: "EXPERIENCIA"
        },
        downloadCv: "Descargar CV"
    },
    en: {
        menu: {
            home: "HOME",
            about: "ABOUT",
            skills: "SKILLS",
            experience: "EXPERIENCE"
        },
        downloadCv: "Download CV"
    }
} as const;
