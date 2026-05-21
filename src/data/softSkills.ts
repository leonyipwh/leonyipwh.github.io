interface SoftSkill {
    name: string;
    icon: string;
    description?: string;
}

const softSkills: SoftSkill[] = [
    {
        name: "Azure AI engineer",
        description: "Microsoft Certified: AI-102",
        icon: "cert"
    },
    {
        name: "Azure Data Fundamentals",
        description: "Microsoft Certified: DP-900",
        icon: "cert"
    },
    {
        name: "Azure Fundamentals",
        description: "Microsoft Certified: AZ-900",
        icon: "cert"
    },
    {
        name: "Ackee Blockchain Security",
        description: "Summer School of Solana",
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
        description: "Best Use Of Mobile (1<sup>st</sup> Place)",
        icon: "award-fill"
    },
    {
        name: "Mobex Award",
        description: "Best Mobile Site",
        icon: "award-fill"
    },
];

export default softSkills;