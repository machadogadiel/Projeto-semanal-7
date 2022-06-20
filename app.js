import readLine from 'readline'

const reader = readLine.createInterface(process.stdin, process.stdout);
const inputProperties = []

reader.on('line', (input) => input.toLowerCase() !== "sair" ? inputProperties.push(input) : reader.close());
reader.on('close', () => console.log(inputProperties.sort()))