<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - replaceChild</div>
    <div class="content">
      <p>
        La méthode replaceChild() remplace un nœud enfant par un nouveau nœud.
      </p>
      <MonacoEditor
        code='const postButton &equals; document&period;getElementById&lpar;"replace"&rpar;&semi;&NewLine;postButton&period;addEventListener&lpar;"click"&comma; replace&rpar;&semi;&NewLine;&NewLine;function replace&lpar;&rpar; &lbrace;&NewLine;  const li &equals; document&period;createElement&lpar;"li"&rpar;&semi;&NewLine;  li&period;textContent &equals; "l&apos;eau"&semi;&NewLine;  const lait &equals; document&period;getElementById&lpar;"lait"&rpar;&semi;&NewLine;  const list &equals; lait&period;parentElement&semi;&NewLine;  list&period;replaceChild&lpar;li&comma; lait&rpar;&semi;&NewLine;&rcub;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;liste de courses mardi&lt;&sol;p&gt;&NewLine;      &lt;ul id&equals;"mardi"&gt;&NewLine;        &lt;li&gt;Caf&eacute;&lt;&sol;li&gt;&NewLine;        &lt;li id&equals;"lait"&gt;Lait&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Pain&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Tomate&lt;&sol;li&gt;&NewLine;      &lt;&sol;ul&gt;&NewLine;&NewLine;      &lt;p&gt;&NewLine;        Je veux remplacer le lait par de l&apos;eau&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;button id&equals;"replace"&gt;replace&lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css=""
        jsindex="93"
        cssindex="94"
        htmlindex="95"
      />
    </div>
  </div>
</template>

<style scoped></style>
