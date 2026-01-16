// constants/index.ts
import type { Filter } from "@/types/project";

export const FILTERS: Filter[] = [
  {
    id: "web",
    label: "Site web",
    title: "Sites Web & Applications",
    description:
      "Des projets web conçus de bout en bout, de l’architecture technique à l’interface utilisateur, avec un focus sur la performance et l’expérience.",
    projects: [
      {
        name: "Takutaku",
        slug: "Takutaku",
        title: "Takutaku : Le streaming d’animés Japonais",
        type: "Projet de groupe — Formation développeur web",
        stack: ["React", "JavaScript", "Supabase", "Tailwind"],
        description: "Regardez vos animés préférés sur mobile, tablette et PC.",
        image: "/Projet_Takutaku.jpg",

        content: {
          context: {
            title: "Contexte du projet",
            body: [
              "Takutaku est un site web fictif de streaming d’animés japonais, conçu pour proposer une expérience fluide, moderne et accessible sur mobile, tablette et ordinateur.",
              "Le projet s’inspire des usages des grandes plateformes de streaming, tout en mettant l’accent sur la clarté de l’interface et la simplicité de navigation.",
              "Ce projet a été réalisé en groupe dans le cadre de ma formation de développeur web.",
              "L’objectif était de simuler un projet professionnel complet, depuis la conception jusqu’au développement d’une application web fonctionnelle.",
            ],
          },

          goals: {
            title: "Objectifs & intentions",
            list: [
              "Concevoir une application web réaliste et fonctionnelle",
              "Mettre en pratique React dans un projet de taille intermédiaire",
              "Implémenter une authentification utilisateur",
              "Travailler sur une interface inspirée des plateformes de streaming",
            ],
          },

          role: {
            title: "Mon rôle dans le projet",
            list: [
              "Intégration des interfaces avec React",
              "Mise en place du design avec Tailwind CSS",
              "Connexion à Supabase pour l’authentification",
              "Réflexion sur l’expérience utilisateur",
            ],
          },

          stackDetails: {
            title: "Stack technique & choix effectués",
            items: [
              {
                name: "React",
                image: "https://skillicons.dev/icons?i=react",
                description:
                  "Utilisé pour construire une interface dynamique et modulaire.",
              },
              {
                name: "Supabase",
                image: "https://skillicons.dev/icons?i=supabase",
                description:
                  "Choisi pour gérer rapidement l’authentification et la base de données.",
              },
              {
                name: "Tailwind CSS",
                image: "https://skillicons.dev/icons?i=tailwindcss",
                description:
                  "Permet une intégration rapide et cohérente des interfaces.",
              },
              {
                name: "Vercel",
                image: "https://skillicons.dev/icons?i=vercel",
                description:
                  "Utilisé pour héberger et déployer l’application à partir du dépôt Git.",
              },
            ],
          },

          features: {
            title: "Fonctionnalités principales",
            list: [
              "Création de compte et connexion utilisateur",
              "Catalogue d’animés consultable",
              "Ajout d’animés en favoris",
              "Interface responsive",
            ],
          },

          challenges: {
            title: "Défis rencontrés & solutions",
            body: [
              "L’un des principaux défis a été la gestion des données utilisateurs, notamment l’authentification et les informations liées aux favoris.",
              "Une structuration claire des composants React a permis de résoudre cela.",
            ],
          },

          outcome: {
            title: "Résultat final",
            body: [
              "Le projet aboutit à une application fonctionnelle, stable et agréable à utiliser.",
            ],
          },

          learnings: {
            title: "Apprentissages & perspectives",
            body: [
              "Renforcement des compétences en React",
              "Découverte de Supabase dans un projet réel",
              "Amélioration du travail en équipe",
            ],
            next: [
              "Système de recommandations",
              "Gestion avancée de la progression",
            ],
          },
          research: {
            title: "Maquettage & BDD",
            gallery: ["/supabase.png", "/Figma_taku1.png", "/figma_taku2.png"],
          },
        },

        links: {
          name: "Accéder au site",
          url: "https://takutaku-app.vercel.app/",
        },
      },

      {
        name: "Wild Eats",
        slug: "WildEats",
        title: "Wild Eats : Commandez vos repas rapidement et simplement.",
        type: "Projet de groupe — Formation développeur web",
        stack: ["HTML", "CSS", "JavaScript"],
        description: "Commandez vos plats préférés sur place ou à emporter",
        image: "/Projet_Wildeats.jpg",

        links: {
          name: "Accéder au site",
          url: "https://nathandurnerin.github.io/Projet-Wild-Eats/",
        },

        content: {
          context: {
            title: "Contexte du projet",
            body: [
              "Wild Eats est une plateforme de commande de repas en ligne permettant aux utilisateurs de commander sur place ou à emporter via une interface simple et intuitive.",
              "Le projet met l’accent sur la rapidité du parcours utilisateur et la clarté des informations essentielles.",
              "Ce projet a été réalisé en groupe dans le cadre de ma formation de développeur web.",
              "L’objectif était de concevoir un site web fonctionnel sans framework, en utilisant uniquement HTML, CSS et JavaScript.",
            ],
          },

          goals: {
            title: "Objectifs & intentions",
            list: [
              "Comprendre la structuration d’un site web dynamique sans framework",
              "Mettre en place un parcours de commande clair et efficace",
              "Travailler la lisibilité et l’ergonomie d’une interface orientée utilisateur",
              "Apprendre à collaborer sur un projet web en équipe",
            ],
          },

          role: {
            title: "Mon rôle dans le projet",
            list: [
              "Intégration HTML et CSS des différentes pages",
              "Développement de la logique JavaScript côté client",
              "Participation à la conception du parcours utilisateur",
              "Collaboration avec les autres membres du groupe pour assurer la cohérence globale",
            ],
          },

          stackDetails: {
            title: "Stack technique & choix effectués",
            items: [
              {
                name: "HTML",
                image: "https://skillicons.dev/icons?i=html",
                description:
                  "Utilisé pour structurer clairement les pages et les différentes sections de contenu.",
              },
              {
                name: "CSS",
                image: "https://skillicons.dev/icons?i=css",
                description:
                  "Employé pour créer une interface lisible et responsive, adaptée à différents formats d’écran.",
              },
              {
                name: "JavaScript",
                image: "https://skillicons.dev/icons?i=js",
                description:
                  "Utilisé pour gérer les interactions utilisateur et la logique de commande.",
              },
            ],
          },

          features: {
            title: "Fonctionnalités principales",
            list: [
              "Consultation des menus disponibles",
              "Ajout de plats au panier",
              "Gestion du panier côté client",
              "Parcours de commande simple et rapide",
            ],
          },

          challenges: {
            title: "Défis rencontrés & solutions",
            body: [
              "L’un des principaux défis a été la gestion de l’état du panier sans framework.",
              "Nous avons structuré la logique JavaScript de manière claire afin de garantir un comportement fiable et compréhensible.",
            ],
          },

          outcome: {
            title: "Résultat final",
            body: [
              "Wild Eats aboutit à une plateforme fonctionnelle permettant de simuler un parcours de commande complet.",
              "Le site est simple, efficace et respecte les objectifs pédagogiques du projet.",
            ],
          },

          learnings: {
            title: "Apprentissages & perspectives",
            body: [
              "Meilleure compréhension du JavaScript natif",
              "Importance de la clarté dans un parcours utilisateur",
              "Expérience concrète du travail en équipe",
            ],
            next: [
              "Ajout d’un backend pour persister les commandes",
              "Amélioration de l’accessibilité",
              "Optimisation du design pour mobile",
            ],
          },
          research: {
            title: "",
            gallery: ["/"],
          },
        },
      },
      {
        name: "Le Jardin Alsacien",
        slug: "JardinAlsacien",
        title:
          "Le Jardin Alsacien : Commandez des bouquets en région alsacienne",
        type: "Projet de groupe — Formation développeur web",
        stack: ["React", "JavaScript", "Local Storage", "Tailwind"],
        description:
          "Commandez de magnifiques bouquets de fleurs en région Alsacienne.",
        image: "/Projet_Jardin.jpg",

        links: {
          name: "Accéder au site",
          url: "https://strasbouq-client.vercel.app/",
        },

        content: {
          context: {
            title: "Contexte du projet",
            body: [
              "Le Jardin Alsacien est un site de commande de bouquets de fleurs destiné à une clientèle locale en région alsacienne.",
              "Le projet met en avant une expérience simple et chaleureuse, tout en valorisant l’aspect artisanal et local.",
              "Ce projet a été réalisé en groupe dans le cadre de ma formation de développeur web.",
              "L’objectif était de concevoir un site de commande en ligne sans backend complexe, en s’appuyant sur React et le Local Storage.",
            ],
          },

          goals: {
            title: "Objectifs & intentions",
            list: [
              "Créer une interface e-commerce simple et accessible",
              "Mettre en place une gestion de panier côté client",
              "Valoriser une identité locale et artisanale",
              "Travailler sur l’expérience utilisateur d’un site de commande",
            ],
          },

          role: {
            title: "Mon rôle dans le projet",
            list: [
              "Développement front-end avec React",
              "Gestion du panier via le Local Storage",
              "Intégration de l’interface avec Tailwind CSS",
              "Participation à la réflexion UX et à la structure des pages",
            ],
          },

          stackDetails: {
            title: "Stack technique & choix effectués",
            items: [
              {
                name: "React",
                image: "https://skillicons.dev/icons?i=react",
                description:
                  "Utilisé pour structurer l’application et gérer dynamiquement l’interface utilisateur.",
              },
              {
                name: "Local/Session Storage",
                image: "",
                description:
                  "Employé pour stocker temporairement les informations du panier sans backend.",
              },
              {
                name: "Tailwind CSS",
                image: "https://skillicons.dev/icons?i=tailwindcss",
                description:
                  "Permet de créer rapidement une interface cohérente, responsive et moderne.",
              },
            ],
          },

          features: {
            title: "Fonctionnalités principales",
            list: [
              "Consultation des bouquets disponibles",
              "Ajout de produits au panier",
              "Gestion du panier via le navigateur",
              "Interface responsive adaptée à tous les écrans",
            ],
          },

          challenges: {
            title: "Défis rencontrés & solutions",
            body: [
              "La gestion du panier sans backend représentait un défi important.",
              "L’utilisation du Local Storage a permis de conserver les données utilisateur tout au long de la navigation.",
            ],
          },

          outcome: {
            title: "Résultat final",
            body: [
              "Le projet aboutit à un site de commande fonctionnel et cohérent.",
              "L’interface offre une expérience fluide et rassurante pour l’utilisateur.",
            ],
          },

          learnings: {
            title: "Apprentissages & perspectives",
            body: [
              "Approfondissement de React dans un contexte e-commerce",
              "Compréhension des limites du stockage côté client",
              "Amélioration du travail en équipe sur un projet commun",
            ],
            next: [
              "Ajout d’un backend pour gérer les commandes",
              "Système de paiement simulé",
              "Optimisation des performances et de l’accessibilité",
            ],
          },
          research: {
            title: "Recherches graphique",
            gallery: ["/figma_jardin2.png", "/figma_jardin.png"],
          },
        },
      },
    ],
  },
  {
    id: "uiux",
    label: "UI / UX Design",
    title: "Design UI / UX",
    description:
      "Des interfaces pensées pour l’utilisateur, où chaque choix visuel et fonctionnel vise à améliorer la lisibilité, l’ergonomie et l’engagement.",
    projects: [
      {
        name: "Renoveo",
        slug: "Renoveo",
        title:
          "Renoveo : Refonte UI / UX d’une plateforme d’estimation immobilière",
        description: "Estimez vos travaux en quelques click.",
        type: "Projet personnel — UI / UX Design",
        stack: ["UX Research", "UI Design", "Figma"],
        image: "/Projet_Renoveo.jpg",

        links: {
          name: "En cours de développement",
          url: "",
        },

        content: {
          context: {
            title: "Contexte du projet",
            body: [
              "Renoveo est une plateforme d’estimation de travaux immobiliers.",
              "Ce projet consiste en une refonte complète de l’interface et de l’expérience utilisateur, réalisée dans une démarche personnelle.",
              "Issu d’un parcours de graphiste, j’ai souhaité travailler sur un cas concret de refonte UI / UX.",
              "L’objectif était d’améliorer la lisibilité, l’ergonomie et la compréhension du parcours d’estimation.",
            ],
          },

          problem: {
            title: "Problématiques identifiées",
            list: [
              "Parcours utilisateur complexe",
              "Manque de hiérarchisation de l’information",
              "Interface visuellement datée",
              "Peu rassurant pour l’utilisateur",
            ],
          },

          approach: {
            title: "Démarche UI / UX",
            list: [
              "Analyse des parcours existants",
              "Simplification des étapes clés",
              "Refonte des écrans principaux",
              "Travail sur la hiérarchie visuelle et la lisibilité",
            ],
          },

          role: {
            title: "Mon rôle",
            body: [
              "J’ai travaillé exclusivement sur la refonte UI / UX du produit, sans intervenir sur le développement du site.",
            ],
          },

          outcome: {
            title: "Résultat de la refonte",
            body: [
              "Une interface plus claire, moderne et rassurante.",
              "Un parcours utilisateur simplifié, facilitant la compréhension du service proposé.",
            ],
          },

          learnings: {
            title: "Apprentissages",
            body: [
              "Renforcement de ma méthodologie UX",
              "Meilleure compréhension des enjeux de lisibilité et de conversion",
              "Capacité à concevoir une interface orientée utilisateur",
            ],
          },
          research: {
            title: "Optimisation graphique",
            gallery: [
              "/figma_renoveo.png",
              "/figma_renoveo7.png",
              "/figma_renoveo3.png",
              "/figma_renoveo9.png",
              "/figma_renoveo4.png",
              "/figma_renoveo10.png",
              "/figma_renoveo2.png",
              "/figma_renoveo12.png",
              "/figma_renoveo5.png",
              "/figma_renoveo13.png",
            ],
          },
        },
      },
    ],
  },
  {
    id: "logo",
    label: "Logos",
    title: "Identités Visuelles & Logos",
    description:
      "Des logos et identités visuelles conçus pour transmettre des valeurs fortes et offrir une image cohérente et mémorable.",
    projects: [
      {
        name: "Renoveo",
        slug: "LogoRenoveo",
        title: "Renoveo : Création du logo et de l’identité visuelle",
        description: "Logo minimaliste et impactant.",
        type: "Projet personnel — Identité visuelle",
        stack: ["Branding", "Logo Design", "Identité visuelle"],
        image: "/Service_Renoveo.jpg",

        content: {
          context: {
            title: "Contexte du projet",
            body: [
              "Renoveo est une plateforme spécialisée dans l’estimation de travaux immobiliers.",
              "Ce projet concerne la création du logo et de l’identité visuelle associée.",
              "L’objectif était de créer une identité visuelle professionnelle, moderne et identifiable.",
            ],
          },

          goals: {
            title: "Objectifs de l’identité visuelle",
            list: [
              "Transmettre une image de confiance",
              "Évoquer le secteur de la rénovation",
              "Créer un logo simple et mémorisable",
              "Assurer une cohérence sur tous les supports",
            ],
          },

          process: {
            title: "Processus de création",
            list: [
              "Recherche et analyse du secteur",
              "Exploration de pistes graphiques",
              "Sélection et affinage du concept",
              "Déclinaisons et applications du logo",
            ],
          },

          outcome: {
            title: "Résultat final",
            body: [
              "Un logo minimaliste et impactant.",
              "Une identité visuelle cohérente, adaptable à différents supports.",
            ],
          },

          learnings: {
            title: "Apprentissages",
            body: [
              "Renforcement de ma méthodologie de branding",
              "Capacité à traduire des valeurs en éléments graphiques",
              "Vision globale de l’identité d’une marque",
            ],
          },
          research: {
            title: "Recherches graphique",
            gallery: ["/Renoveo_planche.jpg"],
          },
        },
      },
    ],
  },
];

export const SERVICES = [
  {
    title: "Site Web / Appli Mobile",
    slug: "SiteWeb",
    description1:
      "Besoin d’un site web ou d’une application mobile sur mesure ?",
    description2:
      "Je conçois des solutions modernes, performantes et adaptées à vos objectifs, de l’idée jusqu’à la mise en ligne.",
    image: "/Service_Takutaku.png",

    content: {
      intro: {
        title: "Créer une solution digitale efficace",
        icon: "/laptop-minimal.svg",
        body: [
          "Un site web ou une application n’est pas seulement une vitrine, c’est un véritable outil au service de vos objectifs.",
          "Mon approche consiste à concevoir des solutions claires, performantes et évolutives, adaptées à votre besoin réel.",
        ],
      },

      approach: {
        title: "Ma méthode de travail",
        icon: "/pencil-ruler.svg",
        steps: [
          "Analyse de vos besoins et de vos objectifs",
          "Conception de l’architecture et des parcours utilisateurs",
          "Développement de l’interface et des fonctionnalités",
          "Tests, optimisations et mise en ligne",
        ],
      },

      deliverables: {
        title: "Ce que je vous livre",
        icon: "/layers.svg",
        list: [
          "Un site ou une application fonctionnelle",
          "Une interface responsive (mobile, tablette, desktop)",
          "Un code propre et maintenable",
          "Un accompagnement jusqu’à la mise en ligne",
        ],
      },

      target: {
        title: "Pour qui ?",
        icon: "/pencil-ruler.svg",
        list: [
          "Entrepreneurs et indépendants",
          "Startups",
          "Petites et moyennes entreprises",
        ],
      },

      outcome: {
        title: "Résultat",
        icon: "/square-check-big.svg",
        body: [
          "Vous disposez d’un outil digital fiable, performant et aligné avec votre image.",
          "Une solution pensée pour évoluer avec votre activité.",
        ],
      },
    },
  },
  {
    title: "Design UI / UX",
    slug: "DesignUIUX",
    description1: "Votre site mérite une meilleure expérience utilisateur ?",
    description2:
      "J’améliore l’UI et l’UX de vos interfaces pour les rendre plus claires, intuitives et efficaces.",
    image: "/Service_Apple.png",

    content: {
      intro: {
        title: "Placer l’utilisateur au centre",
        icon: "/target.svg",
        body: [
          "Une bonne interface doit être à la fois esthétique et intuitive.",
          "Mon travail consiste à simplifier les parcours et à améliorer la compréhension de votre produit.",
        ],
      },

      approach: {
        title: "Démarche UI / UX",
        icon: "/brain.svg",
        steps: [
          "Analyse de l’existant",
          "Identification des points de friction",
          "Refonte des parcours et des écrans",
          "Optimisation de la hiérarchie visuelle",
        ],
      },

      deliverables: {
        title: "Livrables",
        icon: "/layers.svg",
        list: [
          "Maquettes UI",
          "Wireframes",
          "Recommandations UX",
          "Prototype interactif (si besoin)",
        ],
      },

      outcome: {
        title: "Bénéfices",
        icon: "/square-check-big.svg",
        body: [
          "Une interface plus claire et plus engageante.",
          "Une meilleure compréhension du produit par l’utilisateur.",
        ],
      },
    },
  },
  {
    title: "Logo / Identité Visuelle",
    slug: "Logo",
    description1: "Donnez une identité forte à votre projet.",
    description2:
      "Je crée des logos uniques et cohérents avec vos valeurs pour marquer les esprits dès le premier regard.",
    image: "/Service_Renoveo.jpg",

    content: {
      intro: {
        title: "Créer une identité mémorable",
        icon: "/target.svg",
        body: [
          "Un logo est le premier contact entre votre marque et votre public.",
          "Il doit être lisible, identifiable et cohérent avec vos valeurs.",
        ],
      },

      approach: {
        title: "Processus de création",
        icon: "/brain.svg",
        steps: [
          "Analyse de votre activité et de vos valeurs",
          "Recherche graphique",
          "Exploration de concepts",
          "Affinage et déclinaisons",
        ],
      },

      deliverables: {
        title: "Ce que vous obtenez",
        icon: "/layers.svg",
        list: [
          "Un logo unique",
          "Des déclinaisons adaptées",
          "Une identité visuelle cohérente",
        ],
      },

      outcome: {
        title: "Résultat",
        icon: "/square-check-big.svg",
        body: [
          "Une image professionnelle et reconnaissable.",
          "Une base solide pour votre communication.",
        ],
      },
    },
  },
];

export const CONTACT = {
  adresse: "01390 Mionnay",
  tel: "06 67 42 17 45",
  email: "durnerin.nathan01@gmail.com",
};
