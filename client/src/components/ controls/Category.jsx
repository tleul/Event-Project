const CategoryList = ({ options }) => {
	return (
		<div class='input-group mb-3'>
			<select
				class='custom-select btn-outline-success'
				id='inputGroupSelect02'>
				<option selected>Choose...</option>
				{options.map((option) => (
					<option key={option.categoryName} value={option._id}>
						{option.categoryName}
					</option>
				))}
			</select>
		</div>
	);
};

export default CategoryList;
