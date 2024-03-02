<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - querySelectorAll()</div>
    <div class="content">
      <p>
        Si vous voulez trouver tous les éléments HTML qui correspondent à un
        sélecteur CSS spécifié (id, noms de classe, types, attributs, valeurs
        des attributs, etc.), utilisez la méthode querySelectorAll().
      </p>
      <MonacoEditor
        code='const x = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML = 
&apos;Le premier paragraphe (index 0) avec class="intro" est :&apos; + x[0].innerHTML;'
        html='

&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript HTML DOM&lt;/h2&gt;

&lt;p&gt;Trouver des &eacute;l&eacute;ments HTML par le Query Selector&lt;/p&gt;
&lt;p class="intro"&gt;Bonjour le monde !&lt;/p&gt;
&lt;p class="intro"&gt;Cet exemple d&eacute;montre la m&eacute;thode &lt;b&gt;querySelectorAll&lt;/b&gt;.&lt;/p&gt;
&lt;p id="demo"&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
'
        css=""
        jsindex="21"
        cssindex="22"
        htmlindex="23"
      />
    </div>
  </div>
</template>

<style scoped></style>
