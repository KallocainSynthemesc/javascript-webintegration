<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - style property</div>
    <div class="content">
      <p>
        Lorsque nous utilisons la propriété style, nous ne pouvons accéder qu'au
        style défini par le javascript ou le style HTML en ligne.
      </p>
      <MonacoEditor
        code='const paragraph &equals; document&period;getElementsByTagName&lpar;"p"&rpar;&lbrack;0&rsqb;&semi;&NewLine;console&period;log&lpar;paragraph&period;style&period;color&rpar;&semi;&NewLine;console&period;log&lpar;paragraph&period;style&period;fontWeight&rpar;&semi;&NewLine;&sol;&sol;Remarquez que ce n&apos;est pas font-weight mais fontWeight en javascript&NewLine;&NewLine;&sol;&sol;Tous les noms de propri&eacute;t&eacute;s css avec un&NewLine;&sol;&sol;"-" sont en majuscules en javascript sans "-"&period;&NewLine;&sol;&sol;background-color &equals; backgroundColor&NewLine;&sol;&sol;font-family &equals; fontFamily&NewLine;&sol;&sol;text-indent &equals; textIndent&NewLine;&sol;&sol;etc&period;&period;&period;&period;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p style&equals;"color&colon; navy&semi;"&gt;&NewLine;        Ce paragraphe est d&eacute;j&agrave; styl&eacute;&period; Nous pouvons acc&eacute;der &agrave; son style en&NewLine;        javascript&NewLine;      &lt;&sol;p&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css="body &lbrace;&NewLine;  font-family&colon; sans-serif&semi;&NewLine;&rcub;&NewLine;&NewLine;p &lbrace;&NewLine;  text-indent&colon; 30px&semi;&NewLine;  text-transform&colon; uppercase&semi;&NewLine;  font-weight&colon; bold&semi;&NewLine;&rcub;&NewLine;&NewLine;"
        jsindex="102"
        cssindex="103"
        htmlindex="104"
      />
    </div>
  </div>
</template>

<style scoped></style>
