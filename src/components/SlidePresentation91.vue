<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - Dynamic styling - exercice</div>
    <div class="content">
      <p>
        J'ai ajouté du style au paragraphe et je veux conserver ce style lorsque
        je clique sur le bouton tout en conservant la logique qui permet
        d'afficher et de cacher le paragraphe lors du clic. Pouvez-vous le faire
        fonctionner avec classList ?
      </p>
      <MonacoEditor
        code='const button &equals; document&period;getElementById&lpar;"show"&rpar;&semi;&NewLine;button&period;addEventListener&lpar;"click"&comma; changeVisibility&rpar;&semi;&NewLine;&NewLine;function changeVisibility&lpar;&rpar; &lbrace;&NewLine;  const para &equals; document&period;getElementById&lpar;"dynamic"&rpar;&semi;&NewLine;  &sol;&sol;Vous vous rappelez de includes&lpar;&rpar; &quest; Cela pourrait &ecirc;tre utile ici&NewLine;  if &lpar;para&period;className &equals;&equals;&equals; "hide-p"&rpar; &lbrace;&NewLine;    para&period;className &equals; "show-p"&semi;&NewLine;  &rcub; else &lbrace;&NewLine;    para&period;className &equals; "hide-p"&semi;&NewLine;  &rcub;&NewLine;&rcub;&NewLine;&NewLine;&NewLine;'
        html='&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;&NewLine;        Il y a un paragraphe cach&eacute; sur cette page qui appara&icirc;t en cliquant sur&NewLine;        le bouton&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;p id&equals;"dynamic" class&equals;"hide-p colorful"&gt;&NewLine;        Ce paragraphe est initialement cach&eacute; mais s&apos;affiche dynamiquement lors&NewLine;        d&apos;un clic sur le bouton&period;&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;button id&equals;"show"&gt;montrer paragraphe&lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;&NewLine;&NewLine;s'
        css="body &lbrace;&NewLine;  font-family&colon; sans-serif&semi;&NewLine;&rcub;&NewLine;&NewLine;&period;show-p &lbrace;&NewLine;  display&colon; block&semi;&NewLine;&rcub;&NewLine;&NewLine;&period;hide-p &lbrace;&NewLine;  display&colon; none&semi;&NewLine;&rcub;&NewLine;&NewLine;&period;colorful &lbrace;&NewLine;  color&colon; lightgreen&semi;&NewLine;  background-color&colon; darkblue&semi;&NewLine;&rcub;&NewLine;&NewLine;&NewLine;&NewLine;"
        jsindex="123"
        cssindex="124"
        htmlindex="125"
      />
    </div>
  </div>
</template>

<style scoped></style>
