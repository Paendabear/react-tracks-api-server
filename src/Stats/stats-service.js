const StatsService = {
    getAllTrails(knex) {
       // found = found
        return  knex.select('*').from('trails');
    },
    insertTrail(knex, insertTrail) {
        return knex.insert(insertTrail).into('trails');
    },
};

module.exports = StatsService;