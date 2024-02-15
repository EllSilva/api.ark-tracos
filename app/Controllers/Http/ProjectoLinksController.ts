import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Projecto from 'App/Models/Projecto2'

export default class ProjectoLinksController {

    public async store({ request, response }: HttpContextContract) {
        const body = request.only(['titulo','categoria','imagemLink'])
     
        try {
          const projectos = await Projecto.create(body)
    
        response.status(201)
    
        return {
          message: 'Galeria de Projecto criado com sucesso',
          data: projectos,
        }  
        } catch(error) {
          return response.unauthorized(
            {
              error: true,
              message: 'Erro no Salvar, Verifique seus dados'
            }
          )
        }
      }

}
