<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - cloneNode</div>
    <div class="content">
      <p>
        J'ai oublié d'acheter du lait le mardi, pouvez-vous cloner le list item
        (lait) sur la liste des courses du vendredi ?
      </p>
      <MonacoEditor
        code='const postButton &equals; document&period;getElementById&lpar;"clone"&rpar;&semi;&NewLine;postButton&period;addEventListener&lpar;"click"&comma; clone&rpar;&semi;&NewLine;&NewLine;function clone&lpar;&rpar; &lbrace;&NewLine;  &sol;&sol;mettre la logique de clonage ici&NewLine;&rcub;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;liste de courses mardi&lt;&sol;p&gt;&NewLine;      &lt;ul id&equals;"mardi"&gt;&NewLine;        &lt;li&gt;Caf&eacute;&lt;&sol;li&gt;&NewLine;        &lt;li id&equals;"lait"&gt;Lait&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Pain&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Tomate&lt;&sol;li&gt;&NewLine;      &lt;&sol;ul&gt;&NewLine;      &lt;br &sol;&gt;&NewLine;      &lt;p&gt;liste des courses du vendredi&lt;&sol;p&gt;&NewLine;      &lt;ul id&equals;"vendredi"&gt;&NewLine;        &lt;li&gt;Poulet&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Chou&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Riz&lt;&sol;li&gt;&NewLine;      &lt;&sol;ul&gt;&NewLine;&NewLine;      &lt;p&gt;&NewLine;        J&apos;ai oubli&eacute; d&apos;acheter du &lt;b&gt;lait&lt;&sol;b&gt; le mardi&comma; pouvez-vous cloner le&NewLine;        list item sur la liste des courses du vendredi &quest;&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;button id&equals;"clone"&gt;clone&lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css=""
        jsindex="90"
        cssindex="91"
        htmlindex="92"
      />
    </div>
  </div>
</template>

<style scoped></style>
