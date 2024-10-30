// src/data/projects.ts

import { TechIcons } from './icons.ts'; // Verifica que esta ruta sea correcta

export type Project = {
    title: string;
    description: string;
    techs: TechIcons[];
    link: string;
    isComingSoon?: boolean;
};

export const projects: Project[] = [
    {
        title: "Tres Rayas en uno",
        description: "Acortador de URL con Base de Datos y arquitectura hexagonal",
        techs: [TechIcons.Python],
        link: "https://github.com/Yohana-Gutierrez/Programacion2/tree/master/Capitulo%208/TresEnraya",
    },
    {
        title: "Tour del Caballero",
        description: "Algoritmo muy conocido",
        techs: [TechIcons.Python],
        link: "https://github.com/Yohana-Gutierrez/AED-/tree/main/CAPITULO_14",
    },
    {
        title: "Tic_Tac_Toe",
        description: "El famoso juego de x-0",
        link: "https://github.com/Yohana-Gutierrez/POO/tree/main/tic-tac-toe-5Componentes",
        techs: [TechIcons.Python],
    },
    {
        title: "Terrapez App",
        description: "Reserva de restaurante con Base de Datos",
        link: "https://github.com/Yohana-Gutierrez/POO/tree/main/terrapez%20Restaurante-ProyectoFinal",
        techs: [TechIcons.Firebase, TechIcons.Java], // Incluye Firebase aquí
    },
];
