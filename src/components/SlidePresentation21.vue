<template>
  <div class="slide">
    <div class="heading">HTML DOM - O comme Object - BOM</div>
    <div class="content">
      <p>
        L'objet <b>window.screen</b> contient des informations sur l'écran de
        l'utilisateur.
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
                  window.screen.width
                  window.screen.height
                  window.screen.availWidth
                  window.screen.availHeight
                  window.screen.colorDepth
                  window.screen.pixelDepth</pre
        >
      </div>
      <br />
      <p>
        L'objet <b>window.location</b> peut être utilisé pour obtenir l'adresse
        de la page actuelle (URL) et pour rediriger le navigateur vers une
        nouvelle page.
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
                window.location.href <span style="color: #008800; font-style: italic">//renvoie le href (URL) de la page actuelle.</span>
                window.location.hostname <span style="color: #008800; font-style: italic">//renvoie le nom de domaine de l&#39;hôte web.</span>
                window.location.pathname <span style="color: #008800; font-style: italic">//renvoie le chemin et le nom de fichier de la page actuelle.</span>
                window.location.protocol <span style="color: #008800; font-style: italic">//retourne le protocole web utilisé (http : ou https :)</span>
                window.location.assign() <span style="color: #008800; font-style: italic">//charge un nouveau document.</span></pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
