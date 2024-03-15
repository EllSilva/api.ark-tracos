import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Projecto from 'App/Models/Projecto'
import { v4 as uuidv4 } from 'uuid'
import Application from '@ioc:Adonis/Core/Application'

export default class ProjectosController {

  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  //CADASTRO DE PUBLICACAO
  public async store({request, response }: HttpContextContract) {
    const body = request.body()
    try {
      //ADICIONAR DE IMAGEM
      const img1 = request.file('img1', this.validationOptions)
      const img2 = request.file('img2', this.validationOptions)
      const img3 = request.file('img3', this.validationOptions)
      const img4 = request.file('img4', this.validationOptions)
      const img5 = request.file('img5', this.validationOptions)
      const img6 = request.file('img6', this.validationOptions)
      const img7 = request.file('img7', this.validationOptions)
      const img8 = request.file('img8', this.validationOptions)
      const img9 = request.file('img9', this.validationOptions)
      const img10 = request.file('img10', this.validationOptions)
      const img11 = request.file('img11', this.validationOptions)
      const img12 = request.file('img12', this.validationOptions)
      const img13 = request.file('img13', this.validationOptions)
      const img14 = request.file('img14', this.validationOptions)
      const img15 = request.file('img15', this.validationOptions)
      const img16 = request.file('img16', this.validationOptions)
      const img17 = request.file('img17', this.validationOptions)
      const img18 = request.file('img18', this.validationOptions)
      const img19 = request.file('img19', this.validationOptions)
      const img20 = request.file('img20', this.validationOptions)

      if (img1) {
        const img1Name = `${uuidv4()}.${img1!.extname}`
        await img1.move(Application.tmpPath('uploads'), {
          name: img1Name,
        })
        body.img1 = img1Name
      }

      if (img2) {
        const img2Name = `${uuidv4()}.${img2!.extname}`
        await img2.move(Application.tmpPath('uploads'), {
          name: img2Name,
        })
        body.img2 = img2Name
      }

      if (img3) {
        const img3Name = `${uuidv4()}.${img3!.extname}`
        await img3.move(Application.tmpPath('uploads'), {
          name: img3Name,
        })
        body.img3 = img3Name
      }

      if (img4) {
        const img4Name = `${uuidv4()}.${img4!.extname}`
        await img4.move(Application.tmpPath('uploads'), {
          name: img4Name,
        })
        body.img4 = img4Name
      }

      if (img5) {
        const img5Name = `${uuidv4()}.${img5!.extname}`
        await img5.move(Application.tmpPath('uploads'), {
          name: img5Name,
        })
        body.img5 = img5Name
      }

      if (img6) {
        const img6Name = `${uuidv4()}.${img6!.extname}`
        await img6.move(Application.tmpPath('uploads'), {
          name: img6Name,
        })
        body.img6 = img6Name
      }

      if (img7) {
        const img7Name = `${uuidv4()}.${img7!.extname}`
        await img7.move(Application.tmpPath('uploads'), {
          name: img7Name,
        })
        body.img7 = img7Name
      }

      if (img8) {
        const img8Name = `${uuidv4()}.${img8!.extname}`
        await img8.move(Application.tmpPath('uploads'), {
          name: img8Name,
        })
        body.img8 = img8Name
      }


      if (img9) {
        const img9Name = `${uuidv4()}.${img9!.extname}`
        await img9.move(Application.tmpPath('uploads'), {
          name: img9Name,
        })
        body.img9 = img9Name
      }

      if (img10) {
        const img10Name = `${uuidv4()}.${img10!.extname}`
        await img10.move(Application.tmpPath('uploads'), {
          name: img10Name,
        })
        body.img10 = img10Name
      }

      if (img11) {
        const img11Name = `${uuidv4()}.${img11!.extname}`
        await img11.move(Application.tmpPath('uploads'), {
          name: img11Name,
        })
        body.img11 = img11Name
      }

      if (img12) {
        const img12Name = `${uuidv4()}.${img12!.extname}`
        await img12.move(Application.tmpPath('uploads'), {
          name: img12Name,
        })
        body.img12 = img12Name
      }

      if (img13) {
        const img13Name = `${uuidv4()}.${img13!.extname}`
        await img13.move(Application.tmpPath('uploads'), {
          name: img13Name,
        })
        body.img13 = img13Name
      }

      if (img14) {
        const img14Name = `${uuidv4()}.${img14!.extname}`
        await img14.move(Application.tmpPath('uploads'), {
          name: img14Name,
        })
        body.img14 = img14Name
      }

      if (img15) {
        const img15Name = `${uuidv4()}.${img15!.extname}`
        await img15.move(Application.tmpPath('uploads'), {
          name: img15Name,
        })
        body.img15 = img15Name
      }

      if (img16) {
        const img16Name = `${uuidv4()}.${img16!.extname}`
        await img16.move(Application.tmpPath('uploads'), {
          name: img16Name,
        })
        body.img16 = img16Name
      }

      if (img17) {
        const img17Name = `${uuidv4()}.${img17!.extname}`
        await img17.move(Application.tmpPath('uploads'), {
          name: img17Name,
        })
        body.img17 = img17Name
      }

      if (img18) {
        const img18Name = `${uuidv4()}.${img18!.extname}`
        await img18.move(Application.tmpPath('uploads'), {
          name: img18Name,
        })
        body.img18 = img18Name
      }

      if (img19) {
        const img19Name = `${uuidv4()}.${img19!.extname}`
        await img19.move(Application.tmpPath('uploads'), {
          name: img19Name,
        })
        body.img19 = img19Name
      }

      if (img20) {
        const img20Name = `${uuidv4()}.${img20!.extname}`
        await img20.move(Application.tmpPath('uploads'), {
          name: img20Name,
        })
        body.img20 = img20Name
      }


      //FIM ENVIO DE IMAGEM

      const projecto = await Projecto.create(body)

      response.status(201)

      return {
        message: 'certo projecto criado com sucesso',
        data: projecto,
      }
    } catch (error) {
      return response.unauthorized({
        error: true,
        message: 'Erro na projecto novo , Verifique seus dados',
      })
    }
  }


  public async index({ }: HttpContextContract) {
    const projecto = await Projecto.all()

    return {
      data: projecto,
    }
  }

  public async show({ request }: HttpContextContract) {
    const proj_id = request.param('id')
    const projecto = await Projecto.find(proj_id)
    return {
      data: projecto,
    }
  }

  public async update({ request }: HttpContextContract) {
    const proj_id = request.param('id')
    const body = request.only(['titulo', 'categoria', 'descricao'])
    const projecto = await Projecto.find(proj_id)
    await projecto?.merge(body).save()

    return projecto
  }

  public async destroy({ request }: HttpContextContract) {
    const proj_id = request.param('id')
    const projecto = await Projecto.findOrFail(proj_id)
    await projecto.delete()
    return "Usuario eliminado"
  }


}
