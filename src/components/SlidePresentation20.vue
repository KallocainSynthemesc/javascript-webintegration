<template>
  <div class="slide">
    <div class="heading">HTML DOM - O comme Object - BOM</div>
    <div class="content">
      <p>
        La propriété <b>window.history</b> renvoie une référence à l'objet
        History, qui fournit une interface permettant de manipuler l'historique
        des sessions du navigateur.
      </p>
      <p><b>Examples:</b></p>
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
                  window.history.back();     <span style="color: #888888">// équivalent à un clic sur le bouton retour</span>
                  window.history.go(<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>);     <span style="color: #888888">// équivalent à history.back() ;</span></pre>
      </div>
      <br />
      <p>
        La propriété <b>window.navigator</b> renvoie une référence à l'objet
        Navigator, qui possède des méthodes et des propriétés sur l'application
        qui exécute le script.
      </p>
      <p><b>Examples:</b></p>
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
                  window.navigator.cookieEnabled <span style="color: #008800; font-style: italic">//true ou false</span>
                  window.navigator.platform <span style="color: #008800; font-style: italic">//WIN32,WIN64,Debian,Mac etc</span>
                  window.navigator.userAgent <span style="color: #008800; font-style: italic">//Firefox, Chrome, Safari etc</span>
                  window.navigator.language <span style="color: #008800; font-style: italic">//fr-FR, de-DE, en-US</span>
                  window.navigator.onLine <span style="color: #008800; font-style: italic">//true ou false si le navigateur est en ligne</span></pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
