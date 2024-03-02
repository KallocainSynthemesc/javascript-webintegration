<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - Nodes</div>
    <div class="content">
      <p>
        Cet exemple montre qu'il est possible d'accéder au nœud d'attribut et au
        nœud de texte d'une manière assez simple.
      </p>
      <MonacoEditor
        code="console.log(window.document.body.firstElementChild.title);
console.log(window.document.body.firstElementChild.textContent);"
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
	&lt;title&gt;Kilian Sandbox&lt;/title&gt;
	&lt;meta charset="UTF-8" /&gt;
&lt;/head&gt;

&lt;body&gt;
	&lt;p title="le titre est un attribut node"&gt;Ceci est un exemple de texte&lt;/p&gt;
	&lt;script src="src/index.js"&gt;
	&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;'
        css=""
        jsindex="9"
        cssindex="10"
        htmlindex="11"
      />
    </div>
  </div>
</template>

<style scoped></style>
