export default {
  global: {
    componenteFormativo: 'Principios agroecológicos para la siembra',
    descripcionCurso:
      'En este componente formativo se abordan temas que permiten conocer la fisiología de las plantas, su arquitectura, el desarrollo vegetativo y reproductivo; además se busca la comprensión de los procesos de propagación vegetal y siembra teniendo en cuenta las diversas técnicas y métodos existentes, así como las herramientas, equipos y utensilios requeridos según principios agroecológicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Botánica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fisiología vegetal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Crecimiento y desarrollo vegetativo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Morfología y arquitectura de la planta',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Propagación vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Métodos y material vegetal',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sustratos y medios de enraizamiento',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Desinfectantes: Tipos y técnicas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Instalaciones, herramientas y equipos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Siembra',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas y tipos de trazado',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Condiciones para la siembra ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Arreglos productivos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Tecnologías para la siembra',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Botánica',
      referencia:
        'Muñoz, W. (2016). <em>Texto básico para profesional en ingeniería forestal en el área de fisiología vegetal</em>. Loreto-Perú: Departamento de Ecología y conservación de la facultad de ciencias forestales.',
      tipo: 'Libro',
      link:
        'http://www.iiap.org.pe/Archivos/Publicaciones/Publicacion_2013.pdf',
    },
    {
      tema: 'Propagación vegetal',
      referencia:
        'Iglesias Gutiérrez, L., Prieto Ruíz, J. Ángel, & Alarcón Bustamante, M. (2020). La propagación vegetativa de plantas forestales. <em>Revista Mexicana de Ciencias Forestales</em>, 21(79), 15-41.',
      tipo: 'Revista',
      link:
        'http://cienciasforestales.inifap.gob.mx/index.php/forestales/article/view/998/2303',
    },
    {
      tema: 'Propagación vegetal',
      referencia:
        'Sisaro, D., Hagiwara, J. C., (2018). <em>Propagación vegetativa por medio de estacas del tallo</em>. 1a ed. Ediciones INTA. ISBN 978-987-521-681-5',
      tipo: 'Cartilla',
      link:
        'https://inta.gob.ar/sites/default/files/inta-_propagacion_vegetativa_por_medio_de_estacas_de_tallo.pdf',
    },
    {
      tema: 'Siembra',
      referencia:
        'Bravo, C., Lozano, Z., Hernández-Hernández, R. M., Cánchica, H., & González, I. (2008). <em>Siembra directa como alternativa agroecológica para la transición hacia la sostenibilidad de las sábanas</em>. Acta biológica Venezuela 28(1), 15-28.',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/profile/Zenaida-Lozano/publication/275642819_Siembra_directa_como_alternativa_agroecologica_para_la_transicion_hacia_la_sostenibilidad_de_las_sabanas/links/554147e40cf2718618dc9e13/Siembra-directa-como-alternativa-agroecologica-para-la-transicion-hacia-la-sostenibilidad-de-las-sabanas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Densidad de siembra',
      significado: 'número de plantas por hectárea.',
    },
    {
      termino: 'Fisiología vegetal',
      significado:
        'ciencia que se encarga de comprender el desarrollo y comportamiento de las plantas mediante el estudio del funcionamiento, procesos y funciones vitales que se llevan a cabo a lo largo de su ciclo de vida.',
    },
    {
      termino: 'Marco de plantación',
      significado:
        'distancia y distribución requerida entre las plantas a la hora de ser sembradas para su adecuado desarrollo y crecimiento.',
    },
    {
      termino: 'Material vegetativo',
      significado:
        'semilla, parte de planta o planta viva destinada a ser plantada.',
    },
    {
      termino: 'Morfología vegetal',
      significado:
        'ciencia que se encarga del estudio de la estructura y forma de las plantas, es decir, de su anatomía.',
    },
    {
      termino: 'Propagación vegetal',
      significado: 'multiplicación de las plantas.',
    },
    {
      termino: 'Siembra',
      significado:
        'proceso por medio del cual se coloca la semilla en la tierra, suelo o medio de cultivo para que germine y se obtenga una planta nueva.',
    },
    {
      termino: 'Sustrato',
      significado:
        'material que reemplaza las funciones del suelo. Es de tipo orgánico, inorgánico y sintético.',
    },
    {
      termino: 'Trasplante',
      significado:
        'traslado de las plantas que se encuentran en los semilleros al lugar o terreno definitivo donde la planta va a llevar a cabo su ciclo de vida.',
    },
    {
      termino: 'Trazado',
      significado:
        'consiste en determinar el lugar donde se deben sembrar las plantas. Está enfocado a evitar la erosión del suelo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chuncho, G., Chuncho, C., & Aguirre, Z. H. (2019). <em>Anatomía y morfología vegetal</em>. University of Nebraska de Loja: Loja, Ecuador.',
      link:
        'https://unl.edu.ec/sites/default/files/archivo/2019-12/ANATOMI%CC%81A%20Y%20MORFOLOGI%CC%81A%20VEGETAL.pdf',
    },
    {
      referencia:
        'Fernández, H. R. O., Fernández, A. M. O., & Álvarez, A. F. (2017). <em>Manual de propagación de plantas superiores</em>. Universidad autónoma metropolitana. México.ISBN:978-607-02-9297-2',
      link: 'https://www.biopasos.com/biblioteca/manual_plantas.pdf',
    },
    {
      referencia:
        'Marinas Benavides, M. I. (2020). <em>Operaciones básicas en viveros y centros de jardinería</em>. MF0520. Editorial Tutor Formación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/131602',
    },
    {
      referencia:
        'Rodas, S. Y. R., Caro-Tovar, E., Guacaneme-Barrera, C. M., Medina-Sierra, M., & Cerón-Muñoz, M. F. (2022). <em>Establecimiento y manejo del cultivo de cacao en economías familiares</em>. Fondo Editorial Biogénesis, 118-118.',
      link:
        'https://revistas.udea.edu.co/index.php/biogenesis/article/view/347506',
    },
    {
      referencia:
        'Villegas Villegas, I. (2018). <em>Siembra y/o trasplante de cultivos hortícolas y flor cortada</em>. UF0014 (2a. ed.). IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/59177',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
