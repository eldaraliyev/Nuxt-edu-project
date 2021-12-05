export default function(context) {
  console.log('[Middleware] First Auth check');
  context.store.dispatch('initAuth', context.req)
}
