module.exports = app => {
  return class EditionController extends app.Controller {
    async edition1() {
      const { ctx } = this
      await ctx.renderClient('edition1/index.js')
    }
  }
}
