interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Cantonese",
        level: "Native",
        description: "",
        show: true
    },
    {
        name: "English",
        level: "Fluent",
        description: "",
        show: true
    },
    {
        name: "Mandarin",
        level: "Fluent",
        description: "",
        show: true
    },
];

export default languages;