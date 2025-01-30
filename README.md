# React List Management App

## 🚀 Overview
This is a **React-based List Management Application** built using **TypeScript, Vite, and Tailwind CSS**. The app fetches lists from an API, allows users to create new lists, move items between lists, and handles different API states like loading, success, and failure.

## 📂 Project Structure
```
src/
├── components/          # Reusable UI Components
│   ├── FailureView.tsx  # Handles API failure state
│   ├── ListContainer.tsx # Displays list items & allows movement
│   ├── ListCreationView.tsx # Manages new list creation
│   ├── LoadingView.tsx  # Displays a loading spinner
├── App.tsx              # Root component managing state
├── index.tsx            # Entry point with React Strict Mode
├── main.tsx             # Renders the React app in the DOM
└── styles/ (Tailwind CSS) # Global styling
```

## 🔑 Features
- **API Integration**: Fetches data from `https://apis.ccbp.in/list-creation/lists`
- **List Selection & Management**: Allows selecting exactly two lists for creating a new list.
- **Item Movement**: Move list items between selected lists.
- **Error Handling**: Displays failure view with retry option.
- **Loading State**: Shows loader while fetching data.
- **Fully Responsive**: Works on all screen sizes using Tailwind CSS.
- **GitHub Pages Deployment**: Hosted on GitHub Pages.

## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-list-management.git
   cd react-list-management
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the app in the browser:
   ```
   http://localhost:5173/
   ```

## 🚀 Deployment
The project is deployed using **GitHub Pages**.

### Steps to Deploy:
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy using GitHub Pages:
   ```sh
   npm run deploy
   ```
3. Access the deployed version at:
   ```
   https://your-username.github.io/react-list-management/
   ```

## 📜 License
This project is licensed under the **MIT License**.

## 👨‍💻 Contributing
Contributions are welcome! If you find a bug or have suggestions, please open an issue or submit a pull request.

## 📞 Contact
For any inquiries, reach out at [Gmail](mailto:kavirajvedi@gmail.com).

