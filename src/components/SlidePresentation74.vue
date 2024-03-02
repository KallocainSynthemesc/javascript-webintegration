<template>
  <div class="slide">
    <div class="heading">HTML DOM - cloneNode</div>
    <div class="content">
      <p>
        Pour cloner un nœud, on peut utiliser la méthode cloneNode() de Node qui
        renvoie une copie du nœud sur lequel elle a été appelée.
      </p>
      <p><b>Syntax:</b></p>
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
        <pre style="margin: 0; line-height: 125%">node.cloneNode(deep)</pre>
      </div>
      <br />
      <table class="ws-table-all notranslate">
        <tbody>
          <tr></tr>
          <tr>
            <td style="width: 120px">Parameter</td>
            <td>Description</td>
          </tr>
          <tr>
            <td><em>deep</em></td>
            <td>
              Optional.<br /><code class="w3-codespan">false</code> - Default.
              Clone uniquement le nœud et ses attributs.<br />
              <code class="w3-codespan">true</code> - Clone le nœud, ses
              attributs et ses descendants.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
