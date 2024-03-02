<template>
  <div class="slide">
    <div class="heading">HTML DOM - O comme Object</div>
    <div class="content">
      <p>Dans le cours Algorithme javascript, je vous ai montré les objets.</p>
      <p>Il existe trois types d'objets différents en javascript.</p>
      <ol>
        <li>Objets définis par l'utilisateur. On a fait ça</li>
        <li>Objets natifs comme Array, Math, Date. On a fait ça</li>
        <li>
          <b>Objet hôte qui est défini par le navigateur. Wow c'est nouveau!</b>
        </li>
      </ol>
      <br />
      <p>Exemple: Objets définis par l'utilisateur</p>
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
                  <span style="color: #008800; font-weight: bold">const</span> person <span style="color: #333333">=</span> {
                    firstName<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Kilian&quot;</span>,
                    lastName<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Schropp&quot;</span>,
                    age<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">28</span>,
                    eyeColor<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;brown&quot;</span>
                  };</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
