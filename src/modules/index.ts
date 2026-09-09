import { githubModule, githubManifest } from './github';
import { googleModule, googleManifest } from './google';
import { slackManifest } from './slack';
import type { ModuleBundle, ModuleManifest } from './types';

export const allManifests: ModuleManifest[] = [
  githubManifest,
  googleManifest,
  slackManifest,
];

export function getModule(moduleId: string): ModuleBundle | null {
  if (moduleId === 'github') return githubModule;
  if (moduleId === 'google') return googleModule;
  return null;
}

export {
  githubModule,
  githubManifest,
  googleModule,
  googleManifest,
  slackManifest,
};
export * from './types';
