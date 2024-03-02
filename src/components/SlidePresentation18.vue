<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - O comme Object - Window host object</div>
    <div class="content">
      <p>
        L'objet <b>window</b> est une représentation de la fenêtre du navigateur
        elle-même. Les propriétés et les méthodes de l'objet <b>window</b> sont
        souvent appelées <b>Browser Object Model</b>.
      </p>
      <MonacoEditor
        code='let sign = window.prompt(
  "exemple d&apos;invite. tapez ce que vous voulez, cela n&apos;a pas d&apos;importance. "
);
window.print(window.document.title);
window.alert("sup");'
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
    &lt;title&gt;Document&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;main&gt;
      &lt;h1&gt;Apples&lt;/h1&gt;
      &lt;p&gt;The apple is the pomaceous fruit of the apple tree.&lt;/p&gt;
      &lt;article&gt;
        &lt;h2&gt;Red Delicious&lt;/h2&gt;
        &lt;p&gt;
          These bright red apples are the most common found in many
          supermarkets.
        &lt;/p&gt;
        &lt;p&gt;&hellip;&lt;/p&gt;
        &lt;p&gt;&hellip;&lt;/p&gt;
      &lt;/article&gt;
    &lt;/main&gt;
  &lt;/body&gt;
&lt;/html&gt;'
        css=""
        jsindex="0"
        cssindex="1"
        htmlindex="2"
      />
    </div>
  </div>
</template>

<style scoped></style>
