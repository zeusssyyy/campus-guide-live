const fs = require('fs');
const path = require('path');

const srcDir = 'd:\\campus photos';
const destDir = 'd:\\campus-guide\\assets\\campus_gallery';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file}`);
});
