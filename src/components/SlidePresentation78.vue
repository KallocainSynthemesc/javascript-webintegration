<template>
  <div class="slide">
    <div class="heading">HTML DOM - Ce qu'il faut éviter</div>
    <div class="content">
      <p>
        <b
          >Ce n'est pas parce que vous pouvez ajouter du contenu important à une
          page web que vous devez le faire.</b
        >
      </p>
      <br />
      <ol>
        <li>
          Les visiteurs dont le JS est désactivé ne verront pas votre contenu
        </li>
        <li>Les robots d'indexation ont du mal à comprendre votre site</li>
        <li>Le HTML est plus difficile à maintenir</li>
      </ol>
      <br />
      <div class="flex-container">
        <div>
          <p>
            Si vous souhaitez afficher du contenu de manière dynamique, vous
            devez d'abord envisager les CSS. Si cela n'est pas une solution à
            votre problème, vous pouvez commencer à penser à l'injection
            d'éléments avec Javascript.
          </p>
        </div>
        <div>
          <img
            src="../assets/illustrations/css-3-logo.svg"
            style="width: 50%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
