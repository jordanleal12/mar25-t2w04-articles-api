const PORT = process.env.PORT || 3000;

// 1. Connect to DB

// 2. Activate Express server
const { app } = require("./server.js");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
