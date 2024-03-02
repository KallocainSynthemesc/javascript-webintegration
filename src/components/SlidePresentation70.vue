<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - insertAfter ???</div>
    <div class="content">
      <p>Pouvez-vous compléter la fonction insertAfter ?</p>
      <MonacoEditor
        code='const postButton &equals; document&period;getElementById&lpar;"post"&rpar;&semi;&NewLine;postButton&period;addEventListener&lpar;"click"&comma; post&rpar;&semi;&NewLine;&NewLine;function post&lpar;&rpar; &lbrace;&NewLine;  const text &equals; prompt&lpar;"Que voulez-vous ajouter &agrave; la liste &quest;"&rpar;&semi;&NewLine;  const newNode &equals; document&period;createElement&lpar;"li"&rpar;&semi;&NewLine;  const textNode &equals; document&period;createTextNode&lpar;text&rpar;&semi;&NewLine;  newNode&period;appendChild&lpar;textNode&rpar;&semi;&NewLine;  const list &equals; document&period;getElementById&lpar;"myList"&rpar;&semi;&NewLine;  insertAfter&lpar;newNode&comma; list&period;children&lbrack;0&rsqb;&rpar;&semi;&NewLine;&rcub;&NewLine;&NewLine;function insertAfter&lpar;newElement&comma; targetElement&rpar; &lbrace;&NewLine;  &sol;&sol;Nous avons besoin d&apos;un if&sol;else ici&NewLine;  &sol;&sol;La propri&eacute;t&eacute; lastChild dont nous avons parl&eacute;&NewLine;  &sol;&sol;pr&eacute;c&eacute;demment peut &eacute;galement &ecirc;tre utile dans cette fonction&period;&NewLine;&rcub;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;ul id&equals;"myList"&gt;&NewLine;        &lt;li&gt;Caf&eacute;&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Th&eacute;&lt;&sol;li&gt;&NewLine;      &lt;&sol;ul&gt;&NewLine;      &lt;button id&equals;"post"&gt;Ajouter &agrave; la liste&lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css=""
        jsindex="84"
        cssindex="85"
        htmlindex="86"
      />
    </div>
  </div>
</template>

<style scoped></style>
