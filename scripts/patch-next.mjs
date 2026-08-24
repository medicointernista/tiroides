import { readFileSync, writeFileSync, existsSync } from 'fs';

let total = 0;

function patchFile(file, oldStr, newStr) {
  if (!existsSync(file)) return false;
  let content = readFileSync(file, 'utf8');
  if (!content.includes(oldStr)) return false;
  content = content.replaceAll(oldStr, newStr);
  writeFileSync(file, content, 'utf8');
  console.log(`Patched: ${file}`);
  total++;
  return true;
}

// 1. Patch throwInvariantForMissingStore to be a no-op instead of throwing
patchFile(
  'node_modules/next/dist/server/app-render/work-unit-async-storage.external.js',
  `function throwInvariantForMissingStore() {
    throw Object.defineProperty(new _invarianterror.InvariantError('Expected workUnitAsyncStorage to have a store.'), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: false,
        configurable: true
    });
}`,
  `function throwInvariantForMissingStore() {
    return undefined;
}`
);

// 2. Patch params.js: replace throwInvariantForMissingStore() calls with fallback returns
patchFile(
  'node_modules/next/dist/server/request/params.js',
  `    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerParamsForMetadata = createServerParamsForServerSegment;`,
  `    return createRenderParamsInProd(underlyingParams);
}
const createServerParamsForMetadata = createServerParamsForServerSegment;`
);

patchFile(
  'node_modules/next/dist/server/request/params.js',
  `    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerParamsForServerSegment`,
  `    return createRenderParamsInProd(underlyingParams);
}
function createServerParamsForServerSegment`
);

patchFile(
  'node_modules/next/dist/server/request/params.js',
  `    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderParamsForClientSegment`,
  `    return createRenderParamsInProd(underlyingParams);
}
function createPrerenderParamsForClientSegment`
);

// 3. Patch pathname.js
patchFile(
  'node_modules/next/dist/server/request/pathname.js',
  `    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();`,
  `    return underlyingPathname;`
);

// 4. Patch search-params.js (3 occurrences with distinct context)
patchFile(
  'node_modules/next/dist/server/request/search-params.js',
  `    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerSearchParamsForMetadata = createServerSearchParamsForServerPage;`,
  `    return createRenderSearchParams(underlyingSearchParams, workStore);
}
const createServerSearchParamsForMetadata = createServerSearchParamsForServerPage;`
);

patchFile(
  'node_modules/next/dist/server/request/search-params.js',
  `    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderSearchParamsForClientPage`,
  `    return createRenderSearchParams(underlyingSearchParams, workStore);
}
function createPrerenderSearchParamsForClientPage`
);

patchFile(
  'node_modules/next/dist/server/request/search-params.js',
  `    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createStaticPrerenderSearchParams`,
  `    return Promise.resolve({});
}
function createStaticPrerenderSearchParams`
);

// 5. Patch use-flight-response.js
patchFile(
  'node_modules/next/dist/server/app-render/use-flight-response.js',
  `if (!workUnitStore) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workUnitAsyncStorage to have a store.'), "__NEXT_ERROR_CODE", {
                value: "E696",
                enumerable: false,
                configurable: true
            });
        }`,
  `if (!workUnitStore) {
            flightResponses.set(flightStream, newResponse);
            return newResponse;
        }`
);

// 6. Patch compiled runtime files (dev)
const devFiles = [
  'node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js',
  'node_modules/next/dist/compiled/next-server/app-page-experimental.runtime.dev.js',
  'node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js',
  'node_modules/next/dist/compiled/next-server/app-page-turbo-experimental.runtime.dev.js',
];
for (const f of devFiles) {
  patchFile(
    f,
    'if(!workUnitStore)throw Object.defineProperty(new invariant_error.InvariantError("Expected workUnitAsyncStorage to have a store."),"__NEXT_ERROR_CODE",{value:"E696",enumerable:!1,configurable:!0});',
    'if(!workUnitStore){flightResponses.set(flightStream,newResponse);return newResponse;}'
  );
}

// 7. Patch compiled runtime files (prod)
const prodFiles = [
  'node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js',
  'node_modules/next/dist/compiled/next-server/app-page-experimental.runtime.prod.js',
  'node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.prod.js',
  'node_modules/next/dist/compiled/next-server/app-page-turbo-experimental.runtime.prod.js',
];
for (const f of prodFiles) {
  patchFile(
    f,
    'if(!t)throw Object.defineProperty(new em.e("Expected workUnitAsyncStorage to have a store."),"__NEXT_ERROR_CODE",{value:"E696",enumerable:!1,configurable:!0});',
    'if(!t){flightResponses.set(flightStream,newResponse);return newResponse;}'
  );
}

console.log(`Done. ${total} files patched.`);
