import { EventEmitter } from '@angular/core';

export interface PaginationInstance {
  id: string;
  elementsPerPage: number;
  currentPage: number;
  totalElements?: number;
}

export class PaginationService {

  constructor() { }

  public change: EventEmitter<string> = new EventEmitter<string>();
  private instances: { [id: string]: PaginationInstance } = {};

  public register(instance: PaginationInstance) {
    if (!this.instances[instance.id]) {
      this.instances[instance.id] = instance;
      this.change.emit(instance.id);
    } else {
        let changed = this.updateInstance(instance);
        if (changed) {
            this.change.emit(instance.id);
        }
      }
  }

  private updateInstance(instance: PaginationInstance): boolean {
    let changed = false;
    for (let prop in this.instances[instance.id]) {
        if (instance[prop] !== this.instances[instance.id][prop]) {
            this.instances[instance.id][prop] = instance[prop];
            changed = true;
        }
    }
    return changed;
  }

  public getCurrentPage(id: string): number {
    if (this.instances[id]) {
        return this.instances[id].currentPage;
    }
  }

  public getInstance(id: string): PaginationInstance {
    if (this.instances[id]) {
        return this.clone(this.instances[id]);
    }
    return {} as PaginationInstance;
  }

private clone(obj: any): any {
    let target = {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
        }
    }
    return target;
  }
}
