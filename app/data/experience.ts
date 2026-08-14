import type { OtherExperienceEntry, WorkExperienceEntry } from '~/types'

export const workExperience: WorkExperienceEntry[] = [
  {
    id: 'rock-runners',
    role: 'Fundador',
    company: 'Rock Runners · Autónomo',
    location: 'Sant Cugat del Vallès, Cataluña, España · En remoto',
    period: 'Ago. 2024 - Actualidad',
    highlights: [
      'Fundación y desarrollo de Rock Runners, una comunidad para corredores con calendario de carreras, rankings, estadísticas y artículos especializados.',
      'Diseño y desarrollo full-stack de la plataforma con Next.js, React y Supabase (PostgreSQL).',
      'Gestión integral del proyecto como propietario: producto, tecnología y crecimiento de la comunidad.',
    ],
  },
  {
    id: 'global-planing-solutions',
    role: 'Desarrollador web Fullstack',
    company: 'Global Planing Solutions',
    location: 'Barcelona',
    period: 'Abr. 2025 - Actualidad',
    highlights: [
      'Desarrollo de aplicaciones web utilizando Vue.js y Node.js, asegurando una arquitectura moderna y escalable.',
      'Implementación de pruebas unitarias y de integración con Mocha para garantizar la calidad del código y la fiabilidad de las aplicaciones.',
      'Desarrollo de aplicaciones móviles nativas en Swift y Java, adaptando soluciones a las necesidades específicas de cada cliente.',
      'Colaboración en un equipo ágil, participando en revisiones de código y aportando mejoras continuas al proceso de desarrollo.',
      'Integración de Capacitor para crear aplicaciones híbridas, permitiendo el despliegue en múltiples plataformas con un único código base.',
    ],
  },
  {
    id: 'depatro-sl',
    role: 'Desarrollador web Fullstack',
    company: 'Depatro SL (Hockerty/Sumissura)',
    location: 'Sant Cugat del Vallés',
    period: 'Ene. 2022 - Abr. 2025',
    highlights: [
      'Desarrollo y mantenimiento de aplicaciones web utilizando un framework propio basado en PHP.',
      'Implementación de soluciones de frontend utilizando Smarty, JavaScript y jQuery para mejorar la experiencia del usuario.',
      'Diseño y optimización de bases de datos MySQL para garantizar un rendimiento eficiente y escalabilidad.',
      'Refactorización de código existente para mejorar la legibilidad, rendimiento y mantenibilidad del software.',
      'Colaboración en un equipo ágil, participando en revisiones de código y aportando mejoras continuas al proceso de desarrollo.',
      'Integración de servicios de AWS, como S3 y CloudFront, para optimizar el almacenamiento y la distribución de contenido.',
    ],
  },
  {
    id: 'rica-design',
    role: 'Desarrollador web Fullstack',
    company: 'Rica Design',
    location: 'Barcelona',
    period: 'Ene. 2020 - Ene. 2022',
    highlights: [
      'Desarrollo de aplicaciones web a medida con Laravel en el backend y Vue.js en el front, asegurando una arquitectura moderna y escalable.',
      'Implementación de pipelines de CI/CD para automatizar el proceso de despliegue y garantizar entregas continuas y de alta calidad.',
      'Realización de pruebas automatizadas con Cypress, mejorando la cobertura de pruebas y la fiabilidad del software.',
      'Colaboración estrecha con equipos multidisciplinarios para optimizar el flujo de trabajo y resolver problemas técnicos de manera efectiva.',
    ],
  },
]

export const otherExperience: OtherExperienceEntry[] = [
  {
    id: 'tecnico-soporte',
    role: 'Técnico de soporte informático',
    period: 'Sept. 2020 - Sept. 2021',
    description: 'Soporte a usuarios, mantenimiento de equipos y colaboración en proyectos educativos.',
  },
  {
    id: 'profesor-natacion',
    role: 'Profesor de natación',
    period: '2008 - 2021',
    description: 'Enseñanza y organización de actividades, desarrollo de liderazgo y trabajo en equipo.',
  },
]
