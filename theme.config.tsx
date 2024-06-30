import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const logo = (
  <>
    <span style={{ fontWeight: 800 }}>
      talkee
    </span>
  </>
);

const config: DocsThemeConfig = {
  // Configuración global
  docsRepositoryBase: 'https://github.com/usuario/repo/tree/main/docs',
  useNextSeoProps() {
    return {
      titleTemplate: 'talkee'
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="talkee" />
      <meta property="og:description" content="Documentación de talkee" />
    </>
  ),

  // Tema y modo oscuro
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
    forcedTheme: 'light',
    // theme: ['light', 'dark']
  },
  primaryHue: {
    dark: 200,
    light: 200
  },
  primarySaturation: {
    dark: 100,
    light: 100
  },

  // Barra de navegación
  logo,
  // project: {
  //   link: 'https://github.com/usuario/proyecto',
  // },
  // chat: {
  //   link: 'https://discord.com/invite/miproyecto',
  // },
  // navbar: {
  //   extraContent: React.ReactNode | null,
  // },

  // Búsqueda
  search: {
    emptyResult: () => <div>No se encontraron resultados</div>,
    loading: () => 'Cargando...',
    error: 'Ha ocurrido un error',
    placeholder: 'Buscar en la documentación',
  },

  // Banner
  banner: {
    dismissible: true,
    key: 'anuncio-importante',
    text: (
      <a href="https://ejemplo.com" target="_blank" rel="noreferrer">
        🎉 ¡Nuevo lanzamiento disponible! Leer más →
      </a>
    ),
  },

  // Barra lateral
  sidebar: {
    defaultMenuCollapseLevel: 2,
    autoCollapse: false,
    titleComponent: ({ title, type }) => <>{title}</>,
    toggleButton: false,
  },

  // Contenido principal
  main: ({ children }) => <div className="nextra-content">{children}</div>,

  // Tabla de contenidos
  toc: {
    float: true,
    title: 'En esta página',
    backToTop: true,
  },

  // Enlace de edición
  editLink: {
    text: 'Editar esta página en GitHub',
    component: ({ className, filePath }) => (
      <a href={`https://github.com/usuario/repo/edit/main/${filePath}`} className={className}>
        Editar esta página
      </a>
    ),
  },

  // Enlace de retroalimentación
  feedback: {
    content: () => <div>¿Tienes sugerencias? Danos tu opinión</div>,
    labels: 'feedback',
    useLink: () => 'https://github.com/usuario/repo/issues/new',
  },

  // Navegación de página
  navigation: {
    prev: true,
    next: true,
  },

  // Marca de tiempo de Git
  gitTimestamp: ({ timestamp }) => (
    <div>Última actualización: {timestamp.toLocaleDateString()}</div>
  ),

  // Pie de página
  footer: {
    text: (
      <div>
        <p>© {new Date().getFullYear()} talkee. Todos los derechos reservados.</p>
      </div>
    ),
    component: ({ menu }) => (
      <footer>
        {/* Componente de pie de página personalizado */}
      </footer>
    ),
  },

  // Selector de tema
  themeSwitch: {
    component: ({ className }) => (
      <div className={className}>
        {/* Componente de selector de tema personalizado */}
      </div>
    ),
    useOptions() {
      return {
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema'
      };
    },
  },

  // Favicon (experimental)
  faviconGlyph: '',
};

export default config;