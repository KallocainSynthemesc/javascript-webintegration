<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">Event handlers</div>
    <div class="content">
      <p>
        Les événements HTML sont des "choses" qui arrivent aux éléments HTML.
        Lorsque JavaScript est utilisé dans les pages HTML, il peut "réagir" à
        ces événements.
      </p>
      <MonacoEditor
        code='//Attacher la fonction aux window n&apos;est n&eacute;cessaire que pour ce sandbox.
window.showTime = function () {
  const demo = document.getElementById("demo");
  demo.textContent = new Date();
};'
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Parcel Sandbox&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;button onclick="showTime()"&gt;
      Quelle heure est-il ?
    &lt;/button&gt;

    &lt;p id="demo"&gt;&lt;/p&gt;

    &lt;script src="src/index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
'
        css=""
        jsindex="33"
        cssindex="34"
        htmlindex="35"
      />
    </div>
  </div>
</template>

<style scoped></style>
