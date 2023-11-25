import Sequelize from "sequelize";
import db from "./db.js";

const filme = db.define("filmes", {
    id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
    },
    titulo: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    ator: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    faixaEtaria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0
        }
    },
    genero: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
           
        }
    }
});

export default filme;
