class DeviceEletronic {
  constructor(name) {
    this.name = name;
    this.on = false;
  }

  onDevice() {
    if (this.on) {
      console.log(`${this.name} ligado`);
      return;
    }
    this.on = true;
  }
  offDevice() {
    if (!this.on) {
      console.log(`${this.name} desligado`);
    }
    this.on = false;
  }
}

class Smartphone extends DeviceEletronic {
  constructor(name, color, model) {
    super(name);
    this.color = color;
    this.model = model;
  }
}

class Tablet extends DeviceEletronic {
  constructor(name, wifi) {
    super(name);
    this.wifi = wifi;
  }

  on() {
    console.log("vc alterou o metodo ligar");
  }
  talk() {
    console.log("Oi");
  }
}

const s1 = new Smartphone("Iphone", "Black", "s8");
s1.onDevice();
console.log(s1);

const t1 = new Tablet("Ipad", true);
t1.on();
t1.talk();
