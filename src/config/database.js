module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'NodeSQL',
    define: {
        timestamps: true,
        underscored: true,

    },
}

// underscored = nome_da_variavel, salva assim no banco
// database: 'NodeSQL' é o nome da base que será criada 
// com o comando sequelize db:create
