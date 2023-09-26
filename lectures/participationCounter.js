const fs = require('fs');

const filePath = './chat_log.txt';
const outputPath = './output.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file ${filePath}.`, err);
        return;
    }

    const lines = data.split('\n');
    const participants = {};

    lines.forEach(line => {
        const match = line.match(/\d{2}:\d{2}:\d{2}\t(.*?):\t/);
        if (match && match[1]) {
            const name = match[1].trim();
            participants[name] = (participants[name] || 0) + 1;
        }
    });

    // Sort the participants based on the number of times they spoke
    const sortedParticipants = Object.entries(participants).sort(([,aCount], [,bCount]) => bCount - aCount);

    let output = '';
    for (const [name, count] of sortedParticipants) {
        const line = `${name}: ${count} times\n`;
        output += line;
        console.log(line.trim()); // remove newline for console output
    }

    // Save the output to a .txt file
    fs.writeFile(outputPath, output, (err) => {
        if (err) {
            console.error(`Error writing to the file ${outputPath}.`, err);
            return;
        }
        console.log(`Results saved to ${outputPath}`);
    });
});