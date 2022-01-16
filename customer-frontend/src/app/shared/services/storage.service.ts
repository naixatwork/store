import {Injectable} from '@angular/core';
import {parseJson} from "@angular/cli/utilities/json-file";

export type item<T> = {
  key: string;
  value: T
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private keys: Set<string>;

  constructor() {
    this.keys = new Set<string>(Object.keys(localStorage));
  }

  public get<Type>(key: string): Type | null {
    const throwError = () => {
      throw Error(`key ${key} doesnt exists, form: ${this}`);
    };

    if (!this.checkIfKeyExists(key)) {
      throwError.call(this);
      return null;
    }
    return JSON.parse(localStorage.getItem(key) || '');
  }

  public has(key: string): boolean {
    return this.keys.has(key);
  }

  public set(item: item<Object>): void {
    const {key, value} = item;
    if (this.checkIfKeyExists(key)) return;
    this.keys.add(key);
    localStorage.setItem(key, JSON.stringify(value));
  }

  public remove(key: string): void {
    if (!this.checkIfKeyExists(key)) return;
    localStorage.removeItem(key);
  }

  public update(item: item<any>): void {
    const {key, value} = item;
    if (!this.checkIfKeyExists(key)) return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  private checkIfKeyExists(key: string): boolean {
    return this.keys.has(key);
  }
}
