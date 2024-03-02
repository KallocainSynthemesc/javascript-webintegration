<template>
  <div class="slide">
    <div class="heading">HTML DOM - nodeValue</div>
    <div class="content">
      <p>
        Si vous souhaitez modifier la valeur d'un nœud de texte, il existe une
        propriété DOM appelée nodeValue qui peut être utilisée pour obtenir (et
        définir) la valeur d'un nœud.
      </p>
      <div class="flex-container">
        <div>
          <br />
          <p>
            Il y a cependant un hic. Si vous obtenez par exemple un élément
            comme &lt;p&gt;, vous ne pouvez pas accéder directement au texte
            avec nodeValue parce que le texte est contenu dans un élément enfant
            de type text.
          </p>
        </div>
        <div>
          <img
            src="../assets/illustrations/attributeNodeDia.svg"
            style="width: 90%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
