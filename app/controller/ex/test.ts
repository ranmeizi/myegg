import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.response.format(200, {
      name: 'homepage'
    });
  }
}
