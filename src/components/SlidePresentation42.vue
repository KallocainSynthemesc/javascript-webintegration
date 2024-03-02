<template>
  <div class="slide">
    <div class="heading">Event handlers - onclick vs addEventListener</div>
    <div class="content">
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
                  <span style="color: #008800; font-weight: bold">var</span> h <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&#39;a&#39;</span>);
                  h.onclick <span style="color: #333333">=</span> doThing_1;
                  h.onclick <span style="color: #333333">=</span> doThing_2;

                  h.addEventListener(<span style="background-color: #fff0f0">&#39;click&#39;</span>, doThing_3);
                  h.addEventListener(<span style="background-color: #fff0f0">&#39;click&#39;</span>, doThing_4);</pre>
      </div>
      <br />
      <p>
        Les fonctions 2, 3 et 4 fonctionnent, mais pas la 1. Cela est dû au fait
        que addEventListener n'écrase pas les gestionnaires d'événements
        existants, alors que onclick écrase tout gestionnaire d'événements
        onclick = fn existant.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
