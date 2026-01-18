export const COMPONENT_NAMES = {
    HERO: 'Hero',
    ABOUT: 'About',
    SKILLS_GRID: 'SkillsGrid',
    EXPERIENCE_TIMELINE: 'ExperienceTimeline',
    FOOTER: 'Footer',
    MENU_TOGGLE: 'MenuToggle',
    NAV_OVERLAY: 'NavOverlay',
} as const;

export type ComponentName = typeof COMPONENT_NAMES[keyof typeof COMPONENT_NAMES];
