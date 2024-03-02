<template>
  <div class="slide">
    <div class="heading">HTML DOM - innerHtml</div>
    <div class="content">
      <p>
        Lorsque nous appelons innerHTML, c'est ainsi qu'il voit le balisage à
        l'intérieur de notre div :
      </p>
      <br />
      <div>
        <img src="../assets/illustrations/innerHtml2.svg" style="width: 30%" />
      </div>
      <br />
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
        <pre style="margin: 0; line-height: 125%">
                  <span style="color: #007700">&lt;p&gt;</span>Voici <span style="color: #007700">&lt;em&gt;</span>mon<span style="color: #007700">&lt;/em&gt;</span> contenu<span style="color: #007700">&lt;/p&gt;</span></pre>
      </div>
      <p>
        Cool si vous avez un morceau de HTML que vous souhaitez insérer
        directement dans une page web. Si vous pouvez l'éviter, faites-le.
      </p>
      <ol>
        <li>innerHTML est lent</li>
        <li>Event handlers attachés à tout élément du DOM sont préservés</li>
        <li>Casse le document - pas de validation</li>
        <li>Utilisé pour le Cross-site Scripting</li>
      </ol>
    </div>
  </div>
</template>

<style scoped></style>
