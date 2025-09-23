// app/menu/page.tsx
import * as React from "react";

type MenuItem = {
  id: string;
  name: string;
  price?: string; // keep as string to support ranges/notes
  description?: string;
  tags?: string[]; // e.g., ["V"], ["N"], ["Spicy"]
};

type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  columns?: 1 | 2 | 3;
};

const sections: MenuSection[] = [
  {
    id: "to-start-cold",
    title: "To Start — Cold",
    items: [
      {
        id: "cold-cuts",
        name: "Cold Cuts Selection",
        price: "$19",
        description:
          "Prosciutto, Salami, Mortadella, Manchego, Fontina, Blue Cheese, Berries & Rosemary Jam, Toast",
      },
      {
        id: "shrimp-ceviche",
        name: "Shrimp Ceviche",
        price: "$16",
        description: "Cooked shrimp with tomato and lemon base",
      },
      {
        id: "marinated-olives",
        name: "Marinated Olives",
        price: "$6",
        description: "Mix of citric marinated olives",
        tags: ["V"],
      },
      {
        id: "burrata",
        name: "Burrata",
        price: "$19",
        description:
          "Burrata, arugula, blistered cherry tomato, pesto (no pine nuts), balsamic glaze",
        tags: ["V"],
      },
      {
        id: "caesar-salad",
        name: "Caesar Salad",
        description: "Add chicken $4 / shrimp $6",
      },
      {
        id: "house-salad",
        name: "House Salad",
        price: "$13",
        description:
          "Lettuce, red onions, tomato. Add chicken $6 / shrimp $7",
        tags: ["V"],
      },
      {
        id: "steak-salad",
        name: "Steak Salad",
        price: "$19",
        description: "4 oz skirt steak, lettuce, red onions, tomato & almonds",
      },
    ],
    columns: 2,
  },
  {
    id: "to-start-hot",
    title: "To Start — Hot",
    items: [
      { id: "empanada", name: "Empanada (1 pc)", price: "$4", description: "Beef or Spinach & Cream", tags: ["N","V"] },
      {
        id: "provoleta",
        name: "Provoleta",
        price: "$13",
        description: "Crispy provolone, caramelized onions, roasted peppers. Add Chorizo $4",
        tags: ["V"],
      },
      {
        id: "butternut-soup",
        name: "Butternut Squash Soup",
        price: "$4",
        description: "Creamy calabaza soup with basil oil & croutons",
        tags: ["V"],
      },
      {
        id: "chicken-wings",
        name: "Chicken Wings (4 pc)",
        price: "$13",
        description: "Chimi-marinated, fried. Choice of spicy or non-spicy",
      },
      { id: "grilled-chorizo", name: "Grilled Chorizo", price: "$9", description: "Made in-house" },
      { id: "morcilla", name: "Morcilla", price: "$9", description: "Spiced blood sausage" },
      { id: "molleja", name: "Molleja", price: "$11", description: "Grilled veal sweetbreads" },
      {
        id: "choripizza",
        name: "Choripizza",
        price: "$15",
        description:
          "Chorizo over toasted bread with caramelized onions, mozzarella, provolone",
      },
    ],
    columns: 2,
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
      {
        id: "chivito-uru",
        name: "Chivito Uruguayo*",
        price: "$20",
        description:
          "Sirloin slices, fried egg, ham, provolone, bacon, lettuce, onions, peppers. Served with fries",
      },
      {
        id: "choripan",
        name: "Choripán*",
        price: "$16",
        description: "Chorizo sandwich with chimichurri, lettuce, tomato, fries. Add Provolone $2",
      },
      {
        id: "milanesa-sand",
        name: "Milanesa",
        price: "$24",
        description: "Breaded beef, lettuce, tomato, ham, cheese, chimimayo",
      },
      {
        id: "burger-rio",
        name: "Burger Rioplatense",
        price: "$16",
        description:
          "Brisket & short rib burger with tomato, lettuce, chimimayo, fries",
      },
      {
        id: "estancia-burger",
        name: "Estancia Burger*",
        price: "$19",
        description:
          "House burger with ham, cheese, mushrooms, tomato, lettuce, chimimayo, fries",
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    items: [
      {
        id: "chivito-plato",
        name: "Chivito al Plato",
        price: "$20",
        description:
          "Sirloin slices, fried egg, ham, provolone, bacon, lettuce, onions, peppers. Served with fries",
      },
      {
        id: "four-cheese-ravioli",
        name: "Four Cheese Ravioli (V)",
        price: "$24",
        description: "Choice of mushroom cream, tomato sauce, or bolognese",
        tags: ["V"],
      },
      {
        id: "atlantic-salmon",
        name: "Atlantic Salmon*",
        price: "$28",
        description:
          "Pan-seared salmon, mashed potatoes, asparagus, mustard cream",
      },
    ],
  },
  {
    id: "milanesas",
    title: "Milanesas",
    subtitle: "Breaded beef / Deep fried / Delicious",
    items: [
      { id: "milanesa-regular", name: "Regular", price: "$24", description: "Served with fries" },
      {
        id: "milanesa-napolitana",
        name: "Napolitana",
        price: "$28",
        description: "Mozzarella, provolone, ham, tomato sauce",
      },
      {
        id: "milanesa-twin-cities",
        name: "Twin Cities",
        price: "$32",
        description: "Burrata, prosciutto, tomato sauce, provolone, mozzarella",
      },
      { id: "milanesa-a-caballo", name: "Make it “a Caballo”", price: "+$5", description: "Add 2 fried eggs on top" },
    ],
  },
  {
    id: "from-the-grill",
    title: "From the Grill*",
    subtitle: "Served with 2 sides",
    items: [
      { id: "asado-de-tira", name: "Asado de Tira*", price: "$39", description: "12 oz bone-in CAB short ribs" },
      { id: "new-york", name: "New York*", price: "$41", description: "10 oz CAB striploin" },
      { id: "ribeye", name: "Ribeye*", price: "$45", description: "10 oz CAB ‘Ojo de Bife’" },
      { id: "tomahawk", name: "Tomahawk*", price: "$135", description: "Full bone-in 32 oz ribeye" },
      { id: "tenderloin", name: "Tenderloin*", price: "$49", description: "8 oz prime tenderloin" },
      { id: "skirt-steak", name: "Skirt Steak*", price: "$42", description: "10 oz skirt steak" },
      { id: "chicken-breast", name: "Chicken Breast*", price: "$25", description: "Marinated chicken breast" },
      { id: "porterhouse", name: "Porterhouse*", price: "$57", description: "16 oz T-bone steak" },
      { id: "a-la-riojana", name: "Make any steak “A LA RIOJANA”", price: "+$6", description: "Caramelized onions, fried egg, tomato sauce, green peas" },
    ],
    columns: 2,
  },
  {
    id: "parrilladas",
    title: "Parrilladas",
    items: [
      {
        id: "parrillada-2",
        name: "Parrillada for 2*",
        price: "$127",
        description:
          "Striploin, skirt steak, asado de tira, chicken breast, chorizo, morcilla, chimichurri, salsa criolla",
      },
      {
        id: "parrillada-la-estancia",
        name: "Parrillada La Estancia*",
        price: "$169",
        description:
          "Provoleta, ribeye, striploin, skirt steak, asado de tira, lomo, chicken breast, chorizo, morcilla, chimichurri, salsa criolla",
      },
    ],
  },
  {
    id: "asado-feast",
    title: "ASADO FEAST*",
    subtitle: "Only available for entire group / No individual order",
    items: [
      {
        id: "asado-feast-item",
        name: "All You Can Eat",
        price: "$55",
        description:
          "Asado de tira, chorizo, chicken breast, mashed potatoes, house salad, fries",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      { id: "fingerling", name: "Fingerling Potatoes", price: "$7" },
      { id: "steak-fries", name: "Steak Fries", price: "$7" },
      { id: "sauteed-veg", name: "Sautéed Vegetables", price: "$7" },
      { id: "rustic-mash", name: "Rustic Mashed Potatoes", price: "$7" },
      { id: "sauteed-mush", name: "Sautéed Garlic Mushrooms", price: "$7" },
      { id: "house-salad-side", name: "House Salad", price: "$7", description: "Lettuce, red onions, tomato" },
    ],
    columns: 3,
  },
  {
    id: "kids",
    title: "Kids Menu",
    items: [
      { id: "chickenitos", name: "Chickenitos", price: "$8", description: "4 pc chicken tenders, fries" },
      { id: "mac-cheese", name: "Mac n' Cheese", price: "$7", description: "Macaroni pasta with cheese and cream" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { id: "poste-chaja", name: "Postre Chajà", price: "$12", description: "Peaches, meringue, whipped cream, vanilla sponge cake" },
      { id: "panqueque", name: "Panqueque", price: "$9", description: "Sweet crêpe stuffed with dulce de leche" },
      { id: "flan", name: "Flan", price: "$9", description: "Baked vanilla custard" },
      {
        id: "ice-cream",
        name: "Ice Cream Scoop",
        price: "$6",
        description: "Vanilla • Chocolate • Dulce de Leche. Add Dulce de Leche or Berries +$3",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { id: "house-cocktails", name: "House Cocktails", price: "$7" },
      { id: "el-asador", name: "El Asador", price: "$14", description: "Bourbon, grilled orange, lemon, rosemary" },
      { id: "the-su", name: "The Su’", price: "$13", description: "Bourbon, mint, peach, cinnamon, lime" },
      { id: "rum-of", name: "Rum Old Fashioned", price: "$14", description: "Rum, vanilla, star anise, bitters" },
      { id: "mate-venga", name: "Mate y Venga", price: "$14", description: "Vodka, yerba mate, lemon, lime" },
      { id: "foam-later", name: "Foam me Later", price: "$15", description: "Gin, guava, lime, vanilla & pink peppercorn foam" },
      { id: "viridian", name: "Viridian", price: "$13", description: "Vodka, elderflower, cucumber, rosemary syrup, lime" },
      { id: "jardin-jalisco", name: "Jardin Jalisco", price: "$16", description: "Tequila, prosecco, elderflower, Grand Marnier, guava, lemon" },
      { id: "scarlet-sin", name: "Scarlet Sin", price: "$15", description: "Tequila, Grand Marnier, hibiscus, strawberry, lime" },
      { id: "spicita", name: "Spicita Mezcalita", price: "$14", description: "Mezcal, mango, pineapple, jalapeño" },
      // Beers
      { id: "beer-draft", name: "Draft Beers", price: "$7", description: "Castle Danger Cream Ale • Modelo Especial • Modelo Negra • Coors Light • Pacifico" },
      { id: "beer-bottled", name: "Bottled", description: "Corona Extra • Heineken • Stella Artois • Angry Orchard • Voodoo Ranger (IPA)" },
    ],
    columns: 2,
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-0.5 text-xs rounded-full bg-accent text-accent-foreground/90">
      {children}
    </span>
  );
}

function ItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="rounded-xl bg-card border border-border p-4 hover:border-foreground/20 transition">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
          {item.description ? (
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          ) : null}
          {item.tags && item.tags.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          ) : null}
        </div>
        {item.price ? (
          <span className="text-sm md:text-base whitespace-nowrap text-foreground/90 font-medium">
            {item.price}
          </span>
        ) : null}
      </div>
    </article>
  );
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="px-6 py-14 md:px-10 lg:px-16 bg-gradient-to-b from-chart-4 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="uppercase tracking-widest text-sm text-muted-foreground">
                L • A • STEAKHOUSE
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
                La Estancia Menu
              </h1>
              <p className="mt-3 text-muted-foreground max-w-prose">
                Enjoy our authentic dishes—dine in, delivery, or private dining. Talk to our staff about food
                allergies and intolerances. <span className="font-medium">V</span> = Vegetarian; <span className="font-medium">N</span> = Contains Nuts.
              </p>
            </div>

            {/* Delivery buttons with shared class from globals.css */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.doordash.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="delivery-btn"
                aria-label="Order on DoorDash"
                title="DoorDash"
              >
                <img src="https://toppng.com/uploads/preview/doordash-logo-11609359542nd1g660y5t.png" alt="DoorDash" />
              </a>
              <a
                href="https://www.grubhub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="delivery-btn"
                aria-label="Order on Grubhub"
                title="Grubhub"
              >
                <img src="https://logos-world.net/wp-content/uploads/2021/08/Grubhub-Logo.png" alt="Grubhub" />
              </a>
              <a
                href="https://www.ubereats.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="delivery-btn"
                aria-label="Order on Uber Eats"
                title="Uber Eats"
              >
                <img src="https://toppng.com/uploads/preview/uber-eats-logo-11609380482tcjqocukop.png" alt="Uber Eats" />
              </a>
            </div>
          </div>

          {/* Private Dining CTA */}
          <div className="mt-6">
            <a
              href="https://resy.com/cities/minneapolis-mn/venues/la-estancia-mn?date=2025-09-13&seats=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition font-semibold"
            >
              Book Private Dining
            </a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="px-6 py-12 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {sections.map((sec) => (
            <div key={sec.id} id={sec.id}>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold">{sec.title}</h2>
                {sec.subtitle ? (
                  <p className="text-sm text-muted-foreground">{sec.subtitle}</p>
                ) : null}
              </div>
              <div
                className={[
                  "mt-6 grid gap-6",
                  sec.columns === 3
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : sec.columns === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1",
                ].join(" ")}
              >
                {sec.items.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}

          {/* Footnote / Disclaimer */}
          <div className="rounded-2xl bg-card border border-border p-5 text-sm text-muted-foreground">
            *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of
            foodborne illness, especially if you have certain medical conditions.
          </div>
        </div>
      </section>

      {/* DELIVERY PROMO */}
      <section className="px-6 pb-20 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto bg-card border border-border rounded-2xl p-8">
          <h3 className="text-xl font-semibold">Delivery</h3>
          <p className="mt-2 text-muted-foreground">
            Enjoy the convenience of having our delectable dishes delivered right to your doorstep. Perfect for busy
            days or cozy nights at home—savor the authentic flavors of La Estancia wherever you are.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.doordash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="delivery-btn"
              aria-label="Order on DoorDash"
            >
              <img src="https://toppng.com/uploads/preview/doordash-logo-11609359542nd1g660y5t.png" alt="DoorDash" />
            </a>
            <a
              href="https://www.grubhub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="delivery-btn"
              aria-label="Order on Grubhub"
            >
              <img src="https://logos-world.net/wp-content/uploads/2021/08/Grubhub-Logo.png" alt="Grubhub" />
            </a>
            <a
              href="https://www.ubereats.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="delivery-btn"
              aria-label="Order on Uber Eats"
            >
              <img src="https://toppng.com/uploads/preview/uber-eats-logo-11609380482tcjqocukop.png" alt="Uber Eats" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
