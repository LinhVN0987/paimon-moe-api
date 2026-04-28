import { MigrationInterface, QueryRunner } from 'typeorm';
import { Banner } from '../entities/banner';

const banners = {
  characters: {
    name: 'Moonsong of the Groves',
    start: '2026-04-28 18:00:00',
    end: '2026-05-19 14:59:00',
    id: 300099,
  },
  weapons: {
    name: 'Epitome Invocation',
    start: '2026-04-28 18:00:00',
    end: '2026-05-19 14:59:00',
    id: 400098,
  },
  chronicled: {
    name: 'Dewlit Tranquility',
    start: '2026-04-28 18:00:00',
    end: '2026-05-19 14:59:00',
    id: 500006,
  },
};

export class UpdateBanner1777371043426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const newCharacterBanner = banners.characters;
    const characterBanner = new Banner();
    characterBanner.id = newCharacterBanner.id;
    characterBanner.type = 'characters';
    characterBanner.name = newCharacterBanner.name;
    characterBanner.start = `${newCharacterBanner.start}+8`;
    characterBanner.end = `${newCharacterBanner.end}+8`;

    const newWeaponBanner = banners.weapons;
    const weaponBanner = new Banner();
    weaponBanner.id = newWeaponBanner.id;
    weaponBanner.type = 'weapons';
    weaponBanner.name = newWeaponBanner.name;
    weaponBanner.start = `${newWeaponBanner.start}+8`;
    weaponBanner.end = `${newWeaponBanner.end}+8`;

    const newChronicledBanner = banners.chronicled;
    const chronicledBanner = new Banner();
    chronicledBanner.id = newChronicledBanner.id;
    chronicledBanner.type = 'chronicled';
    chronicledBanner.name = newChronicledBanner.name;
    chronicledBanner.start = `${newChronicledBanner.start}+8`;
    chronicledBanner.end = `${newChronicledBanner.end}+8`;

    await queryRunner.manager.save([
      characterBanner,
      weaponBanner,
      chronicledBanner,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(Banner, [300099, 400098, 500006]);
  }
}
