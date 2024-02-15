import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'imgs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('img1')
      table.string('img2')
      table.string('img3')
      table.string('img4')
      table.string('img5')
      table.string('img6')
      table.string('img7')
      table.string('img8')

      table.integer("projecto_id").unsigned().references("projectos.id").onDelete("CASCADE")
    
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
  
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
