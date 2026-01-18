import type { TranslationRecord, SkillsTranslations } from '@/i18n/types';

export const skills: TranslationRecord<SkillsTranslations> = {
    es: {
        label: '// Habilidades',
        title: 'Estas son mis herramientas',
        modules: [
            {
                id: '01',
                title: 'Aplicaciones de IA',
                items: ['RAG', 'Agentes & Orquestación', 'Integraciones de LLM', 'Prompt Engineering'],
                iconName: 'ai'
            },
            {
                id: '02',
                title: 'Liderazgo',
                items: ['Diseño de sistemas', 'Mentoring', 'Feature Management', 'Roadmapping técnico'],
                iconName: 'leadership'
            },
            {
                id: '03',
                title: 'Tech Stack',
                items: ['.NET Core (C#)', 'SQL Server', 'Node', 'Angular/React'],
                iconName: 'techStack'
            }
        ]
    },
    en: {
        label: '// Skills',
        title: 'These are my tools',
        modules: [
            {
                id: '01',
                title: 'AI Applications',
                items: ['RAG', 'Agents & Orchestration', 'LLM Integrations', 'Prompt Engineering'],
                iconName: 'ai'
            },
            {
                id: '02',
                title: 'Leadership',
                items: ['System Design', 'Mentoring', 'Feature Management', 'Technical Roadmapping'],
                iconName: 'leadership'
            },
            {
                id: '03',
                title: 'Tech Stack',
                items: ['.NET Core (C#)', 'SQL Server', 'Node', 'Angular/React'],
                iconName: 'techStack'
            }
        ]
    }
} as const;
