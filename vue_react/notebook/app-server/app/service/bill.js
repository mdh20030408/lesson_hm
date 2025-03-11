const Service = require('egg').Service;

class BillService extends Service {
    async add(bill){
        const {ctx} = this;
        try{
            const result = await ctx.model.Bill.create(bill);
            return result;
        }catch(err){
            console.log(err);
            return null;
        }
    }

    async update(params){
        const {
            ctx,
            app
        } = this;
        try{
        let result = await ctx.model.Bill.update({
            ...params
        },{
            where:{
                id: params.id,
                user_id: params.user.id
            }
        })
        return result;
        }catch(err){
            console.log(err);
            return null;
        }
    }
    async delete(id){
        
    }
}

module.exports = BillService;