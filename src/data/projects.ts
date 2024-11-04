// src/data/projects.ts
import { TechIcons } from './icons';

export type TechKey = keyof typeof TechIcons;

export const projects: {
    title: string;
    description: string;
    techs: TechKey[];
    link: string;
}[] = [
    {
        title: "Tres Rayas en uno",
        description: "Acortador de URL con Base de Datos y arquitectura hexagonal",
        techs: ["Python"], // Usa exactamente las mismas claves de TechIcons
        link: "https://github.com/Yohana-Gutierrez/Programacion2/tree/master/Capitulo%208/TresEnraya",
    },
    {
        title: "Tour del Caballero",
        description: "Algoritmo muy conocido",
        techs: ["Python"],
        link: "https://github.com/Yohana-Gutierrez/AED-/tree/main/CAPITULO_14",
    },
    {
        title: "Tic_Tac_Toe",
        description: "El famoso juego de x-0",
        techs: ["Python"],
        link: "https://github.com/Yohana-Gutierrez/POO/tree/main/tic-tac-toe-5Componentes",
    },
    {
        title: "Terrapez App",
        description: "Reserva de restaurante con Base de Datos",
        techs: ["Firebase", "Java"],
        link: "https://github.com/Yohana-Gutierrez/POO/tree/main/terrapez%20Restaurante-ProyectoFinal",
    },
];
