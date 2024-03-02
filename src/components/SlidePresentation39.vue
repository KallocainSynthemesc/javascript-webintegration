<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - setAttribute</div>
    <div class="content">
      <p>
        pouvez-vous changer le titre de mon paragraphe avec la méthode
        setAttribute ?
      </p>
      <MonacoEditor
        code='const paragraph = document.getElementsByClassName("paragraphe")[0];'
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Kilian Sandbox&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;link rel="stylesheet" href="./src/styles.css" /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;h1&gt;Ce qu&apos;il faut acheter&lt;/h1&gt;
    &lt;p class="paragraphe" title="un petit rappel"&gt;
      N&apos;oubliez pas d&apos;acheter ces trucs
    &lt;/p&gt;
    &lt;ul id="purchases"&gt;
      &lt;li&gt;Une bo&icirc;te de haricots&lt;/li&gt;
      &lt;li&gt;fromage&lt;/li&gt;
      &lt;li&gt;Lait&lt;/li&gt;
    &lt;/ul&gt;

    &lt;script src="src/index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
'
        css=""
        jsindex="30"
        cssindex="31"
        htmlindex="32"
      />
    </div>
  </div>
</template>

<style scoped></style>
