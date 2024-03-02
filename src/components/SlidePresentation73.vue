<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">
      HTML DOM - insertAdjacentElement, insertAdjacentText
    </div>
    <div class="content">
      <MonacoEditor
        code='const postButton &equals; document&period;getElementById&lpar;"post"&rpar;&semi;&NewLine;postButton&period;addEventListener&lpar;"click"&comma; post&rpar;&semi;&NewLine;&NewLine;function post&lpar;&rpar; &lbrace;&NewLine;  const text &equals; prompt&lpar;"Que voulez-vous ajouter &agrave; la liste &quest;"&rpar;&semi;&NewLine;  const newNode &equals; document&period;createElement&lpar;"li"&rpar;&semi;&NewLine;  newNode&period;insertAdjacentText&lpar;"afterbegin"&comma; text&rpar;&semi;&NewLine;  const list &equals; document&period;getElementById&lpar;"myList"&rpar;&semi;&NewLine;  const li &equals; list&period;children&lbrack;1&rsqb;&semi;&NewLine;  li&period;insertAdjacentElement&lpar;"beforebegin"&comma; newNode&rpar;&semi;&NewLine;&rcub;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;ul id&equals;"myList"&gt;&NewLine;        &lt;li&gt;Caf&eacute;&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Th&eacute;&lt;&sol;li&gt;&NewLine;      &lt;&sol;ul&gt;&NewLine;      &lt;button id&equals;"post"&gt;Ajouter &agrave; la liste&lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;'
        css=""
        jsindex="87"
        cssindex="88"
        htmlindex="89"
      />
    </div>
  </div>
</template>

<style scoped></style>
