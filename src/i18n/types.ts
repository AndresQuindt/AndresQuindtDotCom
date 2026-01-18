import type { Language } from '@/config/pages/types';

export type TranslationRecord<T> = {
    [K in Language]: T;
};

export interface UITranslations {
    menu: {
        home: string;
        about: string;
        skills: string;
        experience: string;
    };
    downloadCv: string;
}

export interface HeroTranslations {
    title: string;
    description: string;
}

export interface AboutTranslations {
    label: string;
    title: string;
    p1: string;
    p2: string;
}

export interface SkillModule {
    id: string;
    title: string;
    items: string[];
    iconName: keyof IconRegistry;
}

export interface SkillsTranslations {
    label: string;
    title: string;
    modules: SkillModule[];
}

export interface ExperiencePosition {
    role: string;
    company: string;
    date: string;
    bullets: string[];
}

export interface ExperienceTranslations {
    label: string;
    title: string;
    current: ExperiencePosition & { badge: string };
    positions: ExperiencePosition[];
}

export interface FooterTranslations {
    name: string;
    subtitle: string;
    email: string;
    linkedin: string;
    location: string;
    downloadCv: string;
    builtWith: string;
}

export interface IconRegistry {
    ai: any;
    leadership: any;
    techStack: any;
}
