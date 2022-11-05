<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Apreciado aprendiz: sea bienvenido a este nuevo viaje por el conocimiento, orientado a los principios agroecológicos para la siembra y que hace parte del programa de Manejo de la Producción Agroecológica. En este componente formativo se desarrollan temáticas que permiten conocer la fisiología, morfología, arquitectura, desarrollo vegetativo y reproductivo de las plantas; además se analizan las técnicas y métodos existentes para llevar a cabo la propagación vegetal y la siembra, como también las herramientas, equipos y utensilios requeridos según principios agroecológicos, manual técnico y normatividad vigente.
    p.mb-5 Antes de empezar, se sugiere revisar el siguiente video para visualizar un breve resumen del componente.
  
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
