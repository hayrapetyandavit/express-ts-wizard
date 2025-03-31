 
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = process.cwd();
const templateDir = path.join(__dirname, 'app');

async function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

(async () => {
  try {
    console.log('🚀 Creating Express project...');

    if (!fs.existsSync(templateDir)) {
      throw new Error('Template directory not found!');
    }

    await copyDir(templateDir, targetDir);
    console.log('✅ Template files copied.');

    // Install dependencies
    // ask is install kdependencies?
    console.log('📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });

    console.log('🎉 Express project setup complete!');
  } catch (error) {
    console.error('❌ Error setting up the project:', error.message);
  }
})();
