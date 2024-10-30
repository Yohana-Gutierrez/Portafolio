// src/data/icons.ts

// src/icons.ts
export enum TechIcons {
    Python = 'python-icon-url',
    Firebase = 'firebase-icon-url',
    Java = 'java-icon-url',
    // Agrega otros íconos aquí
}


// Función para obtener el ícono basado en el nombre
export const getIcon = (iconName: TechIcons) => {
    return iconName;
};
