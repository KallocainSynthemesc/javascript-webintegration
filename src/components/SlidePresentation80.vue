<template>
  <div class="slide">
    <div class="heading">HTML DOM - style property</div>
    <div class="content">
      <p>
        Chaque nœud d'élément possède la propriété style. Elle contient des
        informations sur les styles css attachés à l'élément.
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
        <pre style="margin: 0; line-height: 125%">element.style.property</pre>
      </div>
      <br />
      <p>
        <b
          >Vous ne pouvez pas définir un style comme il est écrit dans les
          CSS:</b
        >
      </p>
      <div
        style="
          background: #e78484;
          overflow: auto;
          width: auto;
          border: solid rgb(63, 12, 12);
          border-width: 0.1em 0.1em 0.1em 0.8em;
          padding: 0.2em 0.6em;
        "
      >
        <pre
          style="margin: 0; line-height: 125%"
        >element.style <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;color:red&quot;</span>;</pre>
      </div>
      <br />
      <p><b>Vous devez utiliser une propriété CSS comme ceci</b></p>
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
        >element.style.backgroundColor <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;red&quot;</span>;</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
