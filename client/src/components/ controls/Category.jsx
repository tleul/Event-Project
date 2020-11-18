const CategoryList = ({ options, categoryselector, error }) => {
	return (
		<>
			<div className='input-group mb-3'>
				<select
					onChange={categoryselector}
					className='custom-select btn-outline-success'
					id='inputGroupSelect02'>
					<option value=''>Choose...</option>
					{options.map((option) => (
						<option
							key={option.categoryName}
							value={option.categoryName}>
							{option.categoryName}
						</option>
					))}
				</select>
			</div>{' '}
			{error && (
				<div class='alert alert-danger' role='alert'>
					{error}
				</div>
			)}
		</>
	);
};

export default CategoryList;
