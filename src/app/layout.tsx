import type { Metadata } from 'next'
import { Inter,Roboto_Serif } from 'next/font/google'
import './globals.css'

const inter = Roboto_Serif({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zouhair Mkassmi ',
  description: 'Un développeur Backend qualifié possédant une vaste expérience dans le développement d\'applications Web robustes et évolutives. Maîtrisant Java, Spring Boot et Kubernetes. Mon expertise technique comprend une solide maîtrise des pratiques CI/CD utilisant Gitlab, Docker et Kubernetes, ainsi qu\'une compréhension approfondie de la gestion de bases de données avec MySQL, PostgreSQL et Liquibase. Maîtrise du français, de l\'anglais. L\'arabe est mon langue maternelle. Je suis apte à travailler dans des environnements multiculturels et à communiquer efficacement avec des équipes diverses. Mon parcours professionnel est marqué par un engagement à fournir du code de haute qualité et des solutions innovantes adaptées aux besoins des clients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-purisa">{children}</body>
    </html>
  )
}