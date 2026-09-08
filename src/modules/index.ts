import { githubModule, githubManifest } from './github';
import { googleManifest } from './google';
import { slackManifest } from './slack';
import type { ModuleBundle, ModuleManifest } from './types';

export const allManifests: ModuleManifest[] = [
  githubManifest,
  googleManifest,
  slackManifest,
];

export function getModule(moduleId: string): ModuleBundle | null {
  if (moduleId === 'github') return githubModule;
  return null;
}

export { githubModule, githubManifest, googleManifest, slackManifest };
export * from './types';
