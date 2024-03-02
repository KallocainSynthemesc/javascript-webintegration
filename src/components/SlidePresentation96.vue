<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">Web javascript - exercice</div>
    <div class="content">
      <p>
        J'ai commencé à écrire un jeu de pierre-papier-ciseaux. Pouvez-vous le
        compléter ?
      </p>
      <MonacoEditor
        code='const spans &equals; document&period;querySelectorAll&lpar;"&num;player span"&rpar;&semi;&NewLine;const pc &equals; document&period;querySelector&lpar;"&num;pc"&rpar;&semi;&NewLine;const msg &equals; document&period;querySelector&lpar;"p"&rpar;&semi;&NewLine;var target&semi;&NewLine;&NewLine;for &lpar;var span of spans&rpar; &lbrace;&NewLine;  span&period;addEventListener&lpar;"click"&comma; clicked&rpar;&semi;&NewLine;&rcub;&NewLine;&NewLine;function clicked&lpar;event&rpar; &lbrace;&NewLine;  if &lpar;&excl;document&period;body&period;classList&period;contains&lpar;"noclick"&rpar;&rpar; &lbrace;&NewLine;    document&period;body&period;classList&period;add&lpar;"noclick"&rpar;&semi;&NewLine;    target &equals; event&period;target&semi;&NewLine;    for &lpar;var span of spans&rpar; &lbrace;&NewLine;      if &lpar;target &excl;&equals;&equals; span&rpar; &lbrace;&NewLine;        span&period;classList&period;add&lpar;"hidden"&rpar;&semi;&NewLine;      &rcub;&NewLine;    &rcub;&NewLine;    var random &equals; parseInt&lpar;Math&period;random&lpar;&rpar; &ast; 3&comma; 10&rpar;&semi;&NewLine;    pc&period;textContent &equals; spans&lbrack;random&rsqb;&period;textContent&semi;&NewLine;    pc&period;dataset&period;id &equals; spans&lbrack;random&rsqb;&period;id&semi;&NewLine;    pc&period;classList&period;remove&lpar;"hidden"&rpar;&semi;&NewLine;    results&lpar;&rpar;&semi;&NewLine;  &rcub;&NewLine;&rcub;&NewLine;&NewLine;function results&lpar;&rpar; &lbrace;&NewLine;  &sol;&sol;mettre la logique ici pour montrer le r&eacute;sultat&NewLine;&rcub;&NewLine;function reset&lpar;&rpar; &lbrace;&NewLine;  &sol;&sol;mettre la logique ici pour r&eacute;initialiser le r&eacute;sultat&period;&NewLine;&rcub;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;    &lt;link rel&equals;"stylesheet" href&equals;"&period;&sol;src&sol;styles&period;css" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;span id&equals;"pc" class&equals;"hidden"&gt;✊&lt;&sol;span&gt;&NewLine;    &lt;div id&equals;"player"&gt;&NewLine;      &lt;span id&equals;"rock"&gt;✊&lt;&sol;span&gt;&NewLine;      &lt;span id&equals;"paper"&gt;🤚&lt;&sol;span&gt;&NewLine;      &lt;span id&equals;"scissor"&gt;✌️&lt;&sol;span&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;    &lt;p class&equals;"hidden"&gt;You Win&excl;&lt;&sol;p&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css="body &lbrace;&NewLine;  display&colon; grid&semi;&NewLine;  place-content&colon; center&semi;&NewLine;  height&colon; 100vh&semi;&NewLine;  font-size&colon; 80px&semi;&NewLine;  background&colon; &num;333&semi;&NewLine;  overflow&colon; hidden&semi;&NewLine;  min-width&colon; 300px&semi;&NewLine;  user-select&colon; none&semi;&NewLine;&rcub;&NewLine;&num;player span &lbrace;&NewLine;  cursor&colon; pointer&semi;&NewLine;  transition&colon; opacity 0&period;5s&semi;&NewLine;  opacity&colon; 1&semi;&NewLine;&rcub;&NewLine;&num;player span&period;hidden &lbrace;&NewLine;  opacity&colon; 0&semi;&NewLine;&rcub;&NewLine;&num;pc &lbrace;&NewLine;  position&colon; absolute&semi;&NewLine;  top&colon; 40px&semi;&NewLine;  left&colon; calc&lpar;50vw - 40px&rpar;&semi;&NewLine;  transform&colon; rotate&lpar;180deg&rpar;&semi;&NewLine;  transition&colon; top 0&period;5s&semi;&NewLine;&rcub;&NewLine;&num;pc&period;hidden &lbrace;&NewLine;  top&colon; -120px&semi;&NewLine;&rcub;&NewLine;p &lbrace;&NewLine;  position&colon; absolute&semi;&NewLine;  width&colon; 100vw&semi;&NewLine;  text-align&colon; center&semi;&NewLine;  bottom&colon; 40px&semi;&NewLine;  margin&colon; 0&semi;&NewLine;  color&colon; &num;fff&semi;&NewLine;  transition&colon; bottom 0&period;5s&semi;&NewLine;&rcub;&NewLine;p&period;hidden &lbrace;&NewLine;  bottom&colon; -200px&semi;&NewLine;&rcub;&NewLine;"
        jsindex="135"
        cssindex="136"
        htmlindex="137"
      />
    </div>
  </div>
</template>

<style scoped></style>
