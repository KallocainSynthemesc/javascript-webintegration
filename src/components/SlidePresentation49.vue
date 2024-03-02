<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - nodeType</div>
    <div class="content">
      <p>
        Pouvez-vous imprimer sur la console tous les noeuds enfants qui sont
        dans l'élément body et qui sont de type "element" ?
      </p>
      <MonacoEditor
        code="const nodes &equals; document&period;body&period;childNodes&semi;&NewLine;&NewLine;for &lpar;let node of nodes&rpar; &lbrace;&NewLine;&rcub;&NewLine;&NewLine;&NewLine;"
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;h1&gt;LnodeType property&lt;&sol;h1&gt;&NewLine;    &lt;h2&gt;renvoie une valeur num&eacute;rique lorsqu&apos;il est appel&eacute;&lt;&sol;h2&gt;&NewLine;    &lt;ul&gt;&NewLine;      &lt;li&gt;Les n&oelig;uds des &lt;b&gt;Elements&lt;&sol;b&gt; ont une valeur nodeType de &lt;b&gt;1&lt;&sol;b&gt;&lt;&sol;li&gt;&NewLine;      &lt;li&gt;Les n&oelig;uds d&apos;&lt;b&gt;Attribute&lt;&sol;b&gt; ont une valeur nodeType de &lt;b&gt;2&lt;&sol;b&gt;&lt;&sol;li&gt;&NewLine;      &lt;li&gt;Les n&oelig;uds de &lt;b&gt;Text&lt;&sol;b&gt; ont une valeur nodeType de &lt;b&gt;3&lt;&sol;b&gt;&lt;&sol;li&gt;&NewLine;    &lt;&sol;ul&gt;&NewLine;&NewLine;    &lt;p id&equals;"demo"&gt;&lt;&sol;p&gt;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;'
        css=""
        jsindex="51"
        cssindex="52"
        htmlindex="53"
      />
    </div>
  </div>
</template>

<style scoped></style>
