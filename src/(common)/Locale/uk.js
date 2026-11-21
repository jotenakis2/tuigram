// The Ukrainian table, keyed by the English label like ms.json. types/global.ts checks it is complete.
// TODO: uncommonjs should handle .json files itself, making this file unnecessary (see ms.js).
JSON.parse(node.fs.readFileSync(node.path.join(__rootDir, 'src/(common)/Locale/uk.json'), 'utf8'));
