const StatsService = {
    getAllTrails(knex) {
       // found = found
    //return  knex.select('*').from('trails');
    
    return knex('trails')
        .avg({sessionTimeAvg:'sessionTime'})
        .avg({redHoverTimeAvg:'redHoverTime'})
        .avg({redHoverAmountAvg:'redHoverAmount'})
        .avg({blueHoverTimeAvg:'blueHoverTime'})
        .avg({blueHoverAmountAvg:'blueHoverAmount'})
        .avg({yellowHoverTimeAvg:'yellowHoverTime'})
        .avg({yellowHoverAmountAvg:'yellowHoverAmount'})
        .avg({oneHoverTimeAvg:'oneHoverTime'})
        .avg({oneHoverAmountAvg:'oneHoverAmount'})
        .avg({twoHoverTimeAvg:'twoHoverTime'})
        .avg({twoHoverAmountAvg:'twoHoverAmount'})
        .avg({threeHoverTimeAvg:'threeHoverTime'})
        .avg({threeHoverAmountAvg:'threeHoverAmount'})
    },
    insertTrail(knex, insertTrail) {
        console.log(insertTrail)
        return knex.insert(insertTrail).into('trails');
    },
    getMobileCount(knex){
        return knex.count('*').from('trails').where('mobile', true);
    },
    getAverages(knex){
        return knex('trails').avg({
            avg:['sessionTime', 
            'redHoverTime', 
            'redHoverAmount']
        });
    },
};

module.exports = StatsService;