export class DadataModel {
  constructor(public suggestions: Suggestion[]) {
  }
}

class Suggestion {
  constructor(
    public value: string,
    public data: Data
  ) {
  }
}

class Data {
  constructor(
    public inn: string,
    public ogrn: string,
    public address: Address,
    public state: State,
  ) {
  }

}

class Address {
  constructor(public value: string) {
  }
}

class State {
  constructor(public registration_date: number) {
  }
}
