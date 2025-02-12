import { db } from "@/db"
import { categories } from "@/db/schema"

const categoryNames = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "New and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events"
]

async function main() {
  console.log("seeding category")

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Video related to ${name.toLowerCase()}`
    }))

    await db.insert(categories).values(values)

    console.log("Category seeded success")
  } catch (error) {
    console.log("Error seeding category", error)
  }
}

main()