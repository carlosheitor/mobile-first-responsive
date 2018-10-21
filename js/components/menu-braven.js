//IIFE
/* Funcionalidade: Fazer o menu animado
    Passo a passo
        1. Pegar o menu hambúrguer;
        2. Add o evendo de clique no menu;
        3. Pegar o .items;
        4. Add class -active no .items quando o menu for clicado.
*/

'use strict';

(function() {
    const $menuBraven = document.querySelector('.menu-braven');
    const $menu = $menuBraven.querySelector('.menu');
    const $items = $menuBraven.querySelector('.items');

    $menu.addEventListener("click", event => {
        event.preventDefault();

        $items.classList.add("-active");
    });

    $items.addEventListener("click", event => {
        event.preventDefault();

        $items.classList.remove("-active");
    });
    
})();

