<template>
  <div class="slide">
    <div class="heading">Le référencement - Robots.txt</div>
    <div class="content">
      <p>
        Les fichiers Robots.txt sont situés dans le répertoire racine des sites
        web et suggèrent les parties de votre site que les moteurs de recherche
        doivent ou ne doivent pas explorer, ainsi que la vitesse à laquelle ils
        explorent votre site.
      </p>
      <br />
      <p>Comment Googlebot traite-t-il les fichiers robots.txt ?</p>
      <ol>
        <li>
          Si Googlebot ne trouve pas de fichier robots.txt pour un site, il
          procède à l'exploration du site.
        </li>
        <li>
          Si Googlebot trouve un fichier robots.txt pour un site, il se
          conformera généralement aux suggestions et procédera à l'exploration
          du site.
        </li>
        <li>
          Si Googlebot rencontre une erreur en essayant d'accéder au fichier
          robots.txt d'un site et ne peut pas déterminer s'il existe ou non, il
          n'explorera pas le site.
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped></style>
