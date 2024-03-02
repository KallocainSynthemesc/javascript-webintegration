<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - O comme Object - BOM</div>
    <div class="content">
      <MonacoEditor
        code='document.getElementById("p1").textContent =
  "Langue du navigateur : " + navigator.language;

document.getElementById("p2").textContent =
  "Cookies autoris&eacute;s : " + navigator.cookieEnabled;

document.getElementById("p3").textContent =
  "Plateforme utilis&eacute;e : " + navigator.platform;

//geolocation : retourne un objet Geolocation qui
//peut &ecirc;tre utilis&eacute; pour d&eacute;finir la localisation de l&rsquo;utilisateur ;
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(pos) {
  document.getElementById("p4").textContent = pos.coords.latitude;
  document.getElementById("p5").textContent = pos.coords.longitude;
}
'
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Kilian Sandbox&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div id="app"&gt;
      &lt;p id="p1"&gt;&lt;/p&gt;
      &lt;p id="p2"&gt;&lt;/p&gt;
      &lt;p id="p3"&gt;&lt;/p&gt;
      &lt;p id="p4"&gt;&lt;/p&gt;
      &lt;p id="p5"&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;script src="src/index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
'
        css=""
        jsindex="3"
        cssindex="4"
        htmlindex="5"
      />
    </div>
  </div>
</template>

<style scoped></style>
