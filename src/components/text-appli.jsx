import React, { Component } from 'react'

class TextAppli extends Component  {
render () {
return (
    <div>
        <article className="text_appli">
        
        <p><span>Etape 1 : </span>Pour commencer, veuillez entrer votre sélection de lieu en appuyant sur Ajouter.</p><br/>
        <p><span>Etape 2 : </span>Une fois vos ajouts terminés, veuillez cliquer sur mélanger, un lieu aléatoire prenant compte de vos choix va être généré.</p><br/>
        <p className="astuce"><span>Astuce : </span>Vous pouvez également tout remettre à zéro avec le boutton reset.</p>
        
        </article>
    </div>
)
}
}

export default TextAppli