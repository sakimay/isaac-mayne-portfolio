import type { ContactLink } from '~/types'

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'isaac@example.com',
    href: 'mailto:isaac@example.com',
    icon: 'mail',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/isaac-mayne',
    href: 'https://linkedin.com/in/isaac-mayne',
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/isaac-mayne',
    href: 'https://github.com/isaac-mayne',
    icon: 'github',
  },
]
