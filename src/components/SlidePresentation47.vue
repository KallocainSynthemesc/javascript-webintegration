<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - childNodes</div>
    <div class="content">
      <p>
        nous avons une liste contenant café, thé et lait. Pouvez-vous écrire du
        code JS qui imprimant chaque list item text à la console ? Astuce :
        nodeName et textContent ou innerHTML.
      </p>
      <MonacoEditor
        code='const list &equals; document&period;getElementById&lpar;"list"&rpar;&semi;&NewLine;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;h2&gt;Une liste HTML non ordonn&eacute;e&lt;&sol;h2&gt;&NewLine;&NewLine;    &lt;ul id&equals;"list"&gt;&NewLine;      &lt;li&gt;Caf&eacute;&lt;&sol;li&gt;&NewLine;      &lt;li&gt;Th&eacute;&lt;&sol;li&gt;&NewLine;      &lt;li&gt;Lait&lt;&sol;li&gt;&NewLine;    &lt;&sol;ul&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;'
        css=""
        jsindex="48"
        cssindex="49"
        htmlindex="50"
      />
    </div>
  </div>
</template>

<style scoped></style>
