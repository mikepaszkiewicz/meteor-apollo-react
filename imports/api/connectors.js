//allows us to use object notation to define sql queries like mongodb, instead of string queries
import Sequelize from 'sequelize';

// create the connection, using the name of the SQL DB you created
//At scale:
//      1. what are the differences / quirks with production?
//      2. defined / exported globally from one place?
//      3. why not one file per model and default export?
const db = new Sequelize('apollodemo', "root", null, { host: 'localhost', dialect: 'mysql' });

const PostModel = db.define('post', {
  //these types should match ./schema.js queries for them to work
  content: { type: Sequelize.STRING },
  views: {type: Sequelize.INTEGER},
}, { timestamps: false });

// create the table if it doesn't exist yet
//http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-method-sync
db.sync();

//Now it's synced so we can access the Model in dot notation and export it
const Post = db.models.post;
export { Post };
