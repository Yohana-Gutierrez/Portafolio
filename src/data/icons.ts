// src/data/icons.ts

// Objeto simple que mapea nombres de tecnologías a URLs de iconos
export const TechIcons = {
    Python: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png',
    Firebase: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
    Java: 'https://banner2.cleanpng.com/20181109/oll/kisspng-java-development-kit-logo-programming-language-por-java-logo-svg-1713924793188.webp',
};

// Función para obtener la URL del ícono basado en el nombre de la tecnología
export const getIcon = (iconName: keyof typeof TechIcons): string => {
    return TechIcons[iconName];
};
