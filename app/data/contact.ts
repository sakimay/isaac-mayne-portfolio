import type { ContactLink } from '~/types'

export function useContactLinks(): ContactLink[] {
  const { public: { email, linkedinUrl, githubUrl } } = useRuntimeConfig()

  return [
    {
      id: 'email',
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      icon: 'mail',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: linkedinUrl.replace(/^https?:\/\//, ''),
      href: linkedinUrl,
      icon: 'linkedin',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: githubUrl.replace(/^https?:\/\//, ''),
      href: githubUrl,
      icon: 'github',
    },
  ]
}
