const StatsService = {
    getAllTrails(knex){
        found = knex.select('*').from('trails');
        return found
    },
    insertTrail(knex, insertTrail) {
        return knex.insert(insertTrail).into('trails');
    },
}

module.export = StatsService;