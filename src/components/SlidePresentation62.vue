<template>
  <div class="slide">
    <div class="heading">HTML DOM - createElement</div>
    <div class="content">
      <p>
        Nous pouvons manipuler les nœuds existants dans le Document Object
        Model.
      </p>
      <p>
        Nous allons maintenant aller un peu plus loin et créer de nouveaux nœuds
        dans l'arbre DOM.
      </p>
      <br />
      <div class="flex-container">
        <div style="width: 30%">
          <img src="../assets/illustrations/baby.svg" style="width: 70%" />
        </div>
        <div style="width: 65%">
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
            ><span style="color: #007020">document</span>.createElement(<span style="background-color: #fff0f0">&quot;p&quot;</span>);</pre>
          </div>
          <br />
          <p>
            seule, cette méthode n'est pas très utile. Vous aurez plus tard
            besoin de l'insérer dans le DOM, nous devons donc enregistrer le
            nœud dans une variable.
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
            <pre
              style="margin: 0; line-height: 125%"
            ><span style="color: #008800; font-weight: bold">let</span> paragraph <span style="color: #333333">=</span> <span style="color: #007020">document</span>.createElement(<span style="background-color: #fff0f0">&quot;p&quot;</span>);</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
