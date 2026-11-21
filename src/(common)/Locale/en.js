// English needs a table only for plural labels: every other label is its own English text.
// TODO: uncommonjs should handle .json files itself, making this file unnecessary (see ms.js).
JSON.parse(node.fs.readFileSync(node.path.join(__rootDir, 'src/(common)/Locale/en.json'), 'utf8'));
