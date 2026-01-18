import type { TranslationRecord, FooterTranslations } from '@/i18n/types';

export const footer: TranslationRecord<FooterTranslations> = {
    es: {
        name: "ANDRÉS QUINDT",
        subtitle: "Software Engineering Lead<br />& AI Architect",
        email: "andres.quindt@gmail.com",
        linkedin: "LinkedIn",
        location: "Buenos Aires, Argentina",
        downloadCv: "Descargar CV",
        builtWith: "Built with Astro & Tailwind CSS"
    },
    en: {
        name: "ANDRÉS QUINDT",
        subtitle: "Software Engineering Lead<br />& AI Architect",
        email: "andres.quindt@gmail.com",
        linkedin: "LinkedIn",
        location: "Buenos Aires, Argentina",
        downloadCv: "Download CV",
        builtWith: "Built with Astro & Tailwind CSS"
    }
} as const;
