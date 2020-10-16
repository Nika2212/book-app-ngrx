import { StorageGroups } from '../enums/storage-groups';

export class Storage {
  private static getArray<T>(group: StorageGroups): T[] {
    const rawData = localStorage.getItem(group);

    if (!rawData || typeof rawData === 'undefined') {
      return [] as T[];
    }

    let entities = JSON.parse(rawData);

    if (!Array.isArray(entities)) {
      entities = [entities];
    }

    return entities as T[];
  }

  public static store<T>(group: StorageGroups, entities: T[]): void {
    Storage.clear<T>(group);

    localStorage.setItem(group, JSON.stringify(entities));
  }

  public static get<T>(group: StorageGroups): T[] {
    return Storage.getArray<T>(group);
  }

  public static getById<T>(group: StorageGroups, id: string): T {
    const entities = Storage.getArray<T>(group);

    // @ts-ignore
    return entities.find(e => e.id === id);
  }

  public static set<T>(group: StorageGroups, entity: T): void {
    const entities = Storage.getArray<T>(group);

    // @ts-ignore
    if (!entities.some(e => e.id === id)) {
      entities.push(entity);

      localStorage.setItem(group, JSON.stringify(entities));
    }
  }

  public static update<T>(group: StorageGroups, id: string, entity: T): void {
    const entities = Storage.getArray<T>(group);

    // @ts-ignore
    if (entities.some(e => e.id === id)) {
      // @ts-ignore
      const indexOf = entities.findIndex(e => e.id === id);
      entities[indexOf] = entity;

      this.clear(group);

      localStorage.setItem(group, JSON.stringify(entities));
    }
  }

  public static remove<T>(group: StorageGroups, id: string): void {
    const entities = Storage.getArray<T>(group);

    // @ts-ignore
    if (entities.some(e => e.id === id)) {
      // @ts-ignore
      const indexOf = entities.findIndex(e => e.id === id);
      entities.splice(indexOf, 1);

      localStorage.setItem(group, JSON.stringify(entities));
    }
  }

  public static has<T>(group: StorageGroups, id: string): boolean {
    const entities = Storage.getArray<T>(group);

    // @ts-ignore
    return entities.some(e => e.id === id);
  }

  public static clear<T>(group: StorageGroups): void {
    localStorage.removeItem(group);
  }
}
