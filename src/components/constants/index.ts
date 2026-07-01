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
        name: "BeforeCode",
        slug: "beforecode",
        title: "BeforeCode",
        type: "SaaS",
        stack: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "Stripe",
          "Tailwind",
          "Vercel",
        ],
        description:
          "Un outil pour transformer une idée floue en structure claire avant de passer au design ou au développement.",
        image: "/Login.jpg",

        content: {
          intro: {
            title: "Structurer avant de coder.",
            body: [
              "BeforeCode aide à poser les bases d’un projet web : type d’application, pages, sections, wireframe et première vision d’interface.",
            ],
          },

          highlights: {
            list: [
              "Clarifier une idée rapidement",
              "Composer une structure de page",
              "Gérer projets, crédits et paiements",
            ],
          },

          gallery: {
            gallery: [
              "/beforecode.png",
              "/LandingFullSize.png",
              "/IAProjection.png",
            ],
          },
        },

        links: {
          name: "Découvrir le site",
          url: "https://beforecode.app/",
        },
      },
      {
        name: "Takutaku",
        slug: "Takutaku",
        title: "Takutaku",
        type: "Projet de groupe",
        stack: ["React", "JavaScript", "Supabase", "Tailwind"],
        description:
          "Une plateforme fictive de streaming d’animés, pensée pour une navigation fluide sur mobile, tablette et desktop.",
        image: "/Projet_Takutaku.jpg",

        content: {
          intro: {
            title: "Regarder, explorer, sauvegarder.",
            body: [
              "Takutaku propose une expérience inspirée des plateformes de streaming, avec un catalogue d’animés, une interface responsive et une gestion des favoris.",
            ],
          },

          highlights: {
            list: [
              "Explorer un catalogue d’animés",
              "Sauvegarder ses favoris",
              "Naviguer facilement sur tous les écrans",
            ],
          },

          gallery: {
            gallery: [
              "/takutaku-app.vercel.app_.png",
              "/takutaku-app.vercel.app_ (1).png",
              "/takutaku-app.vercel.app_ (2).png",
            ],
          },
        },

        links: {
          name: "Découvrir le site",
          url: "https://takutaku-app.vercel.app/",
        },
      },

      {
        name: "Le Jardin Alsacien",
        slug: "JardinAlsacien",
        title: "Le Jardin Alsacien",
        type: "Projet de groupe",
        stack: ["React", "JavaScript", "Local Storage", "Tailwind"],
        description:
          "Un site de commande de bouquets pensé pour une expérience locale, simple et chaleureuse.",
        image: "/Projet_Jardin.jpg",

        content: {
          intro: {
            title: "Commander des fleurs simplement.",
            body: [
              "Le Jardin Alsacien met en avant une boutique de bouquets avec un parcours clair, une gestion du panier côté navigateur et une interface responsive.",
            ],
          },

          highlights: {
            list: [
              "Découvrir les bouquets disponibles",
              "Ajouter ses fleurs au panier",
              "Commander avec une interface simple",
            ],
          },

          gallery: {
            gallery: [
              "/strasbouq-client.vercel.app_.png",
              "/strasbouq-client.vercel.app_ (1).png",
            ],
          },
        },

        links: {
          name: "Découvrir le site",
          url: "https://strasbouq-client.vercel.app/",
        },
      },
      {
        name: "Wild Eats",
        slug: "WildEats",
        title: "Wild Eats",
        type: "Projet de groupe",
        stack: ["HTML", "CSS", "JavaScript"],
        description:
          "Une interface de commande de repas simple et rapide, développée sans framework.",
        image: "/Projet_Wildeats.jpg",

        content: {
          intro: {
            title: "Commander sans perdre de temps.",
            body: [
              "Wild Eats permet de consulter un menu, ajouter des plats au panier et simuler un parcours de commande clair, rapide et accessible.",
            ],
          },

          highlights: {
            list: [
              "Consulter les plats disponibles",
              "Ajouter des produits au panier",
              "Finaliser une commande simplement",
            ],
          },

          gallery: {
            gallery: ["/Projet-Wild-Eats.png"],
          },
        },

        links: {
          name: "Découvrir le site",
          url: "https://nathandurnerin.github.io/Projet-Wild-Eats/",
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
          name: "Découvrir le site",
          url: "https://renoveo.app/",
        },

        content: {
          intro: {
            title: "Simplifier une estimation travaux.",
            body: [
              "Renoveo est une refonte UI / UX pensée pour rendre un parcours d’estimation immobilière plus clair, plus moderne et plus rassurant.",
            ],
          },

          highlights: {
            list: [
              "Clarifier le parcours utilisateur",
              "Moderniser l’interface",
              "Rendre l’estimation plus lisible",
            ],
          },

          gallery: {
            gallery: [
              "/figma_renoveo7.png",

              "/figma_renoveo9.png",

              "/figma_renoveo10.png",

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
        name: "BeforeCode",
        slug: "LogoBeforeCode",
        title:
          "BeforeCode : Création du logo et de l’identité visuelle d'un SaaS",
        description:
          "Logo et identité visuelle pour une application de wireframing destinée aux développeurs web.",
        type: "Projet personnel — SaaS & Identité visuelle",
        stack: ["Branding", "Logo Design", "UX/UI", "Produit digital"],
        image: "/Service_BeforeCode.jpg",

        content: {
          intro: {
            title: "Une identité pour un outil de wireframing.",
            body: [
              "L’identité de BeforeCode a été pensée pour évoquer la structure, la clarté et l’univers du développement web.",
            ],
          },

          highlights: {
            list: [
              "Créer une identité reconnaissable",
              "Évoquer la logique du wireframe",
              "Adapter le logo à un produit SaaS",
            ],
          },

          gallery: {
            gallery: ["/Charte_graphique_BeforeCode - Copie.jpg","/Charte_graphique_BeforeCode.jpg"],
          },
        },
      },

      {
        name: "Renoveo",
        slug: "LogoRenoveo",
        title: "Renoveo : Création du logo et de l’identité visuelle",
        description: "Logo minimaliste et impactant.",
        type: "Projet personnel — Identité visuelle",
        stack: ["Branding", "Logo Design", "Identité visuelle"],
        image: "/Service_Renoveo.jpg",

        content: {
          intro: {
            title: "Une identité claire pour la rénovation.",
            body: [
              "Renoveo repose sur une identité visuelle simple, professionnelle et rassurante, adaptée à une plateforme d’estimation de travaux.",
            ],
          },

          highlights: {
            list: [
              "Transmettre une image de confiance",
              "Créer un logo simple et mémorisable",
              "Construire une identité cohérente",
            ],
          },

          gallery: {
            gallery: ["/Charte_graphique_Renoveo.jpg","/Charte_graphique_Renoveo - Copie.jpg","/Charte_graphique_Renoveo - Copie (2).jpg"],
          },
        },
      },
      {
        name: "NHN",
        slug: "LogoNHN",
        title: "NHN : Création du logo et de l’identité visuelle du portfolio",
        description:
          "Logo personnel et identité graphique pour un portfolio orienté développement web.",
        type: "Projet personnel — Portfolio & Identité visuelle",
        stack: ["Développement web", "UX/UI Design", "Identité visuelle"],
        image: "/Service_NHN.jpg",

        content: {
          intro: {
            title: "Un monogramme pour mon univers personnel.",
            body: [
              "NHN est une identité visuelle personnelle pensée pour accompagner mon portfolio et donner une signature reconnaissable à mes projets.",
            ],
          },

          highlights: {
            list: [
              "Créer une identité personnelle forte",
              "Construire un monogramme structuré",
              "Assurer une cohérence sur tout le portfolio",
            ],
          },

          gallery: {
            gallery: ["/Charte_graphique_NHN.jpg","/Charte_graphique_NHN - Copie.jpg"],
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
