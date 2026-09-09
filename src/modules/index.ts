import { githubModule, githubManifest } from './github';
import { googleModule, googleManifest } from './google';
import { routinesModule, routinesManifest } from './routines';
import { teamsModule, teamsManifest } from './teams';
import { skillsModule, skillsManifest } from './skills';
import { slackManifest } from './slack';
import type { ModuleBundle, ModuleManifest } from './types';

export const allManifests: ModuleManifest[] = [
  githubManifest,
  googleManifest,
  routinesManifest,
  teamsManifest,
  skillsManifest,
  slackManifest,
];

export function getModule(moduleId: string): ModuleBundle | null {
  if (moduleId === 'github') return githubModule;
  if (moduleId === 'google') return googleModule;
  if (moduleId === 'routines') return routinesModule;
  if (moduleId === 'teams') return teamsModule;
  if (moduleId === 'skills') return skillsModule;
  return null;
}

export {
  githubModule,
  githubManifest,
  googleModule,
  googleManifest,
  routinesModule,
  routinesManifest,
  teamsModule,
  teamsManifest,
  skillsModule,
  skillsManifest,
  slackManifest,
};
export * from './types';
