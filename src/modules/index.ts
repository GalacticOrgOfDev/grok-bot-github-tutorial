import { githubModule, githubManifest } from './github';
import { googleModule, googleManifest } from './google';
import { slackModule, slackManifest } from './slack';
import { routinesModule, routinesManifest } from './routines';
import { teamsModule, teamsManifest } from './teams';
import { skillsModule, skillsManifest } from './skills';
import { swarmModule, swarmManifest } from './swarm';
import type { ModuleBundle, ModuleManifest } from './types';

export const allManifests: ModuleManifest[] = [
  githubManifest,
  googleManifest,
  slackManifest,
  routinesManifest,
  teamsManifest,
  skillsManifest,
  swarmManifest,
];

export function getModule(moduleId: string): ModuleBundle | null {
  if (moduleId === 'github') return githubModule;
  if (moduleId === 'google') return googleModule;
  if (moduleId === 'slack') return slackModule;
  if (moduleId === 'routines') return routinesModule;
  if (moduleId === 'teams') return teamsModule;
  if (moduleId === 'skills') return skillsModule;
  if (moduleId === 'swarm') return swarmModule;
  return null;
}

export {
  githubModule,
  githubManifest,
  googleModule,
  googleManifest,
  slackModule,
  slackManifest,
  routinesModule,
  routinesManifest,
  teamsModule,
  teamsManifest,
  skillsModule,
  skillsManifest,
  swarmModule,
  swarmManifest,
};
export * from './types';
