// src/data/icons.ts

export enum TechIcons {
    Python = "fab fa-python",
    Java = "fab fa-java",
    Firebase = "fab fa-fire", 
    // Agrega más iconos según lo necesites
}

// Función para obtener el ícono basado en el nombre
export const getIcon = (iconName: TechIcons) => {
    return iconName;
};
