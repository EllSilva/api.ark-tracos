import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Colaboradores from 'App/Models/Colaboradore'
import { v4 as uuidv4 } from 'uuid'
import Application from '@ioc:Adonis/Core/Application'

export default class ColaboradoresController {

  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  //CADASTRO DE PUBLICACAO
  public async store({ params, request, response }: HttpContextContract) {
    const body = request.body()
    try {
      //ADICIONAR DE IMAGEM
      const imagem = request.file('imagem', this.validationOptions)


      if (imagem) {
        const imagemName = `${uuidv4()}.${imagem!.extname}`
        await imagem.move(Application.tmpPath('uploads'), {
          name: imagemName,
        })
        body.imagem = imagemName
      }

      //FIM ENVIO DE IMAGEM

      const colaboradores = await Colaboradores.create(body)

      response.status(201)

      return {
        message: 'certo colaboradores criado com sucesso',
        data: colaboradores,
      }
    } catch (error) {
      return response.unauthorized({
        error: true,
        message: 'Erro na colaboradores novo , Verifique seus dados',
      })
    }
  }


  public async index({ }: HttpContextContract) {
    const colaboradores = await Colaboradores.all()

    return {
      data: colaboradores,
    }
  }

  public async show({ request }: HttpContextContract) {
    const proj_id = request.param('id')
    const colaboradores = await Colaboradores.find(proj_id)
    return {
      data: colaboradores,
    }
  }

  public async update({ request }: HttpContextContract) {
    const proj_id = request.param('id')
    const body = request.only(['titulo', 'categoria', 'descricao'])
    const colaboradores = await Colaboradores.find(proj_id)
    await colaboradores?.merge(body).save()

    return colaboradores
  }

  public async destroy({ request }: HttpContextContract) {
    const proj_id = request.param('id')
    const colaboradores = await Colaboradores.findOrFail(proj_id)
    await colaboradores.delete()
    return "Usuario eliminado"
  }


}
