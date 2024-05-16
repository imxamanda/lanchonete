 import type { HttpContext } from '@adonisjs/core/http'
import ProdutoComanda from '../models/produto_comanda.js'


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
        const dados = request.only(['produtoId', 'comandaId', 'quantidade'])
        return await ProdutoComanda.create(dados)
    }

    async update({params, request}: HttpContext){

        const produtoComanda = await ProdutoComanda.findOrFail(params.id)
        const dados = request.only(['produtoId', 'comandaId', 'quantidade'])

        produtoComanda.merge(dados)
        return await produtoComanda.save()
    }


    async destroy({params}: HttpContext){
       const produtoComanda = await ProdutoComanda.findOrFail(params.id)

    
        await produtoComanda.delete()
        return {msg: 'Registro deletado com sucesso', produtoComanda}
    }
}