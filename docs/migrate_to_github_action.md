# Migrating to GitHub Actions

Follow these steps to migrate your repository from Travis CI to GitHub Actions:

1. Copy the following files from the template repository:
   - `.github/workflows/ci-cd.yml`
   - `bin/init_github_action`
   - `.gitignore`
   - `.nvmrc`
   - `.env.default`

2. Update `package.json` to add the `initGithubAction` script:
   ```json
   "scripts": {
     "initGithubAction": "./bin/init_github_action"
   }
   ```

3. Remove legacy CI files:
   - Delete `.travis.yml`
   - Delete `github_deploy_key.enc`

4. Copy `.env.default` to `.env` and update it with your project's values

5. Initialize GitHub Actions by running:
   ```bash
   yarn initGithubAction
   ```

This will set up GitHub Actions CI/CD pipeline for your repository.
