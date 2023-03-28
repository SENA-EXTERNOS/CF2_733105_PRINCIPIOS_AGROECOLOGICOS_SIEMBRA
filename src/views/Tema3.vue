<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Siembra

    .BGIMG05.px-md-5.px-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img01.png")
        .col-lg-7(data-aos="fade-left")
          p La siembra es el proceso por medio del cual se coloca la semilla en la tierra, suelo o medio de cultivo con la finalidad de obtener una nueva planta y así generar su propagación. Esta labor cultural, a pesar de aparentar ser un proceso fácil y sencillo, requiere de conocimientos y cuidados para que las plantas crezcan y se desarrollen de forma adecuada.
          .cajon-b.color-acento-contenido.cajon-end.p-4
            p.mb-0 Algunas plantas, principalmente las conocidas como malezas o arvenses, crecen de manera espontánea, pues las semillas son diseminadas por el aire, a través del agua mediante canales de riego y drenaje o afluentes naturales, gracias al hombre que las transporta y envía a otros lugares; también, por medio de los animales que las ingieren y a través de las heces las descargan en otros sitios. Además, existen técnicas de siembra y tipos de trazados que permiten alcanzar resultados más favorables.
      figure.mb-4(data-aos="zoom-in")
        img(src="@/assets/curso/tema3/img02.png")

    p En las labores de siembra, se hace indispensable realizar el trazado del terreno, según las características del cultivo y la pendiente o inclinación del terreno.

    .row.mt-5
      h3 Técnicas y tipos de trazado

    p Hay dos técnicas de siembra: #[b siembra directa y siembra indirecta o trasplante].

    .BG01.mb-5(data-aos="zoom-in")
      TabsC.color-acento-botones
        .row.justify-content-center.p-md-4.p-3(titulo="Siembra directa")
          .col-lg-10
            .h4 Siembra directa
            p Se da cuando la semilla se pone directamente en el lugar o terreno definitivo donde la planta va a llevar a cabo su ciclo de vida, lo que requiere de una preparación del suelo y de factores que se deben considerar a la hora de la siembra y que son necesarios para lograr resultados esperados: la variedad, el tamaño y la calidad de la semilla. Dichos factores tienen que ver con la disponibilidad de agua y marco de plantación (distancia y forma de distribución), la profundidad de siembra, que varía según el tipo de plantación, el tamaño de la semilla, las condiciones del terreno y el tiempo en que se lleva a cabo el proceso. 
            p Se distinguen diferentes tipos de siembra directa que pueden realizarse de forma manual o mecánica. Son tres de los más empleados: el volteo, caracterizado porque las semillas son repartidas y sembradas en el terreno de forma uniforme; chorrillo o línea, que consiste en esparcir las semillas en surcos de forma continua; y,  por último, a golpe, espaciado o también conocido como mateada, que es un método de siembra similar al chorrillo por el empleo de surcos, pero se diferencia por la distancia que se deja entre semillas. 
            .row.justify-content-center
              .col-lg-9
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 4
                  span Tipos de siembra directa
            
            .row.justify-content-center
              .col-lg-3.col-4
                figure.mb-4
                  img(src="@/assets/curso/tema3/img03.jpg")
                .h4.text-center.mb-0 Al volteo
              .col-lg-3.col-4
                figure.mb-4
                  img(src="@/assets/curso/tema3/img04.jpg")
                .h4.text-center.mb-0 En Línea o Chorrillo
              .col-lg-3.col-4
                figure.mb-4
                  img(src="@/assets/curso/tema3/img05.jpg")
                .h4.text-center.mb-0 A Golpe o Espaciada
        .row.justify-content-center.p-md-4.p-3(titulo="Siembra indirecta o trasplante")
          .col-lg-6.mb-lg-0.mb-4
            .h4 Siembra indirecta o trasplante
            p Es cuando la semilla se siembra en un lugar provisional (donde no se tiene en cuenta el marco de plantación) para que luego las plántulas, ya germinadas y con cierto porcentaje de desarrollo y crecimiento, sean trasplantadas en el terreno definitivo según la distancia y la forma de distribución ideal para cada cultivo. 
            p Las ventajas que tienen son el uso eficiente de las semillas y el mejor control de las condiciones ambientales (luz, humedad y temperatura), no solo durante el proceso de crecimiento de las plantas, sino también durante su germinación. 
            p Además, este método se lleva a cabo de forma manual o mecanizada, mediante semilleros que se pueden realizar en el suelo, al aire libre o en invernaderos que emplean sustratos que se encargan de sustituir el suelo y proporcionar el anclaje de la planta por medio del sistema radicular. 
            p Adicionalmente, según Robles, S. Y., Tovar, E. C., Guacaneme, C. M., Medina, M. &amp; Cerón, M. F. (2022) se conocen diversas formas de ordenar las plantas, entre las que se encuentran el sistema rectangular, donde la separación es mayor entre surcos (distancia entre filas) que la distancia entre árboles; el cuadro, también conocido como marco real, que es el trazado más simple e implementado y que consiste en sembrar a la misma distancia entre planta y surco.
            p.mb-0 En el tresbolillo o hexagonal la siembra se realiza en forma de triángulo equilátero, es decir, la misma distancia para todos los lados, con la ventaja de que es posible  sembrar mayor cantidad de plantas. Finalmente, el cinco oros o quincunce es similar al cuadrado, pero en la parte central del cuadrado se siembra una planta. 
          .col-lg-6.col-10
            .BGR07.p-4
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 5
                span Tipos de trazado
              .row.justify-content-around.mb-4
                .col-lg-4.col-6
                  .h4.text-center Cuadrado o marco
                  figure
                    img.w-80(src="@/assets/curso/tema3/img05.png")
                .col-lg-4.col-6
                  .h4.text-center Rectangular
                  figure
                    img(src="@/assets/curso/tema3/img06.png")
                  
              .row.justify-content-around
                .col-lg-4.col-6
                  .h4.text-center Tresbolillo
                  figure
                    img(src="@/assets/curso/tema3/img07.png")
                  
                .col-lg-4.col-6
                  .h4.text-center Cinco oros o quincunce
                  figure
                    img(src="@/assets/curso/tema3/img08.png")
                  
              
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img09.png")
      .col-lg-7(data-aos="fade-left")
        .cajon.color-primario.p-4
          p.mb-0 Trazar el terreno que se va a sembrar, va de la mano con las condiciones que deben tenerse en cuenta, al establecer un cultivo productivo, en función del riego y la absorción de nutrientes (inclinación y características propias de cada predio).


    .row.mt-5
      h3 Condiciones para la siembra

      p Cumplir una serie de requisitos o condiciones, hace posible el logro de una adecuada germinación y el desarrollo de las plantas; requisitos relacionados con el estado y el alistamiento de las semillas que, a su vez, deben ser tratadas y almacenadas de forma adecuada y estar en el término apropiado, es decir, frescas y no haber excedido su fecha de caducidad o su período favorable de germinación. 

      p En general, las principales características para que las semillas sean de buena calidad son: su sanidad, el vigor, el poder germinativo y la pureza física y varietal.

      p Las siguientes, son las condiciones más importantes, para tener en cuenta, en la siembra y utilidad de las semillas:

    
    .BGIMG04.p-md-5.p-4
      
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/img10.svg')
        .BGR02.p-3(x="40%" y="6.5%" numero="1")
          .h5.mb-2 Factores Ambientales
          p.mb-0 También son importantes y juegan un papel fundamental en la siembra, a fin de que las semillas germinen sin contratiempos, las características y la adecuada preparación del suelo y las condiciones ambientales favorables. 
        .BGR02.p-3(x="45%" y="39%" numero="2")
          .h5.mb-2 Humedad
          p.mb-0 Debe ser suficiente, del suelo o sustrato, para que no haya que regar las semillas durante 7 a 10 días. 
        .BGR02.p-3(x="75%" y="21.2%" numero="3")
          .h5.mb-2 Temperatura
          p.mb-0 Factor que determina si las semillas germinan de forma rápida o lenta. Resulta ideal una temperatura moderada. Con frío, se requiere del doble o el triple de tiempo respecto a lo regular; con calor, es rápido, pero se corre el riesgo de que la presencia de hongos disminuya el poder germinativo. 
        .BGR02.p-3(x="17%" y="8%" numero="4")
          .h5.mb-2 Luz
          p.mb-0 Aunque para germinar no se requiere, para procesos de formación de estructuras, sí. Es aconsejable entre 4 y 6 horas diarias de luz. 

    .row.mt-3
      p Una vez acondicionado el terreno para el establecimiento del cultivo, conocer cómo realizar los arreglos (según el crecimiento y las condiciones propias de cada cultivo), hace que el espacio y la absorción de la luz sea más eficiente, como se ilustra en el siguiente video:
    
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oF-9--ROgR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-4
      .col-lg-10.cajon.color-secundario.p-4(data-aos="flip-up")
        p.mb-0 La actividad de siembra, la forma como se traza el terreno y/o los arreglos que se hacen en los cultivos, son medidas de eficiencia que permiten mejorar los rendimientos. Actualmente, se conocen algunas tecnologías que permiten ahorrar recursos, energía y mejorar la productividad de los cultivos.

    .row.mt-5
      h3 Tecnologías para la siembra

    p.mb-5 Con la evolución y el avance tecnológico, más el auge de la conciencia ambiental, la sostenibilidad y eficiencia en el uso de recursos naturales, se emplean tecnologías que brindan mayor optimización y eficiencia en las labores culturales, en este caso, la siembra, mediante el uso de maquinaria y equipos con <em>Global Positioning System</em> (GPS).

    p Para realizar el proceso de siembra, se requiere de maquinaria, herramientas, equipos, elementos y acciones como:

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img11.png")
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR08")
          div(titulo="Procesos y tecnologías que permiten la planeación")
            p.mb-0 Además, día a día se incluyen procesos y tecnologías que permiten la planeación; esto implica la determinación de lo que se quiere realizar, incluyendo las decisiones de gran importancia, como el establecimiento de objetivos, programas, definición de técnicas, métodos, procedimientos y demás prioridades dentro del proceso de siembra. Es importante identificar, entonces, las acciones a desarrollar a través de una secuencia lógica y ordenada que permita obtener resultados exitosos.
          div(titulo="Registro organizado de las actividades desarrolladas")
            p.mb-0 Se requiere que el productor lleve un registro organizado de las actividades desarrolladas, por eso es indispensable el diseño de los formatos que permitan plasmar la información recolectada, que debe estar disponible en físico y sistematizada para tecnificar el proceso y evitar retrasos en la ejecución de las actividades que generen un desequilibrio y pérdidas productivas. Resulta indispensable planear perfectamente el proceso, reducir los contratiempos y lograr que el proceso se realice de manera eficiente y eficaz.
          div(titulo="Diligenciar formatos")
            p El diligenciamiento de estos formatos va enlazado con el cronograma que permite establecer una guía de las temporadas del año y las condiciones de siembra en cada una con el fin de establecer un alto porcentaje de crecimiento y desarrollo del cultivo. Se debe tener en cuenta:
            .row.justify-content-center
              .col-6
                ul.lista-ul--color
                  li
                    <i class="fas fa-snowflake" style="color:#81AD20;"></i>
                    | Tipo de semilla
                  li
                    <i class="fas fa-snowflake" style="color:#81AD20;"></i>
                    | Periodo de siembra.
                  li
                    <i class="fas fa-snowflake" style="color:#81AD20;"></i>
                    | Preparación del terreno
                  li
                    <i class="fas fa-snowflake" style="color:#81AD20;"></i>
                    | Plazo de trasplante
              .col-6
                ul.lista-ul--color
                  li
                    <i class="fas fa-snowflake" style="color:#81AD20;"></i>
                    | Marco de plantación
                  li
                    <i class="fas fa-snowflake" style="color:#81AD20;"></i>
                    | Fertilización
                  li
                    <i class="fas fa-snowflake" style="color:#81AD20;"></i>
                    | Cosecha

    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="flip-up")
            p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
