<template>
  <div class="slide">
    <div class="heading">
      HTML DOM - parentNode, nextSibling, previousSibling
    </div>
    <div class="content">
      <p>
        La propriété <b>parentNode</b> renvoie le nœud parent d'un élément ou
        d'un nœud.
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
        <pre style="margin: 0; line-height: 125%">element.parentNode</pre>
      </div>
      <br />
      <p>
        La propriété <b>nextSibling</b> renvoie le nœud suivant au même niveau
        de l'arbre.
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
      <br />
      <p>
        La propriété <b>previousSibling</b> renvoie le nœud précédent au même
        niveau de l'arbre.
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
        <pre style="margin: 0; line-height: 125%">node.previousSibling</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
