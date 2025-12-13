# Max Rose Studio

Landing page pour Max Rose Studio - Production musicale, enregistrement, mixage et mastering.

## Développement local

### Prérequis

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

### Prévisualiser le build

```bash
npm run preview
```

## Déploiement

### GitHub Pages (automatique)

Le site se déploie automatiquement sur GitHub Pages à chaque push sur la branche `main`.

### Configuration du domaine personnalisé

Pour utiliser un domaine personnalisé (ex: maxrose.fr) :

1. **Créer un fichier CNAME** dans `public/CNAME` contenant :
   ```
   maxrose.fr
   ```

2. **Configurer les DNS chez OVH** :

   Ajouter les enregistrements DNS suivants :

   | Type  | Nom | Valeur |
   |-------|-----|--------|
   | A     | @   | 185.199.108.153 |
   | A     | @   | 185.199.109.153 |
   | A     | @   | 185.199.110.153 |
   | A     | @   | 185.199.111.153 |
   | CNAME | www | <username>.github.io |

3. **Activer HTTPS** dans les paramètres GitHub Pages du repository.

## Structure du projet

```
src/
├── components/
│   ├── Navbar.tsx     # Navigation sticky
│   ├── Hero.tsx       # Section hero
│   ├── Services.tsx   # Section services
│   ├── About.tsx      # Section à propos
│   ├── References.tsx # Section références
│   └── Contact.tsx    # Formulaire de contact
├── App.tsx            # Composant principal
├── main.tsx           # Point d'entrée
└── index.css          # Styles globaux
```

## Technologies

- React 18
- TypeScript
- Vite
- CSS (variables CSS, responsive design)
- Formspree (formulaire de contact)

## Contact

Le formulaire de contact envoie les messages via Formspree.
