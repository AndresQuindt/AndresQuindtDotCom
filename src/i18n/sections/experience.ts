import type { TranslationRecord, ExperienceTranslations } from '@/i18n/types';

export const experience: TranslationRecord<ExperienceTranslations> = {
    es: {
        label: '// Experiencia',
        title: 'Así me construí',
        current: {
            badge: 'Current Role',
            role: 'AI Team Tech Lead',
            company: 'Axoft',
            date: '08/2025 - Actualidad',
            bullets: [
                'Diseñé e implementé el asistente conversacional <b>TangoAI Chat</b> con un sistema multiagente dinámico.',
                'Definí y diseñé soluciones abstractas para desarrollar Agentes y otros productos de IA que redujeron el costo de aprendizaje e implementación para otros equipos de desarrollo y mi propio equipo.',
                'Desarrollé un Agente que consume datos y los analiza a través de SQL con validación de seguridad (whitelist) y RAG para reducción de alucinaciones.'
            ]
        },
        positions: [
            {
                role: 'Desarrollador Framework e I+D',
                company: 'Axoft',
                date: '11/2022 - 08/2025',
                bullets: [
                    'Continué el desarrollo del Core Framework propio de la compañía para agregar capacidades al sistema y reducir el tiempo de desarrollo de hasta 15 equipos.',
                    'Implementé diferentes soluciones y controles que surgían de la necesidad de los equipos funcionales que implementaban procesos específicos con lógica de negocio.',
                    'Me desempeñé como líder técnico y mentor del equipo de desarrollo, mantuve un perfil purista en escalabilidad, mantenibilidad y buenas prácticas.',
                    'Investigué soluciones, propuse ideas creativas y tomé decisiones clave sobre el Framework, por ejemplo la decisión de usar Semantic Kernel y luego migrarlo a Agent Framework.'
                ]
            },
            {
                role: 'Desarrollador .NET y Delphi',
                company: 'Resumido',
                date: '2016 - 2022',
                bullets: [
                    'Migré consultas SQL en Delphi a .NET Core utilizando LINQ-to-SQL y el Framework de la empresa, momento donde empecé a destacar por interesarme e interiorizarme en el funcionamiento del core.',
                    'Mantuve el producto Restó en Delphi e implementé integraciones clave con diferentes medios de pago.',
                    'Desarrollé un sistema de gestión y facturación para una empresa de sector farmacéutico donde tuve contacto directo con clientes.'
                ]
            }
        ]
    },
    en: {
        label: '// Experience',
        title: 'How I built my career',
        current: {
            badge: 'Current Role',
            role: 'AI Team Tech Lead',
            company: 'Axoft',
            date: '08/2025 - Present',
            bullets: [
                'Designed and implemented the <b>TangoAI Chat</b> conversational assistant using a dynamic multi-agent system.',
                'Defined and designed abstract solutions for developing Agents and AI products, reducing the learning curve and implementation costs for multiple development teams.',
                'Developed an Agent capable of consuming and analyzing data via SQL, featuring security validation (whitelisting) and RAG to minimize hallucinations.'
            ]
        },
        positions: [
            {
                role: 'Framework & R&D Developer',
                company: 'Axoft',
                date: '11/2022 - 08/2025',
                bullets: [
                    'Evolved the company\'s proprietary Core Framework to enhance system capabilities and optimize development cycles for over 15 teams.',
                    'Implemented custom solutions and controls tailored to functional teams managing complex business logic.',
                    'Served as Tech Lead and mentor, maintaining an uncompromising focus on scalability, maintainability, and best practices.',
                    'Researched and proposed creative solutions, making key architectural decisions such as adopting Semantic Kernel and its subsequent migration to Agent Framework.'
                ]
            },
            {
                role: '.NET & Delphi Developer',
                company: 'Resumido',
                date: '2016 - 2022',
                bullets: [
                    'Migrated legacy Delphi SQL queries to .NET Core using LINQ-to-SQL, focusing on deep integration with the internal framework.',
                    'Maintained the Restó product in Delphi and implemented critical payment gateway integrations.',
                    'Developed a management and billing system for the pharmaceutical sector, managing direct client relationships.'
                ]
            }
        ]
    }
} as const;
