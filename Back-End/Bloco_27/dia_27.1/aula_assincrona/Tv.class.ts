class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string; // Se não passar como um atributo opcional, na hora de instanciar um objeto irá dar erro.

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(
      `TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \n\
        available connections: ${this._connections}`,
    );
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    // permite setar undefined ou uma conexão que esteja no `connections`
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
};

const samsung = new TV('Samsung', 27, '4k', ['HDMI']);
samsung.turnOn();
samsung.connectedTo= 'wi-fi';
console.log("Connected To: ", samsung.connectedTo);
samsung.connectedTo= 'HDMI';
console.log("Connected To: ", samsung.connectedTo);


