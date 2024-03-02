<template>
  <div class="slide">
    <div class="heading">HTML DOM - Nodes</div>
    <div class="content">
      <p>
        Au lieu d'utiliser le terme "arbre de famille", il est plus exact
        d'appeler un document un node tree (arbre de nœuds).
      </p>
      <p>
        <b>Element Nodes:</b> &lt;p&gt; &lt;span&gt; &lt;ol&gt; &lt;div&gt;
        &lt;img&gt;
      </p>
      <p>
        <b>Text nodes:</b> le n&oelig;ud de l'&eacute;l&eacute;ment &lt;p&gt;
        peut contenir le texte &quot;Ceci est un exemple de texte&quot;. Le
        texte &agrave; l'int&eacute;rieur de &lt;p&gt; est appel&eacute; un
        n&oelig;ud de texte.
      </p>
      <p>
        <b>Attribute nodes:</b> Les attributs sont utilisés pour donner des
        informations plus spécifiques sur un élément. L'attribut title par
        exemple.
      </p>
      <!-- HTML generated using hilite.me -->
      <div
        style="
          background: #ffffff;
          overflow: auto;
          width: auto;
          border: solid gray;
          border-width: 0.1em 0.1em 0.1em 0.8em;
          padding: 0.2em 0.6em;
          width: 70%;
        "
      >
        <pre
          style="margin: 0; line-height: 125%"
        > <span style="color: #007700">&lt;p</span> <span style="color: #0000CC">title=</span><span style="background-color: #fff0f0">&quot;le titre est un attribut node&quot;</span><span style="color: #007700">&gt;</span>Ceci est un exemple de texte<span style="color: #007700">&lt;/p&gt;</span> </pre>
      </div>
      <br />
      <p>
        une liste complète de tous les types de noeuds peut être trouvée
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType"
          >ici</a
        >
      </p>
      <img
        src="../assets/illustrations/attributeNodeDia.svg"
        class="html-css-logo"
        style="height: 33%; left: 67%; top: 62%"
      />
    </div>
  </div>
</template>

<style scoped></style>
