// Tableau avec les chemins des images des cartes
const cards = [
    "./Cards/As_biscuit.svg",
    "./Cards/As_arrachide.svg",
    "./Cards/As_macabo.svg",
    "./Cards/As_coeur.svg",

"./Cards/Q_coeur.svg",
"./Cards/Q_macabo.svg",
"./Cards/Q_biscuit.svg",
"./Cards/Q_arrachide.svg",

"./Cards/K_macabo.svg",
"./Cards/K_coeur.svg",
"./Cards/K_biscuit.svg",
"./Cards/K_arachide.svg",

"./Cards/J_macabo.svg",
"./Cards/J_coeur.svg",
"./Cards/J_biscuit.svg",
"./Cards/J_arrachide.svg",


"./Cards/7_biscuit.svg",
"./Cards/7_coeur.svg",
"./Cards/7_macabo.svg",
"./Cards/7_arrachide.svg",

"./Cards/8_arrachide.svg",
"./Cards/8_biscuit.svg",
"./Cards/8_coeur.svg",
"./Cards/8_macabo.svg",

"./Cards/9_arrachide.svg",
"./Cards/9_biscuit.svg",
"./Cards/9_coeur.svg",
"./Cards/9_macabo.svg",

"./Cards/10_arrachide.svg",
"./Cards/10_biscuit.svg",
"./Cards/10_coeur.svg",
"./Cards/10_macabo.svg",

"./Cards/back.svg",

"./Cards/6_macabo.svg",
"./Cards/6_coeur.svg",
"./Cards/6_biscuit.svg",
"./Cards/6_arrachide.svg",

"./Cards/5_macabo.svg",
"./Cards/5_coeur.svg",
"./Cards/5_biscuit.svg",
"./Cards/5_arrachide.svg",

"./Cards/4_macabo.svg",
"./Cards/4_coeur.svg",
"./Cards/4_biscuit.svg",
"./Cards/4_arrachide.svg",

"./Cards/3_macabo.svg",
"./Cards/3_coeur.svg",
"./Cards/3_biscuit.svg",
"./Cards/3_arrachide.svg",

"./Cards/2_arrachide.svg",
"./Cards/2_biscuit.svg",
"./Cards/2_coeur.svg",
"./Cards/2_macabo.svg",
];
// Conteneur pour afficher les cartes
<div id="conteneur"></div>
// Fonction pour créer un élement imge
function createCardElement(cardSrc) {
    const img = document.createElement('img');
    img.src = cardSrc;
    img.classList.add("carte");
    return img;
}
// Fonction qui place toutes les cartes dans le plateau de jeu
function startgame () {
    <div id="game-board"></div>

    cards.forEach(cardSrc => {
        const cardElement = createCardElement(cardSrc);
        board.appendChild(cardElement);
        
    });
}
// Lancement automatique ds que la page est chargée
window.addEventListener('DOMContentLoaded', () => {
    startgame();
});
// Liste des valeurs et couleurs des cartes
 const suits = ['♥', '♦', '♣', '♠'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const values = { 'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13 };
const dossierCartes = './Cards/'; // Dossier contenant les images des cartes
// Création du jeu de 52 cartes
    let deck = [];
    let state = {
        stock: [], // Pioche (le tas fermé en hautà gauche)
        waste: [], // Talon (le tas ouvert à côté de la pioche)
        foundations: [ // Les 4 fondations (en haut à droite: monter chaque couleur de l'As au Roi)
            [],
            [],
            [],
            []
        ],
        tableau: [ // Les 7 colonnes du tableau (au centre)
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ]
    };
couleurs.forEach(couleur => {
    valeurs.forEach(valeur => {
        paquet.push( `${valeur}_de_${couleur}.svg` );
    });
     // Variables temporaires pour le Drag & Drop (gardant en mémoire quelques cartes)
    let draggedCardData = null;
    let draggedFromPileId = null;
    let draggedIndex = -1;
});

        // Fonction afficher les cartes sur la page
        function displayAllCards() {
            const container = document.getElementById("container-cartes");
            document.getElement('contrainer-cartes');
            cards.forEach(src => {
                const img =
                document.createElement('img');
                img.src = src;
                img.classList.add("carte");
                img.style.width = "100px";
                container.appendChild (img);
            });
        }
        // --- Fonctions de base (inchangées) ---

    function createDeck() {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                const color = (suits[i] ===  '♦' || suits[i] === '♥') ? 'black' : 'red';
                 // Création de chaque carte avec ses propriétés
                deck.push({
                    suit: suits[i],
                    rank: ranks[j],
                    value: values[ranks[j]],
                    color: color,
                    faceUp: false,  // Toutes les cartes sont initialement face cachée
                    id: `${ranks[j]}${suits[i]}`  // Identifiant unique pour chaque carte
                });
            }
        }
    }

            if (!container) {
                console.error("Erreur : l'élement #paquet n'existe pas dans le HTML.");
                return;
            }
            container.innerHTML = ""; // Vide le conteneur avant d'ajouter les cartes

            cards.forEach(cardSrc => {
                const cardElement = createCardElement(cardSrc);
                container.appendChild(cardElement);
            });
        

deck.array.forEach(element => {
    const card = createCardElement(Cards);
    document.body.appendChild(card);    
}),

// Au chargement de la page, afficher toutes les cartes
window.addEventListener('DOMContentLoaded', () => {
    // Mélange des cartes
    shuffleDeck(cards);
    // Affiche dans le conteneur "paquet" toutes les cartes
    displayAllCards();
}),

// Mélange un tableau de cartes avec l'algorithme de Fisher-Yates
function shuffleDeck(deck) {
    // On parcourt le paquet à l'envers
    for (let i = deck.length - 1; i > 0; i--) {
        // On choisit un index aléatoire entre 0 et i
        const j = Math.floor(Math.random() * (i + 1));
        // On échange la carte courante avec la carte à l'index aléatoire
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    // On retourne le paquet mélangé
    return deck;
};
    // --- Initialisation et rendu (mises à jour) Distribution classique du solitaire:28 cartes dans les 7 colonnes, le reste dans la pioche ---

    function initializeGame() {
        createDeck();
        shuffleDeck();

        for (let i = 0; i < 7; i++) {  // Distribution dans les 7 colonnes
            for (let j = i; j < 7; j++) {  // Remplissage des colonnes (1 dans la 1ère, 2 dans la 2ème, etc.)
                const card = deck.pop();  // Prendre la carte du dessus du deck ou paquet
                if (j === i) {   /// La dernière carte distribuée dans chaque colonne est face visible
                    card.faceUp = true;
                }
                state.tableau[j].push(card);
            }
        }

        state.stock = deck; // Le reste des cartes va dans la pioche
        renderGame();
    }
      // Vider toutes les zones du plateau avant de tout réafficher (éviter les doublons)
    function renderGame() {
        document.querySelectorAll('.pile').forEach(pileEl => pileEl.innerHTML = '');
        // Ajout du paramètre pileId aux appels de rendu : Affiche la pioche et la défausse (seul la carte du dessus est visible)
        renderPile(state.stock, document.getElementById('stock'), 'stock');
        renderPile(state.waste, document.getElementById('waste'), 'waste');
          // Afficher les 4 fondations 
        for (let i = 0; i < 4; i++) {
            renderPile(state.foundations[i], document.getElementById(`foundation-${i}`), `foundation-${i}`);
        }
          // Pour chaque colonnes: on crée et positionne chaque carte, et on rend draggable uniquement celles face lisible
        for (let i = 0; i < 7; i++) {
            const pileId = `tableau-${i}`;
            const pileEl = document.getElementById(pileId);
            state.tableau[i].forEach((cardData, index) => {
                const cardEl = createCardElement(cardData, pileId);
                cardEl.style.top = `${index * 25}px`;  // Décalage vertical pour voir les cartes en éventail
                pileEl.appendChild(cardEl);

                if (cardData.faceUp) {
                    addDragListeners(cardEl, cardData.id, pileId, index);
                }
            });
        }
    }

     // Pour la pioche défausse et fondations: on n'affiche que la carte dessus
    function renderPile(pile, pileEl, pileId) {
        if (pile.length > 0) {
            const topCard = pile[pile.length - 1];
            const cardEl = createCardElement(topCard, pileId);
            pileEl.appendChild(cardEl);

            if (topCard.faceUp && pileId !== 'stock') {
                addDragListeners(cardEl, topCard.id, pileId, pile.length - 1);
            }
        }
    }

     // Crée l'élement visible d'une carte. Si face visible on montre le symbole et on autorise le drag
    function createCardElement(cardData, pileId) {
        const cardEl = document.createElement('div');
        cardEl.classList.add('card', cardData.color);
        cardEl.dataset.cardId = cardData.id;
        cardEl.dataset.pileId = pileId;

        if (cardData.faceUp) {
            cardEl.innerHTML = `<div>${cardData.rank}<br>${cardData.suit}</div>
                                 <div style="align-self: center; font-size: 30px;">${cardData.suit}</div>
                                 <div style="align-self: flex-end; transform: rotate(180deg);">${cardData.rank}<br>${cardData.suit}</div>`;
            cardEl.draggable = true;
        } else {
            cardEl.classList.add('facedown');
            cardEl.draggable = false;
        }
        return cardEl;
    }

    // --- Logique du jeu et Drag & Drop: Gestion du clic sur la pioche (Si la pioche est vide, reclycler la défausse) ---

    document.getElementById('stock').addEventListener('click', () => {
        if (state.stock.length > 0) {
            const card = state.stock.pop();
            card.faceUp = true;
            state.waste.push(card);
        } else if (state.waste.length > 0) {
            state.stock = state.waste.reverse();   // On remet toute la défausse dans la pioche
            state.stock.forEach(c => c.faceUp = false);
            state.waste = [];
        }
        renderGame();
    });

     // --- NOUVELLES FONCTIONS DE DRAG & DROP: ajout des évenement dragstart et dragend à une carte draggable ---

    function addDragListeners(cardEl, cardId, pileId, index) {
        cardEl.addEventListener('dragstart', (e) => handleDragStart(e, cardId, pileId, index));
        cardEl.addEventListener('dragend', handleDragEnd);
    }

      // Quand on commence a glissé on save d'ou vient la carte et on ajoute une classe css pour l'effet visuel
    function handleDragStart(e, cardId, pileId, index) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', cardId);

        draggedFromPileId = pileId;
        draggedIndex = index;

        const sourcePile = getPileById(pileId);
        draggedCardData = sourcePile[index];

        setTimeout(() => e.target.classList.add('dragging'), 0);
    }

     // Nettoyer à la fin du drag
    function handleDragEnd(e) {
        e.target.classList.remove('dragging');
        draggedCardData = null;
        draggedFromPileId = null;
        draggedIndex = -1;
    }

    // Toutes les zones acceptent le drop
    document.querySelectorAll('.pile').forEach(pileEl => {
        pileEl.addEventListener('dragover', handleDragOver);
        pileEl.addEventListener('drop', handleDrop);
    });

    // Logique principal du déplacement: vérifier si coups est légal, retourne eventuellement la carte du dessus ... etc
    function handleDragOver(e) {
        e.preventDefault();  // Obligatoire pour autoriser le drop
        e.dataTransfer.dropEffect = 'move';
    }

    function handleDrop(e) {
        e.preventDefault();
        if (!draggedCardData || !draggedFromPileId) return;

        const targetPileEl = e.target.closest('.pile');
        if (!targetPileEl) return;
        const targetPileId = targetPileEl.id;

        const sourcePile = getPileById(draggedFromPileId);
        const targetPile = getPileById(targetPileId);

        if (isValidMove(draggedCardData, sourcePile, targetPile, targetPileId, draggedIndex)) {
            executeMove(sourcePile, targetPile, draggedIndex);
            checkFlipCard(draggedFromPileId); // Simplifié, l'index n'est plus nécessaire ici
            renderGame();
        }
    }

     // --- Fonctions utilitaires de logique de jeu:fonction utilitaire qui retourne la bonne pile (array) à partir de l'ID HTML ---

    function getPileById(id) {
        if (id === 'stock') return state.stock;
        if (id === 'waste') return state.waste;
        // Correction de l'accès aux tableaux imbriqués
        if (id.startsWith('foundation-')) return state.foundations[id.split('-')[1]];
        if (id.startsWith('tableau-')) return state.tableau[id.split('-')[1]];
        return null;
    }

    // Régle officiel du solitaire 
    function isValidMove(card, source, target, targetId, index) {
        const lastTargetCard = target[target.length - 1];

        // 1. Déplacement vers les fondations
        if (targetId.startsWith('foundation-')) {
            if (index !== source.length - 1) return false; // On ne peut que prendre les cartes du dessus

            if (!lastTargetCard) {
                return card.rank === 'A'; // Fondation vide seul As est accepté
            }
            return lastTargetCard.suit === card.suit && lastTargetCard.value === card.value - 1;
        }

        // 2. Déplacement vers le tableau
        if (targetId.startsWith('tableau-')) {
            if (!lastTargetCard) {
                return card.rank === 'K'; //Colonne vide seul le roi est accepté
            }
            return lastTargetCard.color !== card.color && lastTargetCard.value === card.value + 1;  //Couleurs alternées + valeurs descendante
        }

        return false;
    }

    // Déplacement de plusieurs cartes si elles sont valides
    function executeMove(source, target, index) {
        const cardsToMove = source.splice(index);  // splice retourne TOUTES les cartes à partir de l'index
        target.push(...cardsToMove);  // On peut déplacer toutes les piles valides
    }

    // Le retrait d'une carte de la colonne retourne automatique celle en-dessous
    function checkFlipCard(pileId) {
        if (pileId.startsWith('tableau-')) {
            const sourcePile = getPileById(pileId);
            if (sourcePile.length > 0) {
                sourcePile[sourcePile.length - 1].faceUp = true;
            }
        }
    }

    // Lance le jeu dés que la page est prête
    initializeGame();

// Affichage des colonnes et de la banque dans le HTML
function renderColumns() {
    for (let col = 0; col < 7; col++) {
        const colDiv = document.getElementById("col-" + i);
        colDiv.innerHTML = ""; // Vide la colonne avant d'ajouter les cartes
        columns[i].forEach(card => {
            const card = createCardElement(cardObj.src, cardObj.faceUp);
            colDiv.appendChild(card);
        });
    }
}
// Utilisation :
// let deck = createDeck(),
// shuffleDeck(deck),
// dealCards(deck),
// columns contient les 7 colonnes, stock contient la banque,
