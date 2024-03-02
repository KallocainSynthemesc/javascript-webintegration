<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - exercice</div>
    <div class="content">
      <p>
        Dans l'exemple suivant, j'ai déjà affiche l'objet avec l'id "purchases".
        Pouvez-vous faire un console.log avec l'élément &lt;h1&gt; et &lt;p&gt;
        ?
      </p>
      <MonacoEditor
        code='const purchases = document.getElementById("purchases");
console.log(purchases);
//Notez que pour l&apos;objet document, je n&apos;ai pas besoin de sp&eacute;cifier window.document.
//Je peux simplement &eacute;crire document

const listItems = purchases.getElementsByTagName("li");
//Remarquez ici que je n&apos;ai pas besoin de commencer par un document.
//Je peux aussi faire une requ&ecirc;te sur un n&oelig;ud !
for (let i = 0; i &lt; listItems.length; i++) {
  console.log(listItems[i]);
}'
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Parcel Sandbox&lt;/title&gt;
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
        jsindex="24"
        cssindex="25"
        htmlindex="26"
      />
    </div>
  </div>
</template>

<style scoped></style>
