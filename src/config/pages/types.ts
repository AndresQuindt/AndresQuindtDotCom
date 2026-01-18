import type { translationRegistry } from "@/i18n/utils";

export type Language = 'es' | 'en';

export interface SectionConfig {
    id: string;
    componentName: keyof ComponentRegistry;
    translationKey: keyof typeof translationRegistry;
    props?: Record<string, any>;
}

export type PageStructure = SectionConfig[];

export interface ComponentRegistry {
    Hero: any;
    About: any;
    SkillsGrid: any;
    ExperienceTimeline: any;
    Footer: any;
    MenuToggle: any;
    NavOverlay: any;
}

export interface SectionProps<T = any> {
    lang: Language;
    translations: T;
}
