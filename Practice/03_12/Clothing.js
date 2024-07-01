
class Clothing {
    constructor(
        type, 
        color, 
        style, 
        size,
        inCloset,
        brand,
    ) { 
        this.type = type;
        this.color = color;
        this.style = style;
        this.size = size;
        this.inCloset = inCloset;
        this.brand = brand;
    }
    toggleCloset(available) {
        this.inCloset = available;
    }
    addItem(ty, col, sty, siz, br) {
        this.type = ty;
        this.color = col;
        this.style = sty;
        this.size = siz;
        this.brand = br;
    }
};

class Bra extends Clothing {
    constructor(
        type, 
        color, 
        style, 
        size,
        inCloset,
        brand,
        strapType,
    ) {
        super(type, color, style, size, inCloset, brand);
        this.strapType = strapType;
    }
    addItem(ty, col, sty, siz, br, av, strap) {
        super.addItem(ty, col, sty, siz, br);
        this.type = ty;
        this.color = col;
        this.style = sty;
        this.size = siz;
        this.brand = br;
        this.inCloset = av;
        this.strapType = strap;
    }
};

export default Bra;