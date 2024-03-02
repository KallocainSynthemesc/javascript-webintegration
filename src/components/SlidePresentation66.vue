<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - exercice</div>
    <div class="content">
      <MonacoEditor
        code='const postButton &equals; document&period;getElementById&lpar;"post"&rpar;&semi;&NewLine;const container &equals; document&period;getElementById&lpar;"container"&rpar;&semi;&NewLine;postButton&period;addEventListener&lpar;"click"&comma; post&rpar;&semi;&NewLine;&NewLine;function post&lpar;&rpar; &lbrace;&NewLine;  const text &equals; prompt&lpar;"Que voulez-vous poster &quest;"&rpar;&semi;&NewLine;&rcub;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;h3&gt;Mon blog&lt;&sol;h3&gt;&NewLine;      &lt;button id&equals;"post"&gt;cr&eacute;er un poste&lt;&sol;button&gt;&NewLine;      &lt;div id&equals;"container"&gt;&lt;&sol;div&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css='html&comma;&NewLine;body &lbrace;&NewLine;  background-color&colon; &num;ecf0f1&semi;&NewLine;&rcub;&NewLine;div &lbrace;&NewLine;  width&colon; 300px&semi;&NewLine;  margin&colon; 0 auto&semi;&NewLine;&rcub;&NewLine;h3 &lbrace;&NewLine;  width&colon; 300px&semi;&NewLine;  text-align&colon; center&semi;&NewLine;  color&colon; &num;2980b9&semi;&NewLine;&rcub;&NewLine;textarea &lbrace;&NewLine;  width&colon; 300px&semi;&NewLine;  height&colon; 80px&semi;&NewLine;&rcub;&NewLine;textarea&colon;&colon;-webkit-input-placeholder&colon;&colon;after &lbrace;&NewLine;  display&colon; block&semi;&NewLine;  content&colon; "Second line &bsol;A Third line&bsol;A You get the picture&period;&period;&period;"&semi;&NewLine;&rcub;&NewLine;'
        jsindex="78"
        cssindex="79"
        htmlindex="80"
      />
    </div>
  </div>
</template>

<style scoped></style>
