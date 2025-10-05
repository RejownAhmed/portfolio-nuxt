---
title: "Set Up CI/CD Pipelines & Automate Laravel Deployments"
description: Learn GitHub Actions and how to auto-deploy any applications to the server when code is updated and pushed. Includes full YAML example, SSH deployment, and test automation tips.
date: 2024-10-10
image: /blog/github-cicd.png
minRead: 8
author:
  name: Rejown Ahmed
  avatar:
    src: /we.png
    alt: Rejown Ahmed
---

## 💡 Why CI/CD Matters for Developers

In modern **web development**, speed and reliability matter more than ever. Whether you’re building APIs, frontend apps, or backend systems, **continuous integration and deployment (CI/CD)** ensure your code gets tested and deployed automatically whenever you push updates.

With **GitHub Actions**, you can build powerful pipelines **directly from your GitHub repository** — no external service needed. It’s simple, flexible, free and integrates seamlessly with any stack (Laravel, Node.js, Vue, React, etc.).

---

## ⚙️ What is CI/CD?

**CI (Continuous Integration)** — automatically test and verify code when it’s pushed.
**CD (Continuous Deployment)** — automatically deploy code to your server if all tests pass.

For example:

* You push code to the `dev` branch.
* GitHub Actions runs automated tests.
* If all tests succeed, the app is deployed to your **development server** via SSH.

---

## 🧩 Example: Auto Deploy Laravel to DEV Server

Here’s a **ready-to-use GitHub Actions workflow** that deploys your Laravel app whenever you push to the `dev` branch.

```yaml
# .github/workflows/deploy.yml
name: Deploy to DEV Server

on:
  push:
    branches:
      - dev

jobs:
  laravel-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: '8.2'

      - name: Install dependencies
        run: composer install --no-interaction --prefer-dist

      - name: Run PHPUnit tests
        run: php artisan test

      - name: Deploy to server
        if: success()  # Only deploy if tests passed
        uses: appleboy/ssh-action@v1.1.0
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          script: "cd /var/www/api/html && ./script/production.sh"
```

### 🔒 Pro Tip:

Keep your **SSH credentials** (host, username, password) safe by storing them as **GitHub Secrets** —
Go to **Settings → Secrets and variables → Actions → New repository secret**.

---

## 📜 The `production.sh` Script

This Bash script handles your actual **server-side deployment** safely and efficiently.

```bash
#!/bin/bash

set -e

echo "Deployment started ..."

# Enter maintenance mode or return true
(php artisan down) || true

# Pull the latest version of the app
git fetch --all
git reset --hard HEAD
git clean -f -d
git pull origin production

rm composer.lock
composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

php artisan optimize:clear
php artisan clear-compiled
php artisan optimize

php artisan up

echo "Deployment finished!"
```

---

## 🧠 How It Works (Step-by-Step)

1. **Push code** to the `dev` branch.
2. GitHub Actions **runs tests** using PHPUnit or any configured test suite.
3. If tests succeed → the **SSH deploy action** runs.
4. The `production.sh` script executes on your server, pulling the latest code and clearing caches.
5. Your app is **live** — automatically!

---

## 🧪 Adding Post-Deployment API Testing (Optional)

After deployment, you can even **run automated API tests** with **Postman or Newman CLI** to ensure your endpoints are working properly.

Add a step after deployment:

```yaml
- name: Run Postman API Tests
  run: |
    npm install -g newman
    newman run tests/api-collection.json --environment tests/dev-env.json
```

This ensures your **frontend or mobile clients** always connect to working APIs.

---

## 🌐 Benefits of Using GitHub Actions for CI/CD

* ✅ **Free for public repos** and affordable for private ones.
* ⚙️ **Native GitHub integration** — no external setup.
* 🔄 **Works with any framework** (Laravel, Node.js, React, etc.).
* 🧠 **Easily extendable** with test, lint, and build steps.
* 🚀 **Deploy anywhere** — VPS, AWS, DigitalOcean, or Firebase.

---

## 🏁 Wrapping Up

Setting up **CI/CD pipelines with GitHub Actions** is one of the easiest ways to **automate your development workflow**.
Once you configure it, every push triggers:

* automated **tests**,
* followed by **secure SSH deployment**,
* and optionally, **API tests with Postman**.

This means less manual work, faster releases, and higher confidence in every deploy.

---

## ✍️ Final Thoughts (for SEO)

If you’re serious about becoming a **modern web developer**, mastering tools like **GitHub Actions**, **Postman**, and **API testing pipelines** will make you stand out.
Automate your builds, test your APIs, and deploy confidently — all from GitHub.

