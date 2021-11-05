import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

// PATCH /todos/:uid.json
export const patch: RequestHandler<Locals, FormData> = async (request) => {
  console.log('patch')
	return api(request, `todos/${request.locals.userid}/${request.params.uid}`, {
		text: request.body.get('text'),
		done: request.body.has('done') ? !!request.body.get('done') : undefined
	});
};

// DELETE /todos/:uid.json
export const del: RequestHandler<Locals> = async (request) => {
  console.log('del')
	return api(request, `todos/${request.locals.userid}/${request.params.uid}`);
};
