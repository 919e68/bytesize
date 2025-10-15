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

puts "✅ Created #{Flavor.count} flavors!"
