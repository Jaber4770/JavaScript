function findMatchedProduct(products, search){
    let matchedProduct = [];
    for(let product of products){
        if(product.name.includes(search)){
            matchedProduct.push(product);
        }
    }
}


const products = [
    { name: "iPhone 15 Pro Phone", price: 1200, color: "Black", model: "A3102" },
    { name: "Samsung Galaxy S24 Ultra Phone", price: 1300, color: "Silver", model: "SM-S928B" },
    { name: "Google Pixel 8 Pro Phone", price: 1100, color: "Obsidian", model: "GA04882-US" },
    { name: "OnePlus 12R Phone", price: 900, color: "Blue", model: "CPH2609" },
    { name: "Xiaomi 14 Pro Phone", price: 1000, color: "Green", model: "23116PN5BC" },
    { name: "Sony Xperia 1 V Phone", price: 1400, color: "Black", model: "XQ-DQ72" },
    { name: "Asus ROG Phone 8 Phone", price: 1500, color: "Phantom Black", model: "ZS600KL" },
    { name: "Nothing Phone 2 Phone", price: 750, color: "White", model: "A065" },
    { name: "Realme GT5 Phone", price: 800, color: "Silver", model: "RMX3820" },
    { name: "Motorola Edge 40 Pro Phone", price: 850, color: "Black", model: "XT2301-4" },
    { name: "MacBook Pro 16 Laptop", price: 2500, color: "Space Gray", model: "A2780" },
    { name: "Dell XPS 15 Laptop", price: 2000, color: "Platinum Silver", model: "XPS-9530" },
    { name: "HP Spectre x360 Laptop", price: 1800, color: "Nightfall Black", model: "14-ea0023dx" },
    { name: "Lenovo ThinkPad X1 Carbon Laptop", price: 2100, color: "Black", model: "G3-20VTS0Q500" },
    { name: "Asus ROG Zephyrus G14 Laptop", price: 2200, color: "Moonlight White", model: "GA402RJ" },
    { name: "Razer Blade 16 Laptop", price: 2700, color: "Black", model: "RZ09-0483" },
    { name: "Microsoft Surface Laptop 5 Laptop", price: 1900, color: "Sage", model: "1953" },
    { name: "Acer Predator Helios 300 Laptop", price: 1600, color: "Abyssal Black", model: "PH315-54" },
    { name: "MSI Stealth 14 Studio Laptop", price: 2300, color: "Star Blue", model: "A13VF" },
    { name: "Samsung Galaxy Book3 Ultra Laptop", price: 2400, color: "Graphite", model: "NT960XG7K" }
];
const search = "phone";
console.log("Matched products: ", findMatchedProduct(products, search));


