<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">
      HTML DOM -
      <a
        href="https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle"
        >window.getComputedStyle()</a
      >
    </div>
    <div class="content">
      <p>
        La méthode donne la valeur calculée finale de toutes les propriétés CSS
        sur un élément.
      </p>
      <MonacoEditor
        code='const paragraph &equals; document&period;getElementsByTagName&lpar;"p"&rpar;&lbrack;0&rsqb;&semi;&NewLine;const css &equals; window&period;getComputedStyle&lpar;paragraph&comma; null&rpar;&semi;&NewLine;const color &equals; css&period;getPropertyValue&lpar;"color"&rpar;&semi;&NewLine;const textTransform &equals; css&period;getPropertyValue&lpar;"text-transform"&rpar;&semi;&NewLine;const textIndent &equals; css&period;getPropertyValue&lpar;"text-indent"&rpar;&semi;&NewLine;console&period;log&lpar;color&rpar;&semi;&NewLine;console&period;log&lpar;textTransform&rpar;&semi;&NewLine;console&period;log&lpar;textIndent&rpar;&semi;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;&NewLine;        Ce paragraphe est d&eacute;j&agrave; styl&eacute;&period; Nous pouvons acc&eacute;der &agrave; son style en&NewLine;        javascript&NewLine;      &lt;&sol;p&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;'
        css="body &lbrace;&NewLine;  font-family&colon; sans-serif&semi;&NewLine;&rcub;&NewLine;&NewLine;p &lbrace;&NewLine;  text-indent&colon; 30px&semi;&NewLine;  text-transform&colon; uppercase&semi;&NewLine;  font-weight&colon; bold&semi;&NewLine;  color&colon; navy&semi;&NewLine;&rcub;&NewLine;"
        jsindex="105"
        cssindex="106"
        htmlindex="107"
      />
    </div>
  </div>
</template>

<style scoped></style>
