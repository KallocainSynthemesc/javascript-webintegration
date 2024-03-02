<template>
  <div class="slide">
    <div class="heading">HTML DOM - Dynamic styling - className</div>
    <div class="content">
      <p>
        Il n'y a qu'un seul inconvénient à cette technique. Si vous attribuez
        une classe à l'aide de la propriété className,
        <span style="color: red"
          >vous écraserez toutes les classes qui sont déjà attachées</span
        >
        à cet élément.
      </p>
      <p>
        Nous pourrions contourner ce problème en utilisant une assignation comme
        celle-ci (si nous voulons garder les autres classes css assignées) :
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
        "
      >
        <pre
          style="margin: 0; line-height: 125%"
        >element.className <span style="color: #333333">+=</span> <span style="background-color: #fff0f0">&quot; intro&quot;</span></pre>
      </div>
      <br />
      <p>
        mais avec cette affectation, notre code précédent ne fonctionnerait pas
        où nous assignons une classe qui montre l'élément et une autre qui le
        cache. Avec une affectation comme celle-ci, les deux classes resteraient
        affectées...
      </p>
      <br />
      <p>
        Heureusement, nous avons un autre moyen de gérer les classes sur un
        élément de manière plus précise. On l'appelle <b>classList</b>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
