import type { Language } from '@/config/pages/types';
import { about } from './sections/about';
import { experience } from './sections/experience';
import { footer } from './sections/footer';
import { hero } from './sections/hero';
import { skills } from './sections/skills';
import { ui } from './sections/ui';

export const translationRegistry = {
    ui,
    hero,
    about,
    skills,
    experience,
    footer,
} as const;

export function getSectionTranslation<K extends keyof typeof translationRegistry>(
    key: K,
    lang: Language
): (typeof translationRegistry)[K][typeof lang] {
    const section = translationRegistry[key];

    if (!section) {
        throw new Error(`Translation key "${key}" not found in registry`);
    }

    const translation = section[lang];

    if (!translation) {
        throw new Error(`Language "${lang}" not found for section "${key}"`);
    }

    return translation;
}

export function hasTranslation(key: string): key is keyof typeof translationRegistry {
    return key in translationRegistry;
}
