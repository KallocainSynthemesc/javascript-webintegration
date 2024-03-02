<template>
  <div class="slide">
    <div class="heading">HTML DOM - firstChild / lastChild</div>
    <div class="content">
      <p>
        Il existe une façon abrégée d'écrire childNodes[0]. Lorsque vous
        souhaitez obtenir la valeur du premier nœud du tableau childNodes, vous
        pouvez utiliser firstChild
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
        <pre style="margin: 0; line-height: 125%">node.firstChild</pre>
      </div>
      <p>est la même chose que</p>
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
        >node.childNodes[<span style="color: #0000DD; font-weight: bold">0</span>]</pre>
      </div>
      <p>C'est un raccourci élégant et plus facile à lire.</p>
      <br />
      <p>Si vous n'êtes pas encore convaincu, regardez cet exemple.</p>
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
        <pre style="margin: 0; line-height: 125%">node.lastChild</pre>
      </div>
      <p>est la même chose que</p>
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
        >node.childNodes[node.childnodes.length<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>]</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
