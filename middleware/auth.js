export default function(context) {
  console.log('[Middleware] Next step check')
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
