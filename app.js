const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

// Dummy data
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 100" },
  { id: 4, name: "Item 2000" },
  { id: 5, name: "Item 3000" },
  { id: 6, name: "Item 5000" },
  { id: 7, name: "Item 9000" },
];

// Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Get single item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// Create new item
app.post("/items", (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update item
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  item.name = req.body.name;
  res.json(item);
});

// Delete item
app.delete("/items/:id", (req, res) => {
  items = items.filter((i) => i.id !== parseInt(req.params.id));
  res.json({ message: "Item deleted" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


