<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - removeChild</div>
    <div class="content">
      <p>
        Pour supprimer totalement un nœud du DOM, on peut déjà utiliser la
        méthode removeChild() de Node qui va supprimer un nœud enfant passé en
        argument d'un certain nœud parent de l'arborescence du DOM et retourner
        le nœud retiré.
      </p>
      <MonacoEditor
        code='const postButton &equals; document&period;getElementById&lpar;"remove"&rpar;&semi;&NewLine;postButton&period;addEventListener&lpar;"click"&comma; remove&rpar;&semi;&NewLine;&NewLine;function remove&lpar;&rpar; &lbrace;&NewLine;  const lait &equals; document&period;getElementById&lpar;"lait"&rpar;&semi;&NewLine;  const list &equals; lait&period;parentElement&semi;&NewLine;  list&period;removeChild&lpar;lait&rpar;&semi;&NewLine;&rcub;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;liste de courses mardi&lt;&sol;p&gt;&NewLine;      &lt;ul id&equals;"mardi"&gt;&NewLine;        &lt;li&gt;Caf&eacute;&lt;&sol;li&gt;&NewLine;        &lt;li id&equals;"lait"&gt;Lait&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Pain&lt;&sol;li&gt;&NewLine;        &lt;li&gt;Tomate&lt;&sol;li&gt;&NewLine;      &lt;&sol;ul&gt;&NewLine;&NewLine;      &lt;p&gt;&NewLine;        J&apos;ai mis le lait dans le panier et je veux donc le supprimer de ma liste&NewLine;        de courses&period;&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;button id&equals;"remove"&gt;remove&lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css=""
        jsindex="96"
        cssindex="97"
        htmlindex="98"
      />
    </div>
  </div>
</template>

<style scoped></style>
