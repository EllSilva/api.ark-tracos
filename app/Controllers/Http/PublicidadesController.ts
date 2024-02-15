import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { v4 as uuidv4 } from 'uuid'
import Application from '@ioc:Adonis/Core/Application'

import Publicidade from 'App/Models/Publicidade'

export default class PublicidadesController {


    //mostrar todos AS  publicacao 
    public async index() {
        const publicidade = await Publicidade.query().preload('comentarios')
        return {
            message: 'Lista da publicidade',
            data: publicidade,
        }
    }

    //mostrar apenas uma publicacao e os seus Comentarios 
    public async show({ params }: HttpContextContract) {
        const publicidade = await Publicidade.findOrFail(params.id)

        await publicidade.load('comentarios')

        return {
            message: 'Lista da publicidade pelo id',
            data: publicidade,
        }
    }

    private validationOptions = {
        types: ['image'],
        size: '2mb',
    }
    //CADASTRO DE PUBLICACAO
    public async store({ request, response }: HttpContextContract) {
        const body = request.only(['titulo', 'descricao', 'imagem'])

        try {
            //ENVIO DE IMAGEM
            const img = request.file('imagem', this.validationOptions)
            if (img) {
                const imgName = `${uuidv4()}.${img!.extname}`

                await img.move(Application.tmpPath('uploads'), {
                    name: imgName,
                })

                body.imagem = imgName
            }


            const publicidades = await Publicidade.create(body)

            response.status(201)

            return {
                message: 'Nova Publicidade criada com sucesso',
                data: publicidades,
            }
        } catch (error) {
            return response.unauthorized(
                {
                    error: true,
                    message: 'Erro na criação , Verifique seus dados'
                }
            )
        }
    }

    //CADASTRO DE PUBLICACAO
    public async update({ params, request }: HttpContextContract) {
        const body = request.only(['titulo', 'descricao', 'imagem'])
        const publicidade = await Publicidade.findOrFail(params.id)


        publicidade.titulo = body.titulo
        publicidade.descricao = body.descricao

        try {
            //ENVIO DE IMAGEM

            if (publicidade.imagem != body.imagem || !publicidade.imagem) {
                const img = request.file('imagem', this.validationOptions)

                if (img) {
                    const imgName = `${uuidv4()}.${img!.extname}`

                    await img.move(Application.tmpPath('uploads'), {
                        name: imgName,
                    })

                    publicidade.imagem = imgName
                }
            }
            await publicidade.save()

            return {
                message: 'Publicidade Atualizado com sucesso',
                data: publicidade,
            }
        } catch (error) {
            return (
                {
                    error: true,
                    message: 'Erro na atualização , Verifique seus dados'
                }
            )
        }
    }

    //eliminar publicacao 
    public async destroy({ params }: HttpContextContract) {
        const publicidade = await Publicidade.findOrFail(params.id)

        return {
            message: 'Publicidade excluido com sucesso',
            data: publicidade,
        }
    }

}
