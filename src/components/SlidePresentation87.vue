<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - Dynamic styling</div>
    <div class="content">
      <p>
        Pour une chose aussi simple, nous n'avons même pas besoin de javascript!
      </p>
      <MonacoEditor
        code=""
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;&NewLine;        Il y a un paragraphe cach&eacute; sur cette page qui appara&icirc;t en cliquant sur&NewLine;        le bouton&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;div id&equals;"checkboxes"&gt;&NewLine;        &lt;label class&equals;"background" for&equals;"r1"&gt;Cliquez sur moi&lt;&sol;label&gt;&NewLine;        &lt;input type&equals;"checkbox" value&equals;"1" id&equals;"r1" checked&equals;"checked" &sol;&gt;&NewLine;        &lt;p&gt;&NewLine;          &lt;span style&equals;"color&colon; red&semi;"&gt;C&apos;est magique&excl;&excl;&excl;&lt;&sol;span&gt;&NewLine;          Il s&apos;agit d&apos;un sujet assez avanc&eacute;&comma; alors ne vous inqui&eacute;tez pas si cela&NewLine;          vous semble difficile pour l&apos;instant&period;Avec plus d&apos;exp&eacute;rience&comma; vous&NewLine;          verrez quand utiliser javascript et quand vous pouvez vous en passer&period;&NewLine;        &lt;&sol;p&gt;&NewLine;      &lt;&sol;div&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css='body &lbrace;&NewLine;  font-family&colon; sans-serif&semi;&NewLine;&rcub;&NewLine;&NewLine;&num;checkboxes input&colon;checked &plus; p &lbrace;&NewLine;  display&colon; none&semi;&NewLine;&rcub;&NewLine;&NewLine;&period;background &lbrace;&NewLine;  background-color&colon; navy&semi;&NewLine;  display&colon; inline-block&semi;&NewLine;  width&colon; 25&percnt;&semi;&NewLine;  height&colon; 1&period;5em&semi;&NewLine;  cursor&colon; pointer&semi;&NewLine;  color&colon; white&semi;&NewLine;&rcub;&NewLine;&NewLine;&num;checkboxes input&lbrack;type&equals;"checkbox"&rsqb; &lbrace;&NewLine;  display&colon; none&semi;&NewLine;&rcub;&NewLine;&NewLine;'
        jsindex="117"
        cssindex="118"
        htmlindex="119"
      />
    </div>
  </div>
</template>

<style scoped></style>
