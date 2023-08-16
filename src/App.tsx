// Importing necessary dependencies and components from React.
import { useState } from "react";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";

// Defining the main App component.
const App = () => {
    // Initializing state using the useState hook for managing expenses and the selected category.
    const [expenses, setExpenses] = useState([
        { id: 1, description: "Milk", amount: 5, category: "Groceries" },
        { id: 2, description: "Phone", amount: 1500, category: "Utilities" },
        { id: 3, description: "Restaurant", amount: 250, category: "Entertainment"},
    ]);
    const [selectedCategory, setSelectedCategory] = useState("");

    // Filtering expenses based on the selected category.
    const visibleExpenses = selectedCategory
        ? expenses.filter((exp) => exp.category === selectedCategory)
        : expenses;

    // Returning the JSX structure that forms the application.
    return (
        <div className='container'>
            {/* Application title */}
            <h1 className='text-center my-3'>Expense Tracker</h1>
            
            {/* ExpenseForm component for adding new expenses */}
            <div className='mb-5'>
                <ExpenseForm
                    onSubmit={(expense) =>
                        setExpenses([
                            ...expenses,
                            { ...expense, id: expenses.length + 1 },
                        ])
                    }
                />
            </div>
            
            {/* ExpenseFilter component for selecting expense categories */}
            <div className='mb-3'>
                <ExpenseFilter
                    onSelectCategory={(category) =>
                        setSelectedCategory(category)
                    }
                />
            </div>
            
            {/* ExpenseList component for displaying the list of expenses */}
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) =>
                    setExpenses(expenses.filter((exp) => exp.id !== id))
                }
            />
        </div>
    );
};

// Exporting the App component as the default export.
export default App;
