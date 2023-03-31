//patten Bridge для загальної гри

class Cards {
	constructor(color) {
		this.color = color;
	}
};

class Color {
	constructor(type) {
		this.type = type;
	}
	get() {
		return this.type;
	}
};

class YellowColor extends Color {
	constructor() {
		super("yellow");
	}
}

class BlueColor extends Color {
	constructor() {
		super("blue");
	}
}

class Investment extends Cards {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Card: Investment, Color: ${this.color.get()}`;
	}
};

class bigInvestment extends Cards {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Card: bigInvestment, Color: ${this.color.get()}`;
	}
};