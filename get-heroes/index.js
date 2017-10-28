module.exports = function(context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: context.bindings.heroesdb
  };

  context.done();
};
