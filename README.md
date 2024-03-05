# To-Do App README

This To-Do App is a simple web application built using Express.js, MongoDB, Node.js, HTML, and Bootstrap. It allows users to create, read, update, and delete tasks.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/todo-app.git
   ```

2. Navigate into the project directory:
   ```bash
   cd todo-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up MongoDB:
   - Ensure you have MongoDB installed and running on your system.
   - Update the MongoDB connection URI in `config/db.js` file if needed.

5. Start the application:
   ```bash
   npm start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Features

- **Create**: Add new tasks with a title and optional description.
- **Read**: View a list of existing tasks.
- **Update**: Edit the title or description of a task.
- **Delete**: Remove tasks from the list.

## Technologies Used

- **Express.js**: Backend framework for handling HTTP requests.
- **MongoDB**: NoSQL database for storing task data.
- **Node.js**: JavaScript runtime environment for server-side code execution.
- **HTML**: Markup language for creating the structure of web pages.
- **Bootstrap**: Frontend framework for designing responsive and mobile-first websites.

## Project Structure

- `app.js`: Entry point of the application.
- `routes/todoRoutes.js`: Defines routes for handling CRUD operations on tasks.
- `models/user.js`: Defines the schema and methods for interacting with the MongoDB collection.
- `views(Front)/`: Contains HTML files for rendering UI.
- `public/`: Contains static assets like CSS, JavaScript, and images.

## Contributing

Contributions are welcome! Please feel free to open issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
  

  
