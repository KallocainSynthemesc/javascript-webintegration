<template>
  <div class="slide">
    <div class="heading">HTML DOM - insertAfter ???</div>
    <div class="content">
      <p>
        Je ne sais pas pourquoi il n'y a pas de méthode insertAfter. Il me
        semble qu'elle serait très utile. Heureusement, nous pouvons l'écrire
        nous-mêmes.
      </p>
      <p>
        Pour ce faire, nous devons écrire une fonction appelée insertAfter qui
        prend comme insert before l'élément à insérer et l'élément cible.
      </p>
      <p>
        Nous avons également besoin de deux nouvelles propriétés que je n'ai pas
        encore montrées.
      </p>
      <br />
      <p><b>parentNode</b> me donne le noeud parent de ce noeud s'il existe.</p>
      <div
        style="
          background: #ffffff;
          overflow: auto;
          width: auto;
          border: solid gray;
          border-width: 0.1em 0.1em 0.1em 0.8em;
          padding: 0.2em 0.6em;
        "
      >
        <pre style="margin: 0; line-height: 125%">node.parentNode</pre>
      </div>
      <br />
      <p>
        <b>nextSibling</b> renvoie le nœud suivant au même niveau de l'arbre.
      </p>
      <div
        style="
          background: #ffffff;
          overflow: auto;
          width: auto;
          border: solid gray;
          border-width: 0.1em 0.1em 0.1em 0.8em;
          padding: 0.2em 0.6em;
        "
      >
        <pre style="margin: 0; line-height: 125%">node.nextSibling</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
