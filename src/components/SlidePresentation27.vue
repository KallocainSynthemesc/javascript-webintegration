<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - Exemple d'accès simple</div>
    <div class="content">
      <p>
        Le code suivant montre que nous pouvons déjà parcourir notre arbre de
        famille avec un simple accès à la propriété d'un objet
      </p>
      <MonacoEditor
        code="console.log(window.document.title);
console.log(window.document.body);"
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Dom traversalt example&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div id="app"&gt;vérifier la console&lt;/div&gt;
    &lt;script src="src/index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;'
        css=""
        jsindex="6"
        cssindex="7"
        htmlindex="8"
      />
    </div>
  </div>
</template>

<style scoped></style>
