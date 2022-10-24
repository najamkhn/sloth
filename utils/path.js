import * as url from 'url';

export const filename = url.fileURLToPath(import.meta.url);
export const dirname = path => url.fileURLToPath(new URL(path, import.meta.url));
