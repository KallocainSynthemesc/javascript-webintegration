<template>
  <div class="slide">
    <div class="heading">HTML DOM - getAttribute</div>
    <div class="content">
      <p>
        Vous avez vu des façons d'obtenir des nœuds d'éléments en utilisant
        getElementById par exemple.
      </p>
      <p>
        Une fois que vous avez obtenu un nœud d'élément, vous pouvez trouver les
        valeurs de n'importe lequel de ses attributs avec la méthode
        <b>getAttribute</b>.
      </p>

      <p style="color: red">
        Vous ne pouvez utiliser getAttribute que sur les nœuds d'éléments, pas
        sur l'objet document.
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
        <pre style="margin: 0; line-height: 125%">
                  <span style="color: #008800; font-weight: bold">const</span> paragraph <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementyByTagName(<span style="background-color: #fff0f0">&quot;p&quot;</span>)[0]

                  <span style="color: #008800; font-weight: bold">const</span> attr <span style="color: #333333">=</span> paragraph.getAttribute(<span style="background-color: #fff0f0">&quot;title&quot;</span>)</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
