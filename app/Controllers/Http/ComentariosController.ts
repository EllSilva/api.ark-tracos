import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comentario from 'App/Models/Comentario'
import Publicidade from 'App/Models/Publicidade'

export default class ComentariosController {


    public async index({ }: HttpContextContract) {
        const comentario = await Comentario.all()
        return comentario
    }


    public async store({ request, params, response }: HttpContextContract) {
        const body = request.body()
        const publicidadeId = params.publicidadeId

        

            await Publicidade.findOrFail(publicidadeId) 
            body.publicidadeId = publicidadeId

            const comentarios = await Comentario.create(body)
            response.status(201)

            return {
                message: 'Comentario criado com sucesso',
                data: comentarios,
            }
        }
 

    public async show({ request }: HttpContextContract) {
        const comentario_id = request.param('id')
        const comentario = await Comentario.find(comentario_id)
        return comentario
    }

    public async update({ request }: HttpContextContract) {
        const comentario_id = request.param('id')
        const body = request.only(['nome', 'email', 'texto'])
        const comentario = await Comentario.find(comentario_id)
        await comentario?.merge(body).save()

        return comentario
    }

    public async destroy({ request }: HttpContextContract) {
        const comentario_id = request.param('id')
        const comentario = await Comentario.findOrFail(comentario_id)
        await comentario.delete()
        return "Comentario eliminado"
    }

}
