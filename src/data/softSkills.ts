interface SoftSkill {
    name: string;
    icon: string;
    description?: string;
}

const softSkills: SoftSkill[] = [
    {
        name: "Azure Certification",
        description: "AZ-900",
        icon: "cert"
    },
    {
        name: "Azure Certification",
        description: "DP-900",
        icon: "cert"
    },
    {
        name: "Summer School of Solana",
        icon: "cert"
    },
    {
        name: "Dr. Henry Fok CPL",
        description: "Corporate Open Champion",
        icon: "tennis-fill"
    },
    {
        name: "HK Corporate Games 2018",
        description: "Men’s Singles Champion",
        icon: "tennis-fill"
    },
    {
        name: "INMA Global Media",
        description: "Best Use Of Mobile (1st Place)",
        icon: "award-fill"
    },
    {
        name: "Mobex Award",
        description: "Best Mobile Site",
        icon: "award-fill"
    },
];

export default softSkills;