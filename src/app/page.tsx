"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  Bars3Icon,
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { ServerIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Présentation", href: "#presentation" },
  { name: "Éducation et Expérience ", href: "#education-experience" },
  { name: "Autres Projets", href: "#projets" },
  { name: "Outils", href: "#outils" },
  { name: "Articles", href: "#articles" },
  { name: "Evenements ", herf: "#evenements" },
];

const features = [
  {
    name: "2016 - 2019 École Nationale d'ingénieur de Sfax   ",
    description: " Sfax,Tunisie",
  },
  {
    name: "2014 - 2016 Institut Préparatoire aux Études d'Ingénieur",
    description: "Nabeul,Tunisie",
  },
  {
    name: "2013 - 2014 Institut Préparatoire aux Études d'Ingénieur",
    description: "kairouen,Tunisie",
  },
  {
    name: "2009 - 2013 Lycéé Beni khiar (Baccalauréat Mathématiques )",
    description: "Nabeul,Tunisie",
  },
];

const experience = [
  {
    date: "Mars 2022 - aujourd'hui",
    name: " Docaposte-MyGreffe",
    description:
      "Une mission de refonte de deux applications web dans le domaine de la justice.Son backend est développé avec Spring Boot et Jboss.Il contient plus de 6 modules MavenFeign Client. Les modules étaient tout aussi indépendants les uns des autres.",
  },
  {
    date: "Février 2022 ",
    name: "Dotter-Téléréhapp",
    description:
      "Une application conçue pour le secteur de la santé, son back-end développé avec Java Spring Boot.Conception et génération des entités, services et endpoints pour l'application mobile / Back-officeSupervision / revue de code pour une partie des endpointsIntégration Twilio pour la visioconférenceMise en place de CI/CD sur GitHub",
  },
  {
    date: "Decembre 2021- Janvier 2022 ",
    name: "Yathiq",
    description:
      "Une plateforme d'entrepreneurs en ligne qui vous permet de trouver le meilleur entrepreneur en fonction de vos besoins de recherche spécifiques (nom, mots-clés, catégorie, ...). Vous pouvez demander des devis facilement et obtenir les meilleures recommandations adaptées à vos besoins.Le client ne souhaitait pas utiliser un fournisseur externe pour l'aspect recherche du projet, même s'il existe de nombreux types de critères de filtrage différents et qu'il existe un classement des listes à définir en fonction des critères de recherche. Au lieu de cela, le client souhaitait que nous utilisions une requête SQL pour effectuer cette action. C’était un grand défi, mais nous avons réussi à le surmonter et à trouver une solution qui respectait les souhaits du client.Il a été développé avec React et Spring Boot.Le projet a été généré avec JHipster et nous utilisons Liquibase pour la migration de bases de données.",
  },
];
const experience2 = [
  {
    date: "Novembre 2021",
    name: "MyGreffe-Keycloack",
    description:
      "Mise en place d'un module d'authentification spécifique qui est intégré à un serveur Keycloak.Ce plugin appelle une API externe pour effectuer une authentification. Après une authentification réussie, les utilisateurs sont également authentifiés auprès de Keycloak, ce qui leur permet d'accéder à d'autres applications qui utilisent Keycloak comme application de gestion des utilisateurs. Ce plugin a été développé avec Jboss.",
  },
  {
    date: "Juillet-October 2021",
    name: "Eradah ",
    description:
      "Une plateforme bancaire en ligne développée avec Spring Boot contenant plus de 10 modules Maven fonctionnant avec un client Feign appelant un système bancaire mondial et d'autres API. Les modules étaient aussi indépendants que possible les uns des autres, fonctionnant avec des interfaces, et la plupart utilisaient un Workflow Manager (Camunda).Le code a été testé Quality-Gate par Sonar Cloud avec un taux de couverture de 80 %.",
  },
  {
    date: "Février - Juin 2021 ",
    name: "Celyrop",
    description:
      "Projet devops, nous avons déployé plusieurs applications (Keycloak, Grafana, Minio, Saagie , RStduio ....) sur un cluster Kubernetes (k8s). Nous avons utilisé Keycloak comme application de gestion des utilisateurs et ajouté le SSO au reste des applications.",
  },
  {
    date: "Janvier 2021 ",
    name: "KoalaME",
    description:
      "Un outil comptable destiné aux prestataires de services indépendants pour les aider à gérer leurs finances. Développé avec Angular et Spring Boot. Le projet a été généré avec Jhipster et nous utilisons Liquibase pour la migration de bases de données.",
  },
];
const experience3 = [
  {
    date: "Decembre 2020",
    name: " Kynaps",
    description:
      "Un projet DevOps. Nous avons déployé l'application Saagie sur un cluster Kubernetes(k8s).",
  },
  {
    date: "Novembre 2020",
    name: " Septime",
    description:
      "Une application pour une auto-école développée avec Laravel. Travail sur l'intégration de l'API YouSign pour gérer les documents électroniques Sigingin.",
  },

  {
    date: "September - October  2020 ",
    name: "Mernard",
    description:
      "Une web app destinée aux opticiens pour les aider à gérer les ventes, les commandes et les produits. Développé avec Angular et Spring Boot. Le projet a été généré avec Jhipster et nous utilisons Liquibase pour la migration de bases de données.",
  },

  {
    date: "Juillet - Août 2020",
    name: " Saagie",
    description:
      "Développement d'un plugin pour gérer les importations de Jobs et de Pipelineset exporte d'un projet à un autre sur la plateforme Saagie. Pour créer le plugin, nous avons créé un projet Gradle et utilisé Kotlin comme langage de programmation",
  },
  {
    date: "Mai- Juin 2020",
    name: " Eradah ",
    description:
      "Une plateforme bancaire en ligne développée avec Spring Boot contenant plus de 10 modules Maven fonctionnant avec un client Feign appelant un système bancaire mondial et d'autres API. Les modules étaient aussi indépendants que possible les uns des autres, fonctionnant avec des interfaces, et la plupart utilisaient un Workflow Manager (Camunda).Le code a été testé Quality-Gate par Sonar Cloud avec un taux de couverture de 80 %.",
  },
  {
    date: "Mars - Avril 2020 ",
    name: "Graneet ",
    description:
      "Une application développée avec React et NestJS pour la gestion de chantiers, destinée à leurs encadrants.",
  },
  {
    date: "Février - Mars 2020",
    name: " WalkUnited",
    description:
      "Une application mobile de comptage de pas qui permet aux utilisateurs de faire des dons.Il est développé avec React Native, React et Spring Boot.Le backoffice du projet a été généré avec Jhipster et nous utilisons Liquibase pour la migration des bases de données.",
  },
  {
    date: "Novembre 2019  - Janvier 2020 ",
    name: "Yoome",
    description:
      "Une application mobile pour commander des boissons dans les bars et discuter entre utilisateurs. Il est développé avec React, React Native et Spring Boot.Le backoffice du projet a été généré avec Jhipster et nous utilisons Liquibase pour la migration des bases de données.",
  },
];

const tools = [
  {
    name: "Java 8+",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    link: "https://github.com/topics/java",
  },
  {
    name: "Spring Boot",
    icon: "https://img.icons8.com/color/48/000000/spring-logo.png",
    link: "https://github.com/topics/spring-boot",
  },
  {
    name: "Jboss",
    icon: "https://img.icons8.com/color/48/000000/jboss.png",
    link: "https://www.jboss.org/",
  },
  {
    name: "Kotlin",
    icon: "https://img.icons8.com/color/48/000000/kotlin.png",
    link: "https://github.com/topics/kotlin",
  },
  {
    name: "Laravel",
    icon: "https://img.icons8.com/color/48/000000/laravel.png",
    link: "https://github.com/topics/laravel",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    link: "https://github.com/topics/javascript",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    link: "https://github.com/topics/nodejs",
  },
  {
    name: "NestJS",
    icon: "https://img.icons8.com/color/48/000000/nestjs.png",
    link: "https://github.com/topics/nestjs",
  },
  {
    name: "Maven",
    icon: "https://img.icons8.com/color/48/000000/apache-maven.png",
    link: "https://maven.apache.org/",
  },
  {
    name: "Gradle",
    icon: "https://img.icons8.com/color/48/000000/gradle.png",
    link: "https://gradle.org/",
  },
  {
    name: "Keycloak",
    icon: "https://img.icons8.com/color/48/000000/keycloak.png",
    link: "https://www.keycloak.org/",
  },
  {
    name: "GitLab CI/CD",
    icon: "https://img.icons8.com/color/48/000000/gitlab.png",
    link: "https://docs.gitlab.com/ee/ci/",
  },
  {
    name: "Docker",
    icon: "https://img.icons8.com/color/48/000000/docker.png",
    link: "https://github.com/topics/docker",
  },
  {
    name: "Kubernetes",
    icon: "https://img.icons8.com/color/48/000000/kubernetes.png",
    link: "https://github.com/topics/kubernetes",
  },
  {
    name: "MySQL",
    icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    link: "https://github.com/topics/mysql",
  },
  {
    name: "PostgreSQL",
    icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
    link: "https://github.com/topics/postgresql",
  },
  {
    name: "Liquibase",
    icon: "https://img.icons8.com/color/48/000000/liquibase.png",
    link: "https://www.liquibase.org/",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
    link: "https://github.com/topics/react",
  },
  {
    name: "Angular",
    icon: "https://img.icons8.com/color/48/000000/angularjs.png",
    link: "https://github.com/topics/angular",
  },
];
const posts = [
  {
    id: 3,
    title: "Team Building ",
    href: "#",
    description: "",
    imageUrl: "/DSC00971.jpg",
    date: " 2022",
    author: {
      name: "BS/CS ",
      imageUrl: "/bs.jpeg",
    },
  },
  {
    id: 2,
    title: "Une journée de conférences pour le développement.",
    href: "#",
    description: "",
    imageUrl: "/462539328_1072518807789846_6687237295781146261_n.jpg",
    date: " 6 of June, 2023",
    author: {
      name: "Codeurs en seine",
      imageUrl: "/social.jpg",
    },
  },

  {
    id: 1,
    title: "Partager des connaissances en informatique ",
    href: "#",
    description: "",
    imageUrl: "/441523264_792984792574339_5606910239835808855_n.jpg",
    date: " 7 of June, 2024",
    author: {
      name: "Fork it",
      imageUrl: "/forkit.png",
    },
  },
];
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=40",
  ];

  // Changer l'image toutes les 10 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="bg-blue-500 min-h-screen">
      <div className="relative h-screen w-full ">
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(70%)",
              }}
            />
          ))}
        </div>

        <header className="absolute inset-x-0 top-0 z-50">
          <div className="mx-auto max-w-7xl">
            <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
              <nav
                aria-label="Global"
                className="flex items-center justify-between lg:justify-start"
              >
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="whitespace-nowrap text-sm font-semibold leading-6 text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-4 py-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx- block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700"
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Salut, c'est MKASSMI Zouhair
          </h1>
          <p className="mt-6 text-lg leading-8">
            Développeur Backend et DevOps
          </p>
          <div className="mt-10">
            <a
              href="mailto:zouhair.mkassmi1@gmail.com"
              className="rounded-md bg-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div
        id="presentation"
        className="bg-gradient-to-r from-gray-900 to-blue-950 py-8 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-4xl px-6 pb-9 pt-2 sm:px-12 lg:max-w-3xl lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 -mt-4">
                <img
                  alt=""
                  src="/DSC01311.jpeg"
                  className="brightness-140 rounded-t-2xl rounded-b-2xl"
                />
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-white lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white-200 sm:text-4xl">
                  Salut !
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6">
                    C'est Zouhair Mkassmi, un développeur Backend avec{" "}
                    <b>5 ans d’expérience</b> dans le développement
                    d’applications Web. Expert en <b>Java</b>,{" "}
                    <b>Spring Boot</b>, <b>Kubernetes</b> et <b>CI/CD</b> avec
                    Gitlab, <b>Docker</b>. J’ai mené des projets dans la santé,
                    la justice et les plateformes en ligne. Je maîtrise{" "}
                    <b>MySQL</b>, <b>PostgreSQL</b>, et{" "}
                    <b>la gestion des migrations avec Liquibase</b>. Trilingue :
                    français, anglais, arabe. Adaptable aux environnements
                    multiculturels et axé sur la qualité du code.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex">
                <a
                  href="/zouhair_mkassmi_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold leading-7 text-[rgb(63,179,216)] hover:text-cyan-500"
                >
                  Télécharger le CV <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-gradient-to-r from-gray-900 to-blue-950 py-2 sm:py-6">
        <div className="mx-auto max-w-8xl md:px-2 lg:px-28">
          <div
            id="education-experience"
            className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:items-start"
          >
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-1">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                    <AcademicCapIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Éducation
                  </h2>
                </div>
                <dl className="mt-4 max-w-xl space-y-4 text-base leading-7 text-white lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
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
                  <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                    <BriefcaseIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Expérience
                  </h2>
                </div>
                <dl className="mt-4 max-w-xl space-y-4 text-base leading-7 text-white lg:max-w-none">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-0">
                      <dt className="inline font-semibold text-white">
                        <span className="mr-2 text-gray-400">{exp.date}</span>{" "}
                        <span className="font-bold">{exp.name}</span>{" "}
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
          <div
            id="projets"
            className="grid grid-cols-1 gap-x-8 gap-y-18 lg:grid-cols-2 lg:items-start mt-24"
          >
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
                    <BriefcaseIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Autres Projets
                  </h2>
                </div>
                <dl className="mt-4 max-w-xl space-y-4 text-base leading-7 text-white lg:max-w-none">
                  {experience2.map((experience2) => (
                    <div key={experience2.name} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <span className="mr-2 text-gray-400">
                          {experience2.date}
                        </span>{" "}
                        <span className="font-bold">{experience2.name}</span>{" "}
                      </dt>
                      <dd>{experience2.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="px-6 lg:px-0 lg:pr-2 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <div className="flex items-center space-x-3"></div>
                <dl className="mt-12 max-w-xl space-y-4 text-base leading-7 text-white lg:max-w-none">
                  {experience3.map((exp, index) => (
                    <div key={index} className="relative pl-0">
                      <dt className="inline font-semibold text-white">
                        <span className="mr-2 text-gray-400">{exp.date}</span>{" "}
                        <span className="font-bold">{exp.name}</span>{" "}
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
      <div
        id="outils"
        className="overflow-hidden bg-gradient-to-r from-gray-900 to-blue-950 py-6 sm:py-10"
      >
        <div className="mx-auto max-w-8xl md:px-2 lg:px-28">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
              <ServerIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Outils
            </h2>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 text-white hover:opacity-80 transition-opacity"
              >
                <img src={tool.icon} alt={tool.name} className="h-10 w-10" />
                <span className="mt-2 text-center">{tool.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-gradient-to-r from-gray-900 to-blue-950 py-6 sm:py-10">
        <div id="evenements" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
              <CalendarIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Événements
              </h2>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  alt=""
                  src={post.imageUrl}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-400">{post.date}</p>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="bg-gradient-to-r from-gray-900 to-blue-950 py-10 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contact
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Vous pouvez me contacter via les informations ci-dessous
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3 text-white text-lg">
            <div className="flex items-center">
              <PhoneIcon className="h-8 w-8 text-cyan-500" />
              <span className="ml-4">+216 05301670943</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-8 w-8 text-cyan-500" />
              <span className="ml-4">zouhair.mkassmi1@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-8 w-8 text-cyan-500" />
              <span className="ml-4">Nabeul, Tunisie</span>
            </div>
          </div>

          <div className="mt-12">
            <iframe
              title="Google Map Nabeul"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5036581466344!2d10.73584201533501!3d36.4483431829451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302939aa10758c1%3A0x2b33f9fe5301cace!2sNabeul!5e0!3m2!1sen!2stn!4v1692459463701!5m2!1sen!2stn"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto flex flex-col items-center space-y-6">
          <div className="flex space-x-6 text-white">
            <a
              href="https://www.linkedin.com/in/zouhair-mkassmi-759746131/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 19.5h-2.75v-10.75h2.75v10.75zm-1.375-12.25c-.895 0-1.625-.729-1.625-1.625s.73-1.625 1.625-1.625 1.625.729 1.625 1.625-.729 1.625-1.625 1.625zm13.125 12.25h-2.75v-5.617c0-1.338-.027-3.063-1.875-3.063-1.876 0-2.163 1.464-2.163 2.973v5.707h-2.75v-10.75h2.636v1.47h.037c.366-.69 1.26-1.417 2.592-1.417 2.77 0 3.283 1.824 3.283 4.197v6.5z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/zouhairmkassmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.073c0-5.518-4.477-9.995-9.995-9.995s-9.995 4.477-9.995 9.995c0 4.991 3.657 9.128 8.438 9.92v-7.028h-2.54v-2.892h2.54v-2.204c0-2.507 1.492-3.892 3.776-3.892 1.095 0 2.238.194 2.238.194v2.459h-1.261c-1.242 0-1.628.771-1.628 1.562v1.881h2.773l-.444 2.892h-2.329v7.028c4.781-.792 8.438-4.929 8.438-9.92z" />
              </svg>
            </a>
            <a
              href="mailto:zouhair.mkassmi1@gmail.com"
              className="text-cyan-500 hover:text-cyan-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l-11.99-6.713h23.98l-11.99 6.713zm-12-1.885v9.172l8.377-4.803-8.377-4.369zm9.227 5.282l-9.227 5.295h18.455l-9.227-5.295-1.227-.707-1.227.707zm6.396-5.752l8.377 4.369v-9.172l-8.377 4.803z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400">
            © 2024 Zouhair Mkassmi. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
