# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## How to deploy to github pages using vite
**Set Up GitHub Repository:**
Make sure you have a GitHub repository for your project. If not, create one on GitHub.

**Install gh-pages Package:**
The gh-pages package simplifies the deployment process. Install it as a development dependency:
### npm install gh-pages --save-dev

**Update the package.json file**
The ‘gh-pages’ package uses the homepage field in the package.json file to determine where to deploy your app. To update the package.json file, follow these steps:

1. Add a homepage field with the URL of your GitHub repository in the following format:

“homepage”: https://<your-github-username>.github.io/<your-repository-name>/

2. In the scripts tag add:

“predeploy”: “npm run build”,

“deploy”: “gh-pages -d dist”.

3. Save the changes.

**Update the vite.config.js file**
Add base: “/<repo>/”, to vite.config.js, in my example it would be base: “/react-project/”

**Build the App:**
Generate a production build of your React app:

### npm run build

**Deploy to GitHub Pages:**
Deploy your app to GitHub Pages using the npm run deploy command:

### npm run deploy

**Access Your Deployed App:**
Once the deployment is successful, you can access your deployed React app at the URL: https://<username>.github.io/<repository-name>.

**Resource:**
https://medium.com/@badreddine.boudaoud21/create-a-react-app-with-vite-and-deploy-it-on-github-48b82e19f821
