export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/about": [3],
	"/different-worlds": [4],
	"/how-to-move-a-zoo": [5],
	"/layered-horizons": [6],
	"/sverdle": [~7],
	"/sverdle/how-to-play": [8]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};