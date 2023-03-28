<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Apreciado aprendiz, bienvenido a este componente formativo, donde podrá realizar un recorrido conceptual, orientado a los principios agroecológicos para la siembra. Con su estudio responsable usted asimilará las generalidades y aspectos claves de la fisiología, morfología, arquitectura, desarrollo vegetativo y reproductivo de las plantas; además, podrá apropiarse de técnicas y métodos existentes para llevar a cabo la propagación vegetal y la siembra, como también las herramientas, equipos y utensilios requeridos según principios agroecológicos, manual técnico y normatividad vigente.
 
    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LZ1NrL7fkAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
