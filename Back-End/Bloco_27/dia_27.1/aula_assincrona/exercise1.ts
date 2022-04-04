class Tv {
brand: string;
size: number;
resolution: string;
connections: string[];
connectedTo?: string;

constructor(brand: string, size: number, resolution: string, connections: string[] ) {
  this.brand = brand;
  this.size = size;
  this.resolution = resolution;
  this.connections = connections;
}

turnOn():void {
  console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \navailable connections: ${this.connections}`);
}
};

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn()