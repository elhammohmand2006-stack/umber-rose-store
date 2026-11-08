// All products live here. To change a name, price or photo, edit this file only.
// If a photo does not load, replace its "img" link with another image link.

const products = [
    {
        id: 1,
        name: "Rosette Leather Tote",
        category: "Bags",
        price: 89,
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
        desc: "A roomy tote in soft leather that fits a laptop, a book and your whole day.",
        details: "Handmade from vegetable-tanned leather. It has an inner zip pocket, strong handles and a magnetic closure. The color deepens beautifully with use."
    },
    {
        id: 2,
        name: "Umber Satchel",
        category: "Bags",
        price: 109,
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
        desc: "A structured satchel in deep brown with a gold buckle and a long strap.",
        details: "Wear it on the shoulder or across the body. Two main compartments keep your things organized, and the lining is made from recycled cotton."
    },
    {
        id: 3,
        name: "Blush Crossbody",
        category: "Bags",
        price: 74,
        img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
        desc: "Small, light and soft pink. Holds a phone, keys and a lipstick.",
        details: "An adjustable strap makes it easy to wear short or long. The zip closes smoothly and the inside is lined with a soft fabric."
    },
    {
        id: 4,
        name: "Daily Backpack",
        category: "Bags",
        price: 95,
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
        desc: "A calm everyday backpack with a padded laptop pocket.",
        details: "Water-resistant fabric, padded shoulder straps and a hidden pocket on the back for your wallet. Perfect for school, work and travel."
    },
    {
        id: 5,
        name: "Rose Gold Watch",
        category: "Accessories",
        price: 129,
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
        desc: "A slim watch with a rose gold case and a clean, easy-to-read face.",
        details: "Scratch-resistant glass, a 40 mm case and a comfortable strap. It is splash-proof, so rain and hand washing are no problem."
    },
    {
        id: 6,
        name: "Sunset Sunglasses",
        category: "Accessories",
        price: 49,
        img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
        desc: "Light frames with warm brown lenses that protect from the sun.",
        details: "UV400 lenses, a flexible frame and a soft case in the box. They are light enough to wear all day."
    },
    {
        id: 7,
        name: "Quiet Headphones",
        category: "Accessories",
        price: 139,
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
        desc: "Wireless headphones with deep sound and 30 hours of battery.",
        details: "Soft ear cushions, noise reduction and fast charging. Fold them flat and keep them in the travel case."
    },
    {
        id: 8,
        name: "Cocoa Wallet",
        category: "Accessories",
        price: 39,
        img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
        desc: "A slim leather wallet with six card slots and a coin pocket.",
        details: "Real leather, careful stitching and a size that fits in any pocket. A great gift for someone you love."
    }
];

// One product, four colors (used in the color slider on the home page).
// "color" is the small circle color. If a name does not match its photo, change "colorName".
const colorProducts = [
    {
        id: 101,
        name: "Stride Sneaker - Cherry",
        colorName: "Cherry",
        color: "#B5373A",
        price: 120,
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 102,
        name: "Stride Sneaker - Sand",
        colorName: "Sand",
        color: "#D8C3A5",
        price: 120,
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 103,
        name: "Stride Sneaker - Graphite",
        colorName: "Graphite",
        color: "#4A4A4A",
        price: 120,
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 104,
        name: "Stride Sneaker - Cocoa",
        colorName: "Cocoa",
        color: "#6B4A3A",
        price: 120,
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    }
];

// find any product (normal or color product) by its id
function getProduct(id){
    return [...products, ...colorProducts].find(p => p.id === id);
}
