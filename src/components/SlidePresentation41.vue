<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">Event handlers</div>
    <div class="content">
      <p>
        Ok cool mais mélanger html et javascript n'est pas la meilleure
        pratique. Spécifier onclick dans le fichier html est déjà un pas dans la
        mauvaise direction. Voici un exemple amélioré.
      </p>
      <MonacoEditor
        code='const dateButton = document.getElementById("dateButton");

//nous utilisons notre bien-aim&eacute; callback ici comme deuxiem parametre
dateButton.addEventListener("click", showDate);
/*dateButton.onclick = function () {
  console.log("in showDate callback");
  const demo = document.getElementById("demo");
  demo.textContent = new Date();
};*/

function showDate() {
  console.log("in showDate callback");
  const demo = document.getElementById("demo");
  demo.textContent = new Date();
}
'
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Parcel Sandbox&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;button id="dateButton"&gt;
      Quelle heure est-il ?
    &lt;/button&gt;

    &lt;p id="demo"&gt;&lt;/p&gt;

    &lt;script src="src/index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
'
        css=""
        jsindex="36"
        cssindex="37"
        htmlindex="38"
      />
    </div>
  </div>
</template>

<style scoped></style>
