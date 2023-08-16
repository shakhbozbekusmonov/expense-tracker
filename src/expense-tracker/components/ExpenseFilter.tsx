import categories from "./categories";

interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
    return (
        <select
            className='form-select'
            onChange={(evt) => onSelectCategory(evt.target.value)}>
            <option value=''>All categories</option>
            {categories.map((category) => (
                <option value={category} key={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default ExpenseFilter;
