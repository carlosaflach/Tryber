class TV {
  _brand: string;
  _size: number;
  _resolution: string;
  _connections: string[];
  _connectedTo?: string; // Se não passar como um atributo opcional, na hora de instanciar um objeto irá dar erro.

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
};

const samsung = new TV('Samsung', 27, '4k', ['HDMI']);
samsung.turnOn();

