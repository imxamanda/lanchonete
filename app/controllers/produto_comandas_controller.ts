// import type { HttpContext } from '@adonisjs/core/http'

import ProdutoComanda from "../models/ProdutoComanda.js"

export default class ProdutoComandasController {

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await ProdutoComanda.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await ProdutoComanda.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['produtoId', 'comandaId'])
        return await ProdutoComanda.create(dados)
    }

    async update({params, request}: HttpContext){

        const ProdutoComanda = await ProdutoComanda.findOrFail(params.id)
        const dados = request.only(['produtoId', 'comandaId'])

        ProdutoComanda.merge(dados)
        return await ProdutoComanda.save()
    }


    async destroy({params}: HttpContext){
       const ProdutoComanda = await ProdutoComanda.findOrFail(params.id)

    
        await ProdutoComanda.delete()
        return {msg: 'Registro deletado com sucesso', ProdutoComanda}
    }
}