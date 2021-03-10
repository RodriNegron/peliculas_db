module.exports = (sequelize,dataTypes) =>{
    
    let alias = "Genres";

    let cols= {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true        
        },
        
        created_at:{
            type: dataTypes.DATE
        },

        name:{
            type: dataTypes.STRING
        },

        ranking:{
            type: dataTypes.INTEGER
        },

    };

    let config ={
        tableName: "genres",
        timestamps: false
    };

    const Genre = sequelize.define(alias, cols,config);

    return Genre;
}