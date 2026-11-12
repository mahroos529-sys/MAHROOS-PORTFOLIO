# Mohamed Mahroos — Cinematic Portfolio

## Run locally (Windows PowerShell)
1. Extract this ZIP and open the folder in VS Code.
2. Open Terminal → New Terminal.
3. Run `npm.cmd install`.
4. Run `npm.cmd run dev` and open the Local URL shown by Vite.

## Deploy to GitHub Pages
This project is configured for the GitHub repository `mahroos-portfolio`.

1. Create a **public** GitHub repository named `mahroos-portfolio` under your GitHub account.
2. In this project folder, run `npm.cmd install`.
3. Run `npm.cmd install --save-dev gh-pages` (the dependency is already listed; this makes sure it is installed).
4. Run `git init` if this folder is not already a Git repository.
5. Run `git add .`
6. Run `git commit -m "My portfolio website"`
7. Run `git branch -M main`
8. Run `git remote add origin https://github.com/mahroos529-sys/mahroos-portfolio.git` (only if no `origin` remote exists yet).
9. Run `git push -u origin main`.
10. Run `npm.cmd run deploy`.
11. On GitHub, open the repository → Settings → Pages. Set **Deploy from a branch**, choose branch **gh-pages** and folder **/(root)**, then Save.
12. Your site will be at `https://mahroos529-sys.github.io/mahroos-portfolio/`.

If Git reports that `origin` already exists, do not add it again; check it with `git remote -v`.

## Included
- Full-screen cinematic hero video (`public/hero-video.mp4`)
- Responsive portfolio sections and animations
- Resume and certificate images
- Portrait images
- GitHub Pages base-path configuration

## Background music
The uploaded ZIP did **not** contain `public/song.mp3`, although the website code expects it. To include music on the live site, copy your original MP3 into the project's `public` folder and name it exactly `song.mp3` before deploying. Do not use the earlier 0 KB empty file.

## Update your resume
Replace `public/Mohamed-Mahroos-Resume.pdf` with your new PDF, keeping exactly the same filename.
