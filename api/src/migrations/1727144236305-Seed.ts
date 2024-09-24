import { MigrationInterface, QueryRunner } from 'typeorm'

export class Seed1727144236305 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "pokemon" ("id", "name", "attack", "defense", "hp", "speed", "type", "imageUrl") 
      VALUES ('pokemon-1', 'Pikachu', '4', '3', '3', '6', 'Electrico', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'),
      ('pokemon-2', 'Charmander', '4', '3', '3', '4', 'Fuego', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'),
      ('pokemon-3', 'Squirtle', '3', '4', '3', '3', 'Agua', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'),
      ('pokemon-4', 'Bulbasur', '4', '3', '3', '3', 'Planta', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'),
      ('pokemon-5', 'Eevee', '4', '3', '4', '5', 'Normal', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png')`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE  FROM pokemon WHERE id IN ('pokemon-1', 'pokemon-2', 'pokemon-3', 'pokemon-4', 'pokemon-5')`
    )
  }
}
