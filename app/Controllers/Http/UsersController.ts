import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  
  public async index({}: HttpContextContract) {
    const user = await User.all()
    return user
  }

  
  public async store({ request, response }: HttpContextContract) {
    const body = request.only(['nome','sobrenome', 'email', 'password', 'cargo'])
 
    try {
      const users = await User.create(body)

    response.status(201)

    return {
      message: 'Usuario criado com sucesso',
      data: users,
    }  
    } catch(error) {
      return response.unauthorized(
        {
          error: true,
          message: 'Erro no cadastro, Verifique seus dados « Este email ja existe »'
        }
      )
    }
  }

  public async show({ request }: HttpContextContract) {
    const user_id = request.param('id')
    const user = await User.find(user_id)
    return user
  }

  public async update({ request }: HttpContextContract) {
    const user_id = request.param('id')
    const body = request.only(['nome', 'email', 'password'])
    const user = await User.find(user_id)
    await user?.merge(body).save()

    return user
  }

  public async destroy({ request }: HttpContextContract) {
    const user_id = request.param('id')
    const user = await User.findOrFail(user_id)
    await user.delete()
    return "Usuario eliminado"
  }
}
