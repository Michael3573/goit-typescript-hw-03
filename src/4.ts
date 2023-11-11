class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

// class Person {
//   private key: Key;

//   constructor(key: Key) {
//     this.key = key;
//   }

//   getKey(): Key {
//     return this.key;
//   }
// }

// Скорочена ініціалізація коду вище:

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

// abstract class House {
//   protected door: boolean;
//   protected key: Key;
//   protected tenants: Person[];

//   constructor(key: Key) {
//     this.door = false;
//     this.key = key;
//     this.tenants = [];
//   }

//   abstract openDoor(key: Key): void;

//   comeIn(person: Person): void {
//     if (this.door) {
//       this.tenants.push(person);
//       console.log(`${person.getKey()} прийшов(ла) до будинку.`);
//     } else {
//       console.log("Двері закриті. Неможливо зайти.");
//     }
//   }
// }

// Скорочена ініціалізація коду вище:

abstract class House {
  protected door = false;
  protected readonly key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey()} прийшов(ла) до будинку.`);
    } else {
      console.log("Двері закриті. Неможливо зайти.");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Двері відчинені.");
    } else {
      console.log("Неправильний ключ. Двері залишаються закритими.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
