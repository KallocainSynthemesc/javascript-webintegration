<template>
  <div class="slide">
    <div class="heading">HTML DOM - nodeType</div>
    <div class="content">
      <p>
        La propriété childNodes renvoie un tableau contenant tous les types de
        noeuds, et pas seulement les noeuds d'éléments. Nous pouvons utiliser la
        propriété nodeType sur n'importe quel nœud d'un document pour déterminer
        le type de nœud auquel nous avons affaire.
      </p>
      <br />
      <p>La propriété nodeType est appelée comme ceci.</p>
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
        <pre style="margin: 0; line-height: 125%">node.nodeType</pre>
      </div>
      <br />
      <p>
        Au lieu de renvoyer une chaîne comme "element" ou "attribute", il
        renvoie un nombre.
      </p>
      <ul>
        <li>
          Les nœuds des <b>Elements</b> ont une valeur nodeType de <b>1</b>
        </li>
        <li>
          Les nœuds d'<b>Attribute</b> ont une valeur nodeType de <b>2</b>
        </li>
        <li>Les nœuds de <b>Text</b> ont une valeur nodeType de <b>3</b></li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
