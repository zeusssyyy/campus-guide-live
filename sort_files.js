const fs = require('fs');
const path = require('path');

const dirs = [
    'D:\\way to central building',
    'D:\\way to cme building',
    'D:\\way to ict building',
    'D:\\way to library'
];

dirs.forEach(dir => {
    console.log(`\n--- ${path.basename(dir)} ---`);
    if (!fs.existsSync(dir)) {
        console.log('Dir not found');
        return;
    }
    const files = fs.readdirSync(dir).map(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        return { name: file, time: stat.mtimeMs }; // Using modified time, usually matches creation time for copied photos
    });
    
    files.sort((a, b) => a.time - b.time);
    files.forEach((f, i) => {
        console.log(`${i+1}. ${f.name}`);
    });
});
