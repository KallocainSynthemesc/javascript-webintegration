<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - childNodes</div>
    <div class="content">
      <p>
        La propriété childNodes est un moyen d'obtenir des informations sur les
        enfants de n'importe quel élément dans l'arborescence des nœuds d'un
        document. nodeName me donne le nom de l'élément. Donc pour &lt;p&gt;, ce
        serait "P".
      </p>
      <MonacoEditor
        code='const nodeList &equals; document&period;body&period;childNodes&semi;&NewLine;&NewLine;let text &equals; ""&semi;&NewLine;for &lpar;let node of nodeList&rpar; &lbrace;&NewLine;  text &plus;&equals; node&period;nodeName &plus; "&lt;br&gt;"&semi;&NewLine;&rcub;&NewLine;document&period;getElementById&lpar;"demo"&rpar;&period;innerHTML &equals; text&semi;&NewLine;&NewLine;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;  &lt;body&gt;&NewLine;    &lt;h1&gt;L&apos;objet &Eacute;l&eacute;ment&lt;&sol;h1&gt;&NewLine;    &lt;h2&gt;La propri&eacute;t&eacute; childNodes&lt;&sol;h2&gt;&NewLine;    &lt;p&gt;&NewLine;      Les espaces blancs entre les &eacute;l&eacute;ments sont des n&oelig;uds de texte&period; Les&NewLine;      commentaires sont &eacute;galement des n&oelig;uds&period;&NewLine;    &lt;&sol;p&gt;&NewLine;&NewLine;    &lt;p&gt;Les noeuds enfants de l&apos;&eacute;l&eacute;ment body sont &colon;&lt;&sol;p&gt;&NewLine;    &lt;p id&equals;"demo"&gt;&lt;&sol;p&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;'
        css=""
        jsindex="45"
        cssindex="46"
        htmlindex="47"
      />
    </div>
  </div>
</template>

<style scoped></style>
