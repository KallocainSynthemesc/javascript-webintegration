<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - getElementsByTagName()</div>
    <div class="content">
      <p>Cet exemple trouve tous les éléments &lt;p&gt;:</p>
      <MonacoEditor
        code='const element = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = &apos;Le texte du premier paragraphe (indice 0) est le suivant: &apos; + element[0].innerHTML;'
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;h2&gt;JavaScript HTML DOM&lt;/h2&gt;

  &lt;p&gt;Recherche d&apos;&eacute;l&eacute;ments HTML par nom de balise.&lt;/p&gt;
  &lt;p&gt;Cet exemple d&eacute;montre la m&eacute;thode &lt;b&gt;getElementsByTagName&lt;/b&gt;.&lt;/p&gt;
  &lt;p id="demo"&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;'
        css=""
        jsindex="15"
        cssindex="16"
        htmlindex="17"
      />
    </div>
  </div>
</template>

<style scoped></style>
