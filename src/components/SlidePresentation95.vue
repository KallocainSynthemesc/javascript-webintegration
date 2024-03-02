<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">Web javascript - exercice</div>
    <div class="content">
      <p>pouvez-vous m'écrire un site web de liste de choses à faire ?</p>
      <MonacoEditor
        code=""
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link&NewLine;      rel&equals;"stylesheet"&NewLine;      href&equals;"&sol;&sol;netdna&period;bootstrapcdn&period;com&sol;bootstrap&sol;3&period;0&period;3&sol;css&sol;bootstrap-theme&period;min&period;css"&NewLine;    &sol;&gt;&NewLine;    &lt;link&NewLine;      rel&equals;"stylesheet"&NewLine;      href&equals;"&sol;&sol;netdna&period;bootstrapcdn&period;com&sol;bootstrap&sol;3&period;0&period;3&sol;css&sol;bootstrap&period;min&period;css"&NewLine;    &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div class&equals;"form-group"&gt;&NewLine;      &lt;h1&gt;To-Do &lt;small&gt;List&lt;&sol;small&gt;&lt;&sol;h1&gt;&NewLine;      &lt;form role&equals;"form"&gt;&NewLine;        &lt;input&NewLine;          type&equals;"text"&NewLine;          class&equals;"form-control"&NewLine;          placeholder&equals;"Votre t&acirc;che"&NewLine;          name&equals;"task"&NewLine;          id&equals;"todoinput"&NewLine;        &sol;&gt;&NewLine;      &lt;&sol;form&gt;&NewLine;      &lt;button id&equals;"button" type&equals;"button" class&equals;"btn btn btn-primary"&gt;&NewLine;        Ajouter&NewLine;      &lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;    &lt;div&gt;&lt;&sol;div&gt;&NewLine;    &lt;ul class&equals;"list-unstyled" id&equals;"todo"&gt;&NewLine;      &lt;li&gt;exemple&lt;&sol;li&gt;&NewLine;    &lt;&sol;ul&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css="form &lbrace;&NewLine;  display&colon; inline-block&semi;&NewLine;&rcub;&NewLine;&period;form-group &lbrace;&NewLine;  text-align&colon; center&semi;&NewLine;  padding-bottom&colon; 25px&semi;&NewLine;&rcub;&NewLine;&num;todo &lbrace;&NewLine;  margin&colon; 0 auto&semi;&NewLine;  width&colon; 500px&semi;&NewLine;&rcub;&NewLine;&NewLine;a&period;close &lbrace;&NewLine;  float&colon; right&semi;&NewLine;&rcub;&NewLine;&NewLine;"
        jsindex="132"
        cssindex="133"
        htmlindex="134"
      />
    </div>
  </div>
</template>

<style scoped></style>
