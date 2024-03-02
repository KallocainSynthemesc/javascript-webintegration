<template>
  <div class="slide">
    <div class="heading">HTML DOM - Dynamic styling - classList</div>
    <div class="content">
      <p>
        L'utilisation de classList est une alternative pratique pour accéder à
        la liste des classes d'un élément sous la forme d'une chaîne délimitée
        par des espaces via element.className.
      </p>
      <div class="flex-container">
        <div style="width: 12%">
          <p><b>add()</b></p>
        </div>
        <div style="width: 88%">
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
                      <span style="color: #008800; font-weight: bold">const</span> classes <span style="color: #333333">=</span> p.classList;
                      classes.add(<span style="background-color: #fff0f0">&quot;classname-exemple&quot;</span>);</pre>
          </div>
        </div>
      </div>
      <br />
      <div class="flex-container">
        <div style="width: 12%">
          <p><b>remove()</b></p>
        </div>
        <div style="width: 88%">
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
                      <span style="color: #008800; font-weight: bold">const</span> classes <span style="color: #333333">=</span> p.classList;
                      classes.remove(<span style="background-color: #fff0f0">&quot;classname-exemple&quot;</span>);</pre>
          </div>
        </div>
      </div>
      <br />
      <div class="flex-container">
        <div style="width: 12%">
          <p><b>replace()</b></p>
        </div>
        <div style="width: 88%">
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
                      <span style="color: #008800; font-weight: bold">const</span> classes <span style="color: #333333">=</span> p.classList;
                      <span style="color: #008800; font-weight: bold">const</span> result <span style="color: #333333">=</span> classes.replace(<span style="background-color: #fff0f0">&quot;show-class&quot;</span>, <span style="background-color: #fff0f0">&quot;hide-class&quot;</span>);</pre>
          </div>
        </div>
      </div>
      <br />
      <div class="flex-container">
        <div style="width: 12%">
          <p><b>toggle()</b></p>
        </div>
        <div style="width: 88%">
          <p>
            Je vais ignorer le toggle dans cette section. Je ne l'ai jamais
            utilisé et je ne vois pas comment je pourrais en avoir besoin. Voici
            la
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle"
              >documentation</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
