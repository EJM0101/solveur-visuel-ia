# 🤖 Solveur Visuel IA – Résolution de Problèmes par Recherche

**Solveur Visuel IA** est une application web moderne permettant de résoudre des problèmes classiques comme le **taquin 3×3 (8-puzzle)** à l'aide d'algorithmes d'intelligence artificielle.  
Elle illustre comment l’IA explore un **espace d’états** à partir d’un état initial, applique des **règles d’action**, et tente d’atteindre un **état but**.

> 🧠 L’application permet de **visualiser la résolution** étape par étape grâce à une interface animée.

---

## 📦 Fonctionnalités principales

✅ Interface visuelle interactive (clic sur les tuiles pour créer un état)  
✅ Algorithmes de recherche IA intégrés : **A\***, **BFS**, **DFS**  
✅ Affichage animé de la résolution  
✅ Déploiement facile sur **Render** ou exécution locale avec `npm run dev`  
✅ Interface responsive et professionnelle (Tailwind CSS)

---

## ⚙️ Installation

```bash
git clone https://github.com/EJM0101/solveur-visuel-ia.git
cd solveur-visuel-ia
npm install
npm run dev
```

Puis ouvre : [http://localhost:3000](http://localhost:3000)

---

## 🧠 Algorithmes utilisés et explication

### 🔍 A* (A Star Search)

L’algorithme A* est un **algorithme informé** qui combine :
- `g(n)` : coût réel depuis l’état initial
- `h(n)` : **heuristique** estimée du coût restant jusqu’à l’objectif

#### Heuristique utilisée :  
👉 **Distance de Manhattan** = somme des distances horizontales et verticales entre chaque tuile et sa position finale.

### ✔️ Avantages :
- Optimal (trouve toujours la solution la plus courte si l'heuristique est admissible)
- Rapide avec une bonne heuristique

### ⚠️ Inconvénients :
- Plus complexe que BFS
- Nécessite une bonne heuristique

---

### 🌐 BFS (Breadth-First Search)

Recherche **en largeur** : explore tous les états de même profondeur avant d’aller plus loin.

### ✔️ Avantages :
- Trouve toujours la **solution la plus courte**
- Simple à implémenter

### ⚠️ Inconvénients :
- Très lent dans un grand espace d’états
- Utilise beaucoup de mémoire

---

### 🌲 DFS (Depth-First Search)

Recherche **en profondeur** : explore un chemin jusqu’au bout avant de revenir en arrière.

### ✔️ Avantages :
- Très rapide à implémenter
- Moins gourmand en mémoire

### ⚠️ Inconvénients :
- Peut tourner indéfiniment si mal implémenté
- Ne garantit pas la meilleure solution

---

## 📁 Structure du projet

```
solveur-visuel-ia/
├── pages/
│   ├── index.js        # Interface utilisateur (React + Tailwind)
│   └── api/solve.js    # Backend de résolution (BFS, DFS, A*)
├── styles/
│   └── globals.css     # Style global
├── tailwind.config.js  # Config Tailwind
├── postcss.config.js   # Config postcss
├── package.json        # Dépendances & scripts
```

---

## 🖱️ Utilisation

1. Clique sur les tuiles pour déplacer et créer un état personnalisé
2. Choisis un algorithme : `A*`, `BFS`, ou `DFS`
3. Clique sur **"Résoudre"**
4. L’IA affichera pas à pas la résolution du puzzle

---

## 🎓 Objectif pédagogique

Ce projet est conçu pour :

- Comprendre le fonctionnement d’algorithmes de recherche
- Visualiser comment une IA **planifie et atteint un but**
- Tester différents algorithmes et comparer leurs comportements
- Offrir un outil interactif pour l’enseignement de l’IA

---

## 💡 Prochaines extensions possibles

- Support pour le problème des **8 reines**
- Solveur de **labyrinthe interactif**
- Ajout de **recherche bidirectionnelle** ou **greedy search**

---

## 🚀 Déploiement

Déployable directement sur [https://render.com](https://render.com)

---

## 🧠 Technologies utilisées

- **React (Next.js)** – UI dynamique
- **Tailwind CSS** – Design rapide et responsive
- **Node.js** (API Route) – Résolution IA côté serveur
- **JavaScript pur** – Algorithmes IA (sans dépendances externes)

---

Développé avec ❤️ pour la **visualisation pédagogique des fondements de l’IA**.
