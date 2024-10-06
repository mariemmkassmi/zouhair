'use client';
import { useEffect, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { AcademicCapIcon,BriefcaseIcon, Bars3Icon } from '@heroicons/react/24/outline';
import {ServerIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Présentation', href: '#' },
  { name: 'Éducation', href: '#' },
  { name: 'Expérience', href: '#' },
  { name: 'Outils', href: '#' },
  { name: 'Articles', href: '#' },
];

const features = [
  {
    name: '2016 - 2019 École Nationale d\'ingénieur de Sfax   ',
    description:' Sfax,Tunisie'
  },
  {
    name: '2014 - 2016 Institut Préparatoire aux Études d\'Ingénieur',
    description: 'Nabeul,Tunisie',
  },
  {
    name: '2013 - 2014 Institut Préparatoire aux Études d\'Ingénieur',
    description: 'kairouen,Tunisie', 
  },
  {
    name: '2009 - 2013 Lycéé Beni khiar (Baccalauréat Mathématiques )',
    description: 'Nabeul,Tunisie'
  },
];

const experience = [
  {
    name: 'Mars 2022 - aujourd\'hui Docaposte-MyGreffe ',
    description:'Une mission de refonte de deux applications web dans le domaine de la justice.Son backend est développé avec Spring Boot et Jboss.Il contient plus de 6 modules MavenFeign Client. Les modules étaient tout aussi indépendants les uns des autres.'
  },
  {
    name: 'Février 2022 Dotter-Téléréhapp',
    description: 'Une application conçue pour le secteur de la santé, son back-end développé avec Java Spring Boot.Conception et génération des entités, services et endpoints pour l\'application mobile / Back-officeSupervision / revue de code pour une partie des endpointsIntégration Twilio pour la visioconférenceMise en place de CI/CD sur GitHub',
  },
  {
    name: 'Decembre 2021- Janvier 2022 Yathiq',
    description: 'Une plateforme d\'entrepreneurs en ligne qui vous permet de trouver le meilleur entrepreneur en fonction de vos besoins de recherche spécifiques (nom, mots-clés, catégorie, ...). Vous pouvez demander des devis facilement et obtenir les meilleures recommandations adaptées à vos besoins.Le client ne souhaitait pas utiliser un fournisseur externe pour l\'aspect recherche du projet, même s\'il existe de nombreux types de critères de filtrage différents et qu\'il existe un classement des listes à définir en fonction des critères de recherche. Au lieu de cela, le client souhaitait que nous utilisions une requête SQL pour effectuer cette action. C’était un grand défi, mais nous avons réussi à le surmonter et à trouver une solution qui respectait les souhaits du client.Il a été développé avec React et Spring Boot.Le projet a été généré avec JHipster et nous utilisons Liquibase pour la migration de bases de données.', 
  }]
  const experience2=[
  {
    name: 'Novembre 2021',
    description: 'Mise en place d\'un module d\'authentification spécifique qui est intégré à un serveur Keycloak.Ce plugin appelle une API externe pour effectuer une authentification. Après une authentification réussie, les utilisateurs sont également authentifiés auprès de Keycloak, ce qui leur permet d\'accéder à d\'autres applications qui utilisent Keycloak comme application de gestion des utilisateurs. Ce plugin a été développé avec Jboss.',
  },
  {
    name: 'Juillet-October 2021 Eradah ',
    description: 'Une plateforme bancaire en ligne développée avec Spring Boot contenant plus de 10 modules Maven fonctionnant avec un client Feign appelant un système bancaire mondial et d\'autres API. Les modules étaient aussi indépendants que possible les uns des autres, fonctionnant avec des interfaces, et la plupart utilisaient un Workflow Manager (Camunda).Le code a été testé Quality-Gate par Sonar Cloud avec un taux de couverture de 80 %.',
  },
  {
    name: 'Février - Juin 2021 Celyrop',
    description: 'Projet devops, nous avons déployé plusieurs applications (Keycloak, Grafana, Minio, Saagie , RStduio ....) sur un cluster Kubernetes (k8s). Nous avons utilisé Keycloak comme application de gestion des utilisateurs et ajouté le SSO au reste des applications.',
  },
  {
    name: 'Janvier 2021 KoalaME',
    description: 'Un outil comptable destiné aux prestataires de services indépendants pour les aider à gérer leurs finances. Développé avec Angular et Spring Boot. Le projet a été généré avec Jhipster et nous utilisons Liquibase pour la migration de bases de données.'
  },
  ]
  const experience3=[{
    name: 'Decembre 2020 Kynaps',
    description: 'Un projet DevOps. Nous avons déployé l\'application Saagie sur un cluster Kubernetes(k8s).'
  },
  {
    name: 'Novembre 2020 Septime',
    description: 'Une application pour une auto-école développée avec Laravel. Travail sur l\'intégration de l\'API YouSign pour gérer les documents électroniques Sigingin.'
  },

  {
    name: 'September - October  2020 Mernard',
    description: 'Une web app destinée aux opticiens pour les aider à gérer les ventes, les commandes et les produits. Développé avec Angular et Spring Boot. Le projet a été généré avec Jhipster et nous utilisons Liquibase pour la migration de bases de données.'
  },

  {
    name: 'Juillet - Août 2020 Saagie',
    description: 'Développement d\'un plugin pour gérer les importations de Jobs et de Pipelineset exporte d\'un projet à un autre sur la plateforme Saagie. Pour créer le plugin, nous avons créé un projet Gradle et utilisé Kotlin comme langage de programmation'
  },
  {
    name: 'Mai- Juin 2020 Eradah ',
    description: 'Une plateforme bancaire en ligne développée avec Spring Boot contenant plus de 10 modules Maven fonctionnant avec un client Feign appelant un système bancaire mondial et d\'autres API. Les modules étaient aussi indépendants que possible les uns des autres, fonctionnant avec des interfaces, et la plupart utilisaient un Workflow Manager (Camunda).Le code a été testé Quality-Gate par Sonar Cloud avec un taux de couverture de 80 %.',
  },
  {
    name: 'Mars - Avril 2020 Graneet ',
    description: 'Une application développée avec React et NestJS pour la gestion de chantiers, destinée à leurs encadrants.',
  },
  {
    name: 'Février - Mars 2020 WalkUnited',
    description: 'Une application mobile de comptage de pas qui permet aux utilisateurs de faire des dons.Il est développé avec React Native, React et Spring Boot.Le backoffice du projet a été généré avec Jhipster et nous utilisons Liquibase pour la migration des bases de données.',
  },
  {
    name: 'Novembre 2019  - Janvier 2020 Yoome',
    description: 'Une application mobile pour commander des boissons dans les bars et discuter entre utilisateurs. Il est développé avec React, React Native et Spring Boot.Le backoffice du projet a été généré avec Jhipster et nous utilisons Liquibase pour la migration des bases de données.',
  }
  ]
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=40'
];

  // Changer l'image toutes les 10 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
    <div className="relative h-screen w-full bg-gray-900">
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav aria-label="Global" className="flex items-center justify-between lg:justify-start">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 rounded-md p-2.5 text-white lg:hidden"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
              <div className="hidden lg:ml-40 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Salut, c'est MKASSMI Zouhair</h1>
        <p className="mt-6 text-lg leading-8">Développeur Backend et DevOps</p>
        <div className="mt-10">
          <a
            href="mailto:zouhair.mkassmi1@gmail.com"
            className="rounded-md bg-[rgb(63,179,216)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
          <div className="relative overflow-hidden rounded-3xl px-6 pb-9 pt-10 shadow-2xl sm:px-12 lg:max-w-3xl lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
  <img
    alt=""
    src="/DSC01311.jpeg"
    className=" brightness-140" 
  />
  
</div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-800 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
               Salut !
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                C'est Zouhair Mkassmi, un développeur Backend avec <b>5 ans d’expérience</b> dans le développement d’applications Web. Expert en <b>Java</b> , <b>Spring Boot</b>, <b>Kubernetes</b> et <b>CI/CD</b> avec Gitlab, <b>Docker</b>. J’ai mené des projets dans la santé, la justice et les plateformes en ligne. Je maîtrise <b>MySQL</b>, <b>PostgreSQL</b>, et <b>la gestion des migrations avec Liquibase</b>. Trilingue : français, anglais, arabe. Adaptable aux environnements multiculturels et axé sur la qualité du code.
                </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <a href="/zouhair_mkassmi_cv.pdf"  target="_blank"
    rel="noopener noreferrer"  className="text-base font-semibold leading-7 text-[rgb(63,179,216)]">
              Télécharger le CV <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden bg-white py-2 sm:py-6">
    <div className="mx-auto max-w-8xl md:px-2 lg:px-28">
  <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:items-start">
    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-1">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
        <div className="flex items-center space-x-3">
          <AcademicCapIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Éducation</h2>
        </div>
        <dl className="mt-4 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                {feature.name}
              </dt>
              <dd>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    <div className="px-6 lg:px-0 lg:pr-2 lg:pt-1">
  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
    <div className="flex items-center space-x-3">
      <BriefcaseIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">Expérience</h2>
    </div>
    <dl className="mt-4 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
      {experience.map((exp, index) => (
        <div key={index} className="relative pl-0">
          <dt className="inline font-semibold text-gray-900">
            {exp.name}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed line-clamp-4">
            {exp.description}
          </dd>
        </div>
      ))}
    </dl>
  </div>
</div>


  </div>
  <div className="grid grid-cols-1 gap-x-8 gap-y-18 lg:grid-cols-2 lg:items-start">
    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
        <div className="flex items-center space-x-3">
          <BriefcaseIcon  className="h-8 w-8 text-indigo-600" aria-hidden="true" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Expérience</h2>
        </div>
        <dl className="mt-4 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
          {experience2.map((experience2) => (
            <div key={experience2.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                {experience2.name}
              </dt>
              <dd>{experience2.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    <div className="px-6 lg:px-0 lg:pr-2 lg:pt-4">
  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
    <div className="flex items-center space-x-3">

      <h2 className="h-8 w-8 text-3xl font-bold tracking-tight text-gray-900"></h2>
    </div>
    <dl className="mt-4 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
      {experience3.map((exp, index) => (
        <div key={index} className="relative pl-0">
          <dt className="inline font-semibold text-gray-900">
            {exp.name}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed line-clamp-4">
            {exp.description}
          </dd>
        </div>
      ))}
    </dl>
  </div>
</div>


  </div>
</div>

  </div>
  </div>
  );
}
