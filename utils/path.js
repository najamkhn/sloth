import * as url from 'url';
export const dirname = path => url.fileURLToPath(new URL(path, import.meta.url));
