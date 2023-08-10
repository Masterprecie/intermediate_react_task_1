# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## How to deploy to github pages
**Set Up GitHub Repository:**
Make sure you have a GitHub repository for your project. If not, create one on GitHub.

**Install gh-pages Package:**
The gh-pages package simplifies the deployment process. Install it as a development dependency:
### npm install gh-pages --save-dev

**Update package.json:**
Open your package.json file and add the following lines at the top level:
### "homepage": "https://<username>.github.io/<repository-name>",
Replace <username> with your GitHub username and <repository-name> with the name of your repository.

**Modify package.json Scripts:**
Still in your package.json, add the following scripts:

### "scripts": {
### "predeploy": "npm run build",
### "deploy": "gh-pages -d build",
###  // ...
### }

**Build the App:**
Generate a production build of your React app:

### npm run build

**Deploy to GitHub Pages:**
Deploy your app to GitHub Pages using the npm run deploy command:

### npm run deploy

**Access Your Deployed App:**
Once the deployment is successful, you can access your deployed React app at the URL: https://<username>.github.io/<repository-name>.