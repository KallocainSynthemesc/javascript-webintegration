<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - getElementById()</div>
    <div class="content">
      <p>
        L'exemple suivant modifie le contenu (le innerHTML) de l'élément
        &lt;p&gt; avec id="demo" :
      </p>
      <MonacoEditor
        code='document.getElementById("demo").innerHTML = "Hello World!";'
        html='&lt;html&gt;
&lt;body&gt;
  &lt;p id="demo"&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt; '
        css=""
        jsindex="12"
        cssindex="13"
        htmlindex="14"
      />
    </div>
  </div>
</template>

<style scoped></style>
