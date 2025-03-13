const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Sample Minecraft recipes database
const recipes = {
    "stick": {
        "name": "Stick",
        "ingredients": ["Wood Planks"]
    },
    "crafting_table": {
        "name": "Crafting Table",
        "ingredients": ["Wood Planks"]
    },
    "torch": {
        "name": "Torch",
        "ingredients": ["Coal", "Stick"]
    }
};

// API Route to fetch recipe by item name
app.get('/recipe', (req, res) => {
    const item = req.query.item?.toLowerCase();
    if (item && recipes[item]) {
        res.json(recipes[item]);
    } else {
        res.status(404).json({ error: "Recipe not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
