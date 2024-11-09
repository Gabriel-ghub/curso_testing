import createApp from "./app.js";
import normalRepository from "./repositories/normalRepository.js";

const PORT = 3000;

const app = createApp({
  repository: normalRepository,
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
