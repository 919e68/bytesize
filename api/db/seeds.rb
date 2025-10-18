# flavors
flavors = [
  { name: "Salty",    icon: "🧂" },
  { name: "Sweet",    icon: "🍬" },
  { name: "Spicy",    icon: "🌶️" },
  { name: "Umami",    icon: "🍄" },
  { name: "Sour",     icon: "🍋" },
  { name: "Savory",   icon: "🍖" },
  { name: "Bitter",   icon: "🍫" },
  { name: "Smoky",    icon: "🔥" },
  { name: "Tangy",    icon: "🍊" },
  { name: "Zesty",    icon: "🥭" },
  { name: "Creamy",   icon: "🥛" },
  { name: "Cheesy",   icon: "🧀" },
  { name: "Buttery",  icon: "🧈" },
  { name: "Herbal",   icon: "🌿" },
  { name: "Fruity",   icon: "🍓" },
  { name: "Nutty",    icon: "🥜" },
  { name: "Earthy",   icon: "🌰" },
  { name: "Peppery",  icon: "🫑" },
  { name: "Garlicky", icon: "🧄" },
  { name: "Toasty",   icon: "🍞" }
]

flavors.each do |flavor|
  Flavor.find_or_create_by!(name: flavor[:name]) do |f|
    f.icon = flavor[:icon]
  end
end

puts "✅ created #{flavors.count} flavors!"

# users
users = [
  { username: 'spire', name: 'Mick B.', password: 'secret123' },
  { username: 'grey', name: 'Grey A.', password: 'secret123' },
  { username: 'orange', name: 'Orange C.', password: 'secret123' },
]

users.each do |user|
  User.find_or_create_by!(username: user[:username]) do |u|
    u.name = user[:name]
    u.password = user[:password]
  end
end

puts "✅ created #{users.count} users!"

# snacks
snacks = [
  {
    user_id: 1,
    name: 'Creamy Garlic Bites',
    icon: '🧄',
    description: 'Soft, bite-sized puffs with a smooth creamy texture and a bold garlic flavor that melts in your mouth.',
    flavor_ids: [ 6, 11, 19 ]
  },
  {
    user_id: 1,
    name: "Zesty Lemon Chips",
    icon: "🍟",
    description: "Thin, crispy chips with a refreshing lemon zest that adds a bright, tangy twist to every bite.",
    flavor_ids: [ 5, 9, 10 ]
  },
  {
    user_id: 1,
    name: "Buttery Herb Twists",
    icon: "🥨🧈🌿",
    description: "Flaky, golden-baked twists infused with rich butter and fragrant herbs for a comforting, savory snack.",
    flavor_ids: [ 6, 13, 14 ]
  },
  {
    user_id: 2,
    name: "Spicy Mango Crunch",
    icon: "🥭",
    description: "Crispy mango chips dusted with a fiery chili seasoning, blending sweet and spicy flavors for an irresistible kick.",
    flavor_ids: [ 2, 3, 15 ]
  },
  {
    user_id: 2,
    name: "Creamy Truffle Bites",
    icon: "🍄",
    description: "Smooth, creamy bites infused with rich truffle essence, offering an indulgent earthy and savory experience.",
    flavor_ids: [ 6, 11, 17 ]
  },
  {
    user_id: 2,
    name: "Tangy Tomato Crackers",
    icon: "🍅",
    description: "Crispy baked crackers bursting with tangy tomato flavor and a hint of zest for a lively snack experience.",
    flavor_ids: [ 5, 9, 10 ]
  },
  {
    user_id: 3,
    name: "Sweet Berry Clusters",
    icon: "🍓🍯",
    description: "Crunchy oat clusters coated in honey and mixed with dried berries for a naturally sweet, fruity delight.",
    flavor_ids: [ 2, 15, 13 ]
  },
  {
    user_id: 3,
    name: "Spicy Chili Rings",
    icon: "🌶️",
    description: "Crispy onion rings coated in a bold chili seasoning, delivering a fiery crunch with every bite.",
    flavor_ids: [ 1, 3, 6 ]
  },
  {
    user_id: 3,
    name: "Umami Rice Crackers",
    icon: "🍘",
    description: "Light, crunchy rice crackers seasoned with soy and seaweed for a deep, satisfying umami flavor.",
    flavor_ids: [ 1, 4, 6 ]
  }
]

snacks.each do |snack|
  Snack.find_or_create_by!(name: snack[:name]) do |s|
    s.user_id = snack[:user_id]
    s.icon = snack[:icon]
    s.description = snack[:description]
    s.flavor_ids = snack[:flavor_ids]
  end
end

puts "✅ created #{snacks.count} snacks"
