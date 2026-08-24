import { readFileSync, writeFileSync, existsSync } from 'fs';

const patches = [
  {
    files: [
      'node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js',
      'node_modules/next/dist/compiled/next-server/app-page-experimental.runtime.dev.js',
      'node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js',
      'node_modules/next/dist/compiled/next-server/app-page-turbo-experimental.runtime.dev.js',
    ],
    old: 'if(!workUnitStore)throw Object.defineProperty(new invariant_error.InvariantError("Expected workUnitAsyncStorage to have a store."),"__NEXT_ERROR_CODE",{value:"E696",enumerable:!1,configurable:!0});',
    new: 'if(!workUnitStore){flightResponses.set(flightStream,newResponse);return newResponse;}',
  },
  {
    files: [
      'node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js',
      'node_modules/next/dist/compiled/next-server/app-page-experimental.runtime.prod.js',
      'node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.prod.js',
      'node_modules/next/dist/compiled/next-server/app-page-turbo-experimental.runtime.prod.js',
    ],
    old: 'if(!t)throw Object.defineProperty(new em.e("Expected workUnitAsyncStorage to have a store."),"__NEXT_ERROR_CODE",{value:"E696",enumerable:!1,configurable:!0});',
    new: 'if(!t){flightResponses.set(flightStream,newResponse);return newResponse;}',
  },
];

const sourceFile = 'node_modules/next/dist/server/app-render/use-flight-response.js';
const sourceOld = `if (!workUnitStore) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workUnitAsyncStorage to have a store.'), "__NEXT_ERROR_CODE", {
                value: "E696",
                enumerable: false,
                configurable: true
            });
        }`;
const sourceNew = `if (!workUnitStore) {
            flightResponses.set(flightStream, newResponse);
            return newResponse;
        }`;

let total = 0;

if (existsSync(sourceFile)) {
  let content = readFileSync(sourceFile, 'utf8');
  if (content.includes(sourceOld)) {
    content = content.replaceAll(sourceOld, sourceNew);
    writeFileSync(sourceFile, content, 'utf8');
    console.log(`Patched source: ${sourceFile}`);
    total++;
  }
}

for (const { files, old: oldPat, new: newPat } of patches) {
  for (const f of files) {
    if (!existsSync(f)) continue;
    let content = readFileSync(f, 'utf8');
    if (content.includes(oldPat)) {
      content = content.replaceAll(oldPat, newPat);
      writeFileSync(f, content, 'utf8');
      console.log(`Patched: ${f}`);
      total++;
    }
  }
}

console.log(`Done. ${total} files patched.`);
