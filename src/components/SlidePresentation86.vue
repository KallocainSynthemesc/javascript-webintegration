<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - Dynamic styling</div>
    <div class="content">
      <p style="color: red">
        Une approche plus moderne. Pas d'inquiétude si ce n'est pas
        immédiatement clair
      </p>
      <MonacoEditor
        code='const button &equals; document&period;getElementById&lpar;"show"&rpar;&semi;&NewLine;button&period;addEventListener&lpar;"click"&comma; changeVisibility&rpar;&semi;&NewLine;&NewLine;function changeVisibility&lpar;&rpar; &lbrace;&NewLine;  const para &equals; document&period;getElementById&lpar;"dynamic"&rpar;&semi;&NewLine;  para&period;dataset&period;show &equals; para&period;dataset&period;show &equals;&equals;&equals; "false" &quest; "true" &colon; "false"&semi;&NewLine;&rcub;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;&NewLine;        Il y a un paragraphe cach&eacute; sur cette page qui appara&icirc;t en cliquant sur&NewLine;        le bouton&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;p id&equals;"dynamic" data-show&equals;"false"&gt;&NewLine;        Ce paragraphe est initialement cach&eacute; mais s&apos;affiche dynamiquement lors&NewLine;        d&apos;un clic sur le bouton&period;&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;button id&equals;"show"&gt;montrer paragraphe&lt;&sol;button&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css='body &lbrace;&NewLine;  font-family&colon; sans-serif&semi;&NewLine;&rcub;&NewLine;&NewLine;p&lbrack;data-show&equals;"false"&rsqb; &lbrace;&NewLine;  display&colon; none&semi;&NewLine;&rcub;&NewLine;&NewLine;p&lbrack;data-show&equals;"true"&rsqb; &lbrace;&NewLine;  display&colon; block&semi;&NewLine;&rcub;&NewLine;&NewLine;'
        jsindex="114"
        cssindex="115"
        htmlindex="116"
      />
    </div>
  </div>
</template>

<style scoped></style>
