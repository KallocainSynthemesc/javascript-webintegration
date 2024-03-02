<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - quand utiliser le style DOM</div>
    <div class="content">
      <p style="color: red">
        Ce n'est pas parce que vous pouvez définir les css en javascript/inline
        que vous devez le faire.
      </p>
      <MonacoEditor
        code='const button &equals; document&period;getElementById&lpar;"show"&rpar;&semi;&NewLine;button&period;addEventListener&lpar;"click"&comma; changeVisibility&rpar;&semi;&NewLine;&NewLine;function changeVisibility&lpar;&rpar; &lbrace;&NewLine;  const para &equals; document&period;getElementById&lpar;"dynamic"&rpar;&semi;&NewLine;  const state &equals; window&period;getComputedStyle&lpar;para&comma; null&rpar;&semi;&NewLine;  if &lpar;state&period;getPropertyValue&lpar;"display"&rpar; &equals;&equals;&equals; "none"&rpar; &lbrace;&NewLine;    para&period;style&period;display &equals; "block"&semi;&NewLine;  &rcub; else &lbrace;&NewLine;    para&period;style&period;display &equals; "none"&semi;&NewLine;  &rcub;&NewLine;&rcub;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;&NewLine;        Il y a un paragraphe cach&eacute; sur cette page qui appara&icirc;t en cliquant sur&NewLine;        le bouton&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;p id&equals;"dynamic"&gt;&NewLine;        Ce paragraphe est initialement cach&eacute; mais s&apos;affiche dynamiquement lors&NewLine;        d&apos;un clic sur le bouton&period;&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;button id&equals;"show"&gt;montrer paragraphe&lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css="body &lbrace;&NewLine;  font-family&colon; sans-serif&semi;&NewLine;&rcub;&NewLine;&NewLine;&num;dynamic &lbrace;&NewLine;  display&colon; none&semi;&NewLine;&rcub;&NewLine;&NewLine;"
        jsindex="111"
        cssindex="112"
        htmlindex="113"
      />
    </div>
  </div>
</template>

<style scoped></style>
