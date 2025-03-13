# Transviti FrontEnd Test

This project is a frontend application developed using Next.js. It includes various components such as a Navbar, ProfileCard, Dashboard, and more. The application is styled using Tailwind CSS and custom fonts.

## Project Structure

- **src/app/layout.tsx**: Main layout component that includes the Navbar and sets up the global styles and fonts.
- **src/app/globals.css**: Global CSS file that includes Tailwind CSS base, components, and utilities, as well as custom styles and font definitions.
- **src/app/components/Navbar/index.tsx**: Navbar component that provides navigation links and search functionality.
- **src/app/components/ProfileCard/index.tsx**: ProfileCard component that displays user profile information and statistics.
- **src/app/components/Home/index.tsx**: Home component that serves as the main container for the ProfileCard and Dashboard components.
- **src/app/components/Dropdown/index.tsx**: Dropdown component that allows users to select an option from a list of options.
- **src/app/components/Dashboard/index.tsx**: Dashboard component that displays the main dashboard with job listings and search functionality.
- **src/app/components/Category/index.tsx**: Category component that displays a list of similar job categories.
- **src/app/components/CardComponent/index.tsx**: CardComponent that displays a list of job cards.
- **src/app/components/CalendarSection/index.tsx**: CalendarSection component that displays a dropdown for selecting calendar events.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/FahadAbdulQayyum/transviti-resume-builder.git
   cd transviti
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Navbar**: Provides navigation links and a search bar.
- **ProfileCard**: Displays user profile information and statistics.
- **Home**: Main container for the ProfileCard and Dashboard components.
- **Dropdown**: Allows users to select an option from a list of options.
- **Dashboard**: Displays job listings and search functionality.
- **Category**: Displays a list of similar job categories.
- **CardComponent**: Displays a list of job cards.
- **CalendarSection**: Displays a dropdown for selecting calendar events.

## Custom Fonts

The project uses custom fonts defined in the `globals.css` file. Ensure that the font files are placed in the correct directory (`/fonts/`).

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.