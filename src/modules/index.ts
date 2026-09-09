import { githubModule, githubManifest } from './github';
import { googleModule, googleManifest } from './google';
import { routinesModule, routinesManifest } from './routines';
import { slackManifest } from './slack';
import type { ModuleBundle, ModuleManifest } from './types';

export const allManifests: ModuleManifest[] = [
  githubManifest,
  googleManifest,
  routinesManifest,
  slackManifest,
];

export function getModule(moduleId: string): ModuleBundle | null {
  if (moduleId === 'github') return githubModule;
  if (moduleId === 'google') return googleModule;
  if (moduleId === 'routines') return routinesModule;
  return null;
}

export {
  githubModule,
  githubManifest,
  googleModule,
  googleManifest,
  routinesModule,
  routinesManifest,
  slackManifest,
};
export * from './types';
