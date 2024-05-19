Sure! Here is the `README.md` file for your project:

```markdown
# Portfolio App

This is a portfolio app that displays data fetched from a MongoDB database using a Node.js backend and displays it using AG Grid in a React frontend.

## Features

- Fetches data from MongoDB using a Node.js server
- Displays data using AG Grid in a React frontend
- Handles special characters in data field names

## Prerequisites

- Node.js and npm installed
- MongoDB database set up

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/yourusername/portfolio-app.git
cd portfolio-app
```

### Install Dependencies

```sh
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add your MongoDB URI:

```
MONGODB_URI=mongodb+srv://Ray:<password>@analysis.5ti03o2.mongodb.net/?retryWrites=true&w=majority&appName=analysis
```

Replace `<password>` with your actual MongoDB password.

### Run the Node.js Server

```sh
npm run server
```

### Run the React Development Server

In a new terminal, run:

```sh
npm start
```

## Project Structure

```
portfolio-app/
├── build/                  # Contains the build files after running `npm run build`
├── node_modules/           # Contains npm dependencies
├── public/                 # Contains public files
│   ├── index.html          # Main HTML file
│   └── ...
├── src/                    # Contains source files
│   ├── App.js              # Main React component
│   ├── index.js            # React entry point
│   ├── server.js           # Node.js server
│   ├── styles.css          # Custom styles
│   └── ...
├── .env                    # Environment variables
├── package.json            # Project metadata and npm scripts
└── README.md               # Project documentation
```

## API Endpoints

### `GET /api/data`

Fetches data from the MongoDB database.

## Usage

### Transforming Data

The data fetched from the MongoDB database is transformed to replace dots in field names with underscores to avoid issues with special characters.

```javascript
const transformData = (data) => {
  return data.map(item => {
    const newItem = {};
    for (const key in item) {
      const newKey = key.replace(/\./g, '_'); // Replace dots with underscores
      newItem[newKey] = item[key];
    }
    return newItem;
  });
};
```

### Column Definitions

Ensure that the field names in the column definitions match the transformed field names.

```javascript
const [columnDefs] = useState([
  { field: "Stock_Symbol", minWidth: 150 },
  { field: "Company_Name", minWidth: 200 },
  { field: "Market_Cap" },
  { field: "Stock_P_E", headerName: "Stock P/E" },
  { field: "Pledged" },
  { field: "ROCE" },
  { field: "ROE" },
  { field: "Down" },
  { field: "UP" },
  { field: "P_FII_DII", headerName: "P+FII+DII" },
  { field: "Promoters" },
  { field: "FIIs" },
  { field: "DIIs" },
  { field: "Sales_SEP_2021", headerName: "Sales SEP 2021" },
  { field: "Sales_Jun2022", headerName: "Sales Jun 2022" },
  { field: "Sales_Sep2022", headerName: "Sales Sep 2022" },
  { field: "Sales_Dec2022", headerName: "Sales Dec 2022" },
  { field: "Sales_Mar2023", headerName: "Sales Mar 2023" },
  { field: "Sales_Jun2023", headerName: "Sales Jun 2023" },
  { field: "Sales_Sep2023", headerName: "Sales Sep 2023" },
  { field: "Sales_Dec2023", headerName: "Sales Dec 2023" },
  { field: "Expense_SEP_2021", headerName: "Expense SEP 2021" },
  { field: "Expense_Jun2022", headerName: "Expense Jun 2022" },
  { field: "Expense_Sep2022", headerName: "Expense Sep 2022" },
  { field: "Expense_Dec2022", headerName: "Expense Dec 2022" },
  { field: "Expense_Mar2023", headerName: "Expense Mar 2023" },
  { field: "Expense_Jun2023", headerName: "Expense Jun 2023" },
  { field: "Expense_Sep2023", headerName: "Expense Sep 2023" },
  { field: "Expense_Dec2023", headerName: "Expense Dec 2023" },
  { field: "Operating_Profit_Sep2021", headerName: "Operating Profit Sep 2021" },
  { field: "Operating_Profit_Jun2022", headerName: "Operating Profit Jun 2022" },
  { field: "Operating_Profit_Sep2022", headerName: "Operating Profit Sep 2022" },
  { field: "Operating_Profit_Dec2022", headerName: "Operating Profit Dec 2022" },
  { field: "Operating_Profit_Mar2023", headerName: "Operating Profit Mar 2023" },
  { field: "Operating_Profit_Jun2023", headerName: "Operating Profit Jun 2023" },
  { field: "Operating_Profit_Sep2023", headerName: "Operating Profit Sep 2023" },
  { field: "Operating_Profit_Dec2023", headerName: "Operating Profit Dec 2023" },
  { field: "OPM_Sep2021", headerName: "OPM% Sep 2021" },
  { field: "OPM_Jun2022", headerName: "OPM% Jun 2022" },
  { field: "OPM_Sep2022", headerName: "OPM% Sep 2022" },
  { field: "OPM_Dec2022", headerName: "OPM% Dec 2022" },
  { field: "OPM_Mar2023", headerName: "OPM% Mar 2023" },
  { field: "OPM_Jun2023", headerName: "OPM% Jun 2023" },
  { field: "OPM_Sep2023", headerName: "OPM% Sep 2023" },
  { field: "OPM_Dec2023", headerName: "OPM% Dec 2023" },
  { field: "Profit_before_tax_Sep2021", headerName: "Profit before tax Sep 2021" },
  { field: "Profit_before_tax_Jun2022", headerName: "Profit before tax Jun 2022" },
  { field: "Profit_before_tax_Sep2022", headerName: "Profit before tax Sep 2022" },
  { field: "Profit_before_tax_Dec2022", headerName: "Profit before tax Dec 2022" },
  { field: "Profit_before_tax_Mar2023", headerName: "Profit before tax Mar 2023" },
  { field: "Profit_before_tax_Jun2023", headerName: "Profit before tax Jun 2023" },
  { field: "Profit_before_tax_Sep2023", headerName: "Profit before tax Sep 2023" },
  { field: "Profit_before_tax_Dec2023", headerName: "Profit before tax Dec 2023" },
  { field: "Net_Profit_Sep2021", headerName: "Net Profit Sep 2021" },
  { field: "Net_Profit_Jun2022", headerName: "Net Profit Jun 2022" },
  { field: "Net_Profit_Sep2022", headerName: "Net Profit Sep 2022" },
  { field: "Net_Profit_Dec2022", headerName: "Net Profit Dec 2022" },
  { field: "Net_Profit_Mar2023", headerName: "Net Profit Mar 2023" },
  { field: "Net_Profit_Jun2023", headerName: "Net Profit Jun 2023" },
  { field: "Net_Profit_Sep2023", headerName: "Net Profit Sep 2023" },
  { field: "Net_Profit_Dec2023", headerName: "Net Profit Dec 2023" },
  { field: "EPS_in_Rs_Sep2021", headerName: "EPS in Rs. Sep 2021" },
  { field: "EPS_in_Rs_Jun2022", headerName: "EPS in Rs. Jun 2022" },
  { field: "EPS_in_Rs_Sep2022", headerName: "EPS in Rs. Sep 2022" },
  { field: "EPS_in_Rs_Dec2022", headerName: "EPS in Rs. Dec 2022" },
  { field: "EPS_in_Rs_Mar2023", headerName: "EPS in Rs. Mar 2023" },
  { field: "EPS_in

_Rs_Jun2023", headerName: "EPS in Rs. Jun 2023" },
  { field: "EPS_in_Rs_Sep2023", headerName: "EPS in Rs. Sep 2023" },
  { field: "EPS_in_Rs_Dec2023", headerName: "EPS in Rs. Dec 2023" },
]);
```

## Contributing

If you have suggestions for improving this project, please feel free to submit an issue or a pull request.

## License

This project is licensed under the MIT License.
```

This `README.md` file provides a comprehensive overview of the project, including instructions on how to set up, run, and use the application. It also covers the project structure, API endpoints, and usage details. Feel free to customize this further based on your specific requirements.
