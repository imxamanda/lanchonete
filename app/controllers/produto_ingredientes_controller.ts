// import type { HttpContext } from '@adonisjs/core/http'

import ProdutoIngrediente from "../models/produto_ingrediente.js"

export default class ProdutoIngredientesController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await ProdutoIngrediente.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await ProdutoIngrediente.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['produtoId', 'ingredienteId'])
        return await ProdutoIngrediente.create(dados)
    }

    async update({params, request}: HttpContext){

        const ProdutoIngrediente = await ProdutoIngrediente.findOrFail(params.id)
        const dados = request.only(['produtoId', 'ingredienteId'])

        ProdutoIngrediente.merge(dados)
        return await ProdutoIngrediente.save()
    }


    async destroy({params}: HttpContext){
       const ProdutoIngrediente = await ProdutoIngrediente.findOrFail(params.id)

    
        await ProdutoIngrediente.delete()
        return {msg: 'Registro deletado com sucesso', ProdutoIngrediente}
    }
}