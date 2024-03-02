<template>
  <div class="slide">
    <div class="heading">HTML DOM - insertBefore</div>
    <div class="content">
      <p>
        Vous pouvez utiliser insertBefore pour insérer un nouvel élément avant
        un élément existant.
      </p>
      <p>Vous devez préciser trois choses:</p>
      <ol>
        <li>le nouvel élément que vous voulez insérer</li>
        <li>l'élément cible avant lequel vous voulez l'insérer</li>
        <li>le parent des deux éléments</li>
      </ol>
      <br />
      <p>Voici la syntaxe</p>
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
parentElement.insertBefore(newElement,targetElement);</pre
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
