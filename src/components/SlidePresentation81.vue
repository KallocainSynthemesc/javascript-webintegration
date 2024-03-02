<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - style property</div>
    <div class="content">
      <MonacoEditor
        code='const paragraph &equals; document&period;getElementsByTagName&lpar;"p"&rpar;&lbrack;0&rsqb;&semi;&NewLine;paragraph&period;style&period;color &equals; "red"&semi;&NewLine;paragraph&period;style&period;fontWeight &equals; "bold"&semi;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;nous allons styliser ce paragraphe&lt;&sol;p&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;'
        css=""
        jsindex="99"
        cssindex="100"
        htmlindex="101"
      />
    </div>
  </div>
</template>

<style scoped></style>
