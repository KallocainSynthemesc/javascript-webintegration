<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - Dynamic styling - className</div>
    <div class="content">
      <p>
        className peut être utilisé pour mettre à jour l'attribut class attaché
        à un élément. De cette façon, CSS et Javascript sont mieux séparés.
      </p>
      <MonacoEditor
        code='const button &equals; document&period;getElementById&lpar;"show"&rpar;&semi;&NewLine;button&period;addEventListener&lpar;"click"&comma; changeVisibility&rpar;&semi;&NewLine;&NewLine;function changeVisibility&lpar;&rpar; &lbrace;&NewLine;  const para &equals; document&period;getElementById&lpar;"dynamic"&rpar;&semi;&NewLine;  if &lpar;para&period;className &equals;&equals;&equals; "hide-p"&rpar; &lbrace;&NewLine;    &sol;&sol;para&period;setAttribute&lpar;"class"&comma; "show-p"&rpar;&semi;&NewLine;    para&period;className &equals; "show-p"&semi;&NewLine;  &rcub; else &lbrace;&NewLine;    &sol;&sol;para&period;setAttribute&lpar;"class"&comma; "hide-p"&rpar;&semi;&NewLine;    para&period;className &equals; "hide-p"&semi;&NewLine;  &rcub;&NewLine;&rcub;&NewLine;&NewLine;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;&NewLine;        Il y a un paragraphe cach&eacute; sur cette page qui appara&icirc;t en cliquant sur&NewLine;        le bouton&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;p id&equals;"dynamic" class&equals;"hide-p"&gt;&NewLine;        Ce paragraphe est initialement cach&eacute; mais s&apos;affiche dynamiquement lors&NewLine;        d&apos;un clic sur le bouton&period;&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;button id&equals;"show"&gt;montrer paragraphe&lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;&NewLine;&NewLine;'
        css="body &lbrace;&NewLine;  font-family&colon; sans-serif&semi;&NewLine;&rcub;&NewLine;&NewLine;&period;show-p &lbrace;&NewLine;  display&colon; block&semi;&NewLine;&rcub;&NewLine;&NewLine;&period;hide-p &lbrace;&NewLine;  display&colon; none&semi;&NewLine;&rcub;&NewLine;&NewLine;&NewLine;"
        jsindex="120"
        cssindex="121"
        htmlindex="122"
      />
    </div>
  </div>
</template>

<style scoped></style>
