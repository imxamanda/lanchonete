 import type { HttpContext } from '@adonisjs/core/http'

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

        const produtoIngrediente = await ProdutoIngrediente.findOrFail(params.id)
        const dados = request.only(['produtoId', 'ingredienteId'])

        produtoIngrediente.merge(dados)
        return await produtoIngrediente.save()
    }


    async destroy({params}: HttpContext){
       const produtoIngrediente = await ProdutoIngrediente.findOrFail(params.id)

    
        await produtoIngrediente.delete()
        return {msg: 'Registro deletado com sucesso', produtoIngrediente}
    }
}